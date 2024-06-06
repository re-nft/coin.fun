# 021 Svelte

### TODOS

v1.0 launch:

1/ once logged in user into the server side session, persist that information
in a store -> this isn't needed. we start supabase session server side
so we can retrieve the session any time. in fact, I have implemented an api
get endpoint for this
2/ ask for oauth that is longer than 1 hour initially
3/ figure out if we need to refresh the auth -> we are using this: https://supabase.com/docs/reference/javascript/auth-setsession
which it seems handles autorefresh by itself
4/ how do we check the validity of oauth tokens -> I think supabase does this check
5/ do not ask the user to connect to twitter if they have used x for web3auth
-> let's implement this
6/ fist few quests
7/ waitlist
8/ referrals
9/ some form of tokenomics
10/ leaderboard as per points
11/ how many cumulative users
12/ design and copy
13/ in tokenomics show how many $COIN points have been already claimed
14/ need urgency levers. the sooner you do quests - the more $COIN points you
get. the later you do it, the less points you will get
15/ moon math section. how much would you earn given pump.fun fees given
you have x $COIN points
16/ daily check in bonus
17/ tap on coin and earn coin (like notcoin)
18/ sentry + analytics (ga?)

hack their brain to the max

v2.0 launch:

## Template Intro

Everything you need to build a Blockchain Svelte project, powered by:

