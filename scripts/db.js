import { spawn, spawnSync } from 'node:child_process';

const LOCAL_HOSTNAMES = ['0.0.0.0', '127.0.0.1', 'localhost'];
const MAX_32_SIGNED_INT = Math.pow(2, 31) - 1;
const dbUrl = new URL(process.env.DB_URL);

// When we're not running against a local db we don't need to spin up docker.
if (!LOCAL_HOSTNAMES.includes(dbUrl.hostname)) {
  process.exit(0);
}

const container = spawn(
  'docker',
  [
    'run',
    '--detach',
    '--rm',
    ['--name', 'drizzle'],
    ['-e', `POSTGRES_PASSWORD=${dbUrl.password}`],
    ['-e', `POSTGRES_DB=${dbUrl.pathname.replace('/', '')}`],
    ['-p', '5432:5432'],
    'postgres'
  ].flat()
);

container.stdout.pipe(process.stdout);
container.stderr.pipe(process.stderr);

function close() {
  container.kill();
  spawnSync('docker', ['stop', 'drizzle']);
  process.exit(0);
}

async function migrate() {
  let ready = false;

  do {
    const healthcheck = spawnSync('docker', ['exec', 'drizzle', 'pg_isready']);
    process.stdout.write(healthcheck.stdout);
    process.stderr.write(healthcheck.stderr);

    if (healthcheck.status === 0) ready = true;

    await new Promise((resolve) => setTimeout(resolve, 1000));
  } while (!ready);

  const migrator = spawnSync('npx', ['drizzle-kit', 'migrate']);
  process.stdout.write(migrator.stdout);
}

// When the script has finished it will stop any child processes spawned.
// Because we want to keep the container running we set a massive timeout so
// this script keeps running.
function wait() {
  setTimeout(close, MAX_32_SIGNED_INT);
}

process.on('SIGINT', close);
process.on('SIGTERM', close);
process.on('exit', close);

migrate();
wait();
