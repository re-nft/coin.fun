import { spawn, spawnSync } from 'node:child_process';

console.log(process.env.DB_URL);

const container = spawn(
  'docker',
  [
    'run',
    '--detach',
    '--rm',
    ['--name', 'drizzle'],
    ['-e', 'POSTGRES_PASSWORD=password'],
    ['-e', 'POSTGRES_DB=drizzle'],
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

    await new Promise((resolve) => setTimeout(resolve, 500));
  } while (!ready);

  const migrator = spawnSync('npx', ['drizzle-kit', 'migrate']);
  process.stdout.write(migrator.stdout);
}

function wait() {
  setTimeout(close, 1 << 30);
}

process.on('SIGINT', close);
process.on('SIGTERM', close);
process.on('exit', close);

migrate();
wait();