- [Svelte](https://svelte.dev/docs/introduction) & [SvelteKit](https://kit.svelte.dev/docs/introduction) for the engine.
- [Web3Auth Modal](https://web3auth.io/docs/sdk/pnp/web/modal) for accounts & wallets.
- [Solana Web3.js](https://solana.com/docs/clients/javascript) to interact with Solana.
- [Svelte Shadcn](https://www.shadcn-svelte.com/) for components (uses [`bits-ui`](https://www.bits-ui.com/docs/introduction) under the hood).
- [Lucide Icons](https://lucide.dev/icons/) for, well, icons.
- [TailwindCSS](https://tailwindcss.com/docs/installation) for styling.
- [Drizzle](https://orm.drizzle.team/docs/overview) (fo' shizzle) as an ORM.
- [PostgresJS](https://orm.drizzle.team/docs/get-started-postgresql#postgresjs) as database driver (can be swapped with whatever).

Testing is handled through:

- [Playwright](https://playwright.dev/docs/intro) for E2E testing.
- [Vitest](https://vitejs.dev/guide/) for unit/integration testing.

## Developing

- Copy env vars:

```sh
cp .env.example .env
```

- Install the dependencies:

```sh
npm install
```

- Run development environment:

```sh
npm run dev
```

The `npm run dev` command runs three other scripts with `concurrently`, namely:

- `npm run dev:app`
- `npm run dev:db`
- `npm run dev:lint`

Check our `package.json` for what these do exactly.

### [Svelte](https://svelte.dev/docs/introduction) & [SvelteKit](https://kit.svelte.dev/docs/introduction)

The engine we use is SvelteKit which enables us to write a powerful, lightweight, universal
app. The basic tenet is to work with the web's grain. Use forms and handle as much
as possible on the server; use the client for progressive enhancement.

Make special note of client/server distinctions. Files inside `src/lib/server` and
files with the `*.server.ts` suffix will be excluded from client side bundles and only
execute server side. [More info in the docs](https://kit.svelte.dev/docs/server-only-modules).

The key parts to grok:

- [Routing](https://kit.svelte.dev/docs/routing)
- [Loading data](https://kit.svelte.dev/docs/load)
- [Form actions](https://kit.svelte.dev/docs/form-actions)
- [State management](https://kit.svelte.dev/docs/state-management). Pay special attention
  to `setContext()` and `getContext()` as to not accidentally share sensitive code
  between different clients on the server.

Another key thing is that Svelte's reactivity is tied to immutability. Whenever you
call a store's `update()`, it will only dispatch updates if `Object.is()` returns `false`.

Both the [Svelte tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) and the [SvelteKit tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit) are fantastic resources.

### [Web3Auth Modal](https://web3auth.io/docs/sdk/pnp/web/modal)

This project provides a basic implementation of Web3Auth (on Solana). The relevant parts
can be found in `src/vendor/web3auth.ts`. The corresponding store and Svelte link-up
can be found in `src/lib/user.ts`.

`Web3Auth` provides easily configurable social- and wallet login functionality. In the case
of a social login a wallet will be created automatically. Note that this wallet auto-accepts
signature and txn requests. Confirmation dialogs need to be handled on the client ourselves
in order to provide the best UX.

The `UserStore` initializes a Web3Auth instance on the client. After the modal is initialized
we check whether we have an active session. If so, we fetch the user's info, a `SolanaWallet`
is initialized, and we fetch the available accounts for this user.

When it's required to add functionality it's best to extend the `UserStore` interface
as to keep programmatic control of the modal as much on Svelte's side as possible.
The `Web3Auth` instance itself is a class which can't be hooked up Svelte's stores
in an easy way.

### [Solana Web3.js](https://solana.com/docs/clients/javascript)

The `@solana/web3.js` library is responsible for interfacing with Solana. There are two parts
here. Currently we export a publicly available (on both client and server) `Connection` in
`src/vendor/solana.ts`.

At a later point it would be prudent to have a module available which sets up a wallet
with our private key in `src/lib/server/solana.ts`. This module will never be exposed
publicly client side.

### [Svelte Shadcn](https://www.shadcn-svelte.com/) Components, [TailwindCSS](https://tailwindcss.com/docs/installation), and [Lucide](https://lucide.dev/icons/) icons

Out-of-the-box components are provided by Shadcn. They offer easy copy-paste components.

In order to add a new component perform the following steps:

1. [Navigate to a cool component](https://www.shadcn-svelte.com/docs/components/accordion) on the Svelte Shadcn website.
2. Execute the command provided, like `npx shadcn-svelte@latest add accordion`.
3. Format `npm run format` and commit it.
4. If required, write a reusable component in `src/lib/components`, like
   the example `src/lib/components/collapsible.svelte` component.

Svelte Shadcn uses the [`bits-ui`](https://www.bits-ui.com/docs/introduction) headless UI library under the hood. Refer to their
[documentation](https://www.bits-ui.com/docs/introduction) about specific component props, hooks, styling and API.

Another thing of note is that, instead of using `clsx()` directly to orchestrate and
merge classes, there's a `cn()` utility in `src/utils/ui.ts` which leverages
`tailwind-merge` to allow class overrides where needed.

Lucide is what we use to provide us with a metric ton of out-of-the-box icons. Note
that there are two ways to import the icons. You could `import { ... } from 'lucide-svelte';` but this has a negative effect on build time because it needs to tree-shake
the complete library. Rather use the following method and import icons directly:

```ts
import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
```

### [Drizzle](https://orm.drizzle.team/docs/overview) & PostgresJS

We use Drizzle for our ORM. Our schema is located in `src/lib/server/schema.ts` and the
database initialization code is located in `src/lib/server/db.ts`.

When you want to update the database schema, make the required changes in our
schema file. Afterwards run `npm run db:generate` to have [`drizzle-kit`](https://orm.drizzle.team/kit-docs/overview) generate
the migration files. You can apply the migration with `npm run db:migrate`.

We have [`drizzle-valibot`](https://orm.drizzle.team/docs/valibot) installed to use as a validation library. This allows us
to easily write validations or infer the corresponding TypeScript types. An example
of how fetching, posting and validation can be done can be found in
`src/routes/+page.server.ts`.

For development we spin up a postgres docker container and automate migrations in
`scripts/db.js`. This script can also be executed with `npm run dev:db`.

## Linting & Formatting

Linting is done through `eslint` and `svelte-check`. Formatting done by `prettier`.

- Lint code: `npm run lint`.
- Format code: `npm run format`.

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Testing: [Playwright](https://playwright.dev/docs/intro) & [Vitest](https://vitejs.dev/guide/)

Running `npm run test` will run both Playwright and Vitest. We also provide:

- `npm run test:integration` for running Playwright.
- `npm run test:integration` for running Vitest.

Both runners offer lots of extras. Run `npm run test:integration -- --help` or
`npm run test:unit -- --help` for more information.

Of note is Playwright's codegen: `npm run codegen` which allows you to scaffold
E2E tests easily. Another thing of note is Playwright's UI mode, accessible through
`npm run test:integration -- --ui`.

Please note that fixtures for the blockchain and database need to be set up still.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
