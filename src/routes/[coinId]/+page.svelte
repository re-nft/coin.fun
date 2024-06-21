<script lang="ts">
  import { page } from '$app/stores';

  $: coinId = $page.params.coinId;
</script>

<h1>Coin Details for {coinId}</h1>

<div class="mb-16 mt-16 hidden p-4 md:block">
  <div class="flex justify-center">
    <a
      class="-mt-5 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-2xl font-medium text-slate-50 ring-offset-white transition-colors hover:bg-transparent hover:font-bold hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300"
      href="/board">[go back]</a
    >
  </div>
  <div class="mt-4 flex space-x-8">
    <div class="flex w-2/3 flex-col gap-2">
      <div
        class="flex w-full items-center justify-between text-xs text-green-300"
      >
        <div class="flex items-center gap-4">
          <div class="text-gray-400">Molly the cat</div>
          <div class="text-gray-400">Ticker: MTC</div>
          <div>Market cap: $3,719.262</div>
          <div class="text-gray-400">
            <div
              class="flex items-center"
              data-dashlane-rid="1dcc1cf0c09b99c0"
              data-form-type="other"
            >
              <label for="copy-ca">CA:</label><input
                id="copy-ca"
                class="ml-2 block w-full rounded-s-sm border border-gray-700 bg-black/10 px-1 py-0.5 text-xs focus-visible:outline-dashed focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50"
                readonly=""
                type="text"
                value="FcnfsRn5exavV45ZpDpDMM6ngo8XW1JfDS42zNwNpump"
                data-dashlane-rid="6859334d03d2512c"
                data-form-type="other"
              /><button
                class=" inline-flex min-w-fit cursor-pointer items-center rounded-e-sm border border-s-0 border-gray-700 bg-black/20 px-2 py-0.5 text-xs text-gray-500 hover:bg-black/40 focus-visible:outline focus-visible:outline-1"
                data-dashlane-rid="b077759fae50e971"
                data-form-type="other"
                data-dashlane-label="true">copy</button
              >
            </div>
          </div>
        </div>
        <div class="inline-flex items-center gap-2 text-sm">
          <span>created by</span><a href="/profile/MTC54"
            ><span class="flex items-center gap-1"
              ><img
                alt=""
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                data-nimg="1"
                class="h-4 w-4 rounded"
                src="https://pump.mypinata.cloud/ipfs/QmUrWAiJuxmdzvKSgRGAYzPkQsHNDj6hyGnAxtD63wxrdB?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                style="color: transparent;"
              /><span
                class="flex gap-1 rounded px-1 text-black hover:underline"
                style="background-color: rgb(127, 173, 211);"
                >MTC54
              </span></span
            ></a
          >
        </div>
      </div>
      <div class="h-4/8">
        <div class="grid h-fit gap-2">
          <div class="chart-container">
            <div
              id="tv-chart-prw1h6agm5e"
              class=""
              style="height: 400px; width: 99%;"
            >
              <iframe
                id="tradingview_d0e0d"
                name="tradingview_d0e0d"
                src="blob:https://pump.fun/6ab88d49-cd5b-4895-a1ae-2684fcd45ac2"
                data-widget-options="symbol=MTC&amp;interval=5&amp;widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22news%22%3Afalse%2C%22datawindow%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&amp;timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%226m%22%2C%22resolution%22%3A%22120%22%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%2260%22%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%2230%22%7D%2C%7B%22text%22%3A%225d%22%2C%22resolution%22%3A%225%22%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%221%22%7D%5D&amp;locale=en&amp;uid=tradingview_d0e0d&amp;clientId=0&amp;userId=0&amp;chartsStorageVer=1.0&amp;debug=false&amp;timezone=Etc%2FUTC&amp;theme=dark"
                title="Financial Chart"
                frameborder="0"
                allowtransparency="true"
                scrolling="no"
                allowfullscreen=""
                style="display: block; width: 100%; height: 100%;"
              >
              </iframe>
            </div>
            <div class="hidden">
              <div id="dexscreener-embed">
                <iframe
                  src="https://dexscreener.com/solana/null?embed=1&amp;theme=dark&amp;trades=0&amp;info=0"
                  data-dashlane-frameid="922"
                  style="height: 400px; width: 99%;"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 flex h-fit gap-2">
        <div class="cursor-pointer rounded bg-green-300 px-1 text-black">
          Thread
        </div>
        <div
          class="cursor-pointer rounded px-1 text-gray-500 hover:bg-gray-800"
        >
          Trades
        </div>
      </div>
      <div class="relative grid gap-1 text-slate-300">
        <div class="grid h-fit gap-1 bg-[#2e303a] p-1 text-sm">
          <div class="flex gap-1 text-xs">
            <a href="/profile/MTC54"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmUrWAiJuxmdzvKSgRGAYzPkQsHNDj6hyGnAxtD63wxrdB?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(127, 173, 211);"
                  >MTC54 (dev)</span
                ></span
              ></a
            >
            <div class="text-slate-400">21/06/2024, 16:03:39</div>
          </div>
          <div
            class="relative flex items-start gap-3 overflow-auto text-xs text-slate-300"
          >
            <img
              src="https://pump.mypinata.cloud/ipfs/QmUrWAiJuxmdzvKSgRGAYzPkQsHNDj6hyGnAxtD63wxrdB"
              class="w-32 cursor-pointer object-contain"
            />
            <div class="grid">
              <div class="text-sm font-bold">Molly the cat (ticker: MTC)</div>
              <div>Molly the cute kitty on her way to the moon!!</div>
            </div>
          </div>
        </div>
        <div class="cursor-pointer justify-self-center hover:underline">
          [Post a reply]
        </div>
      </div>
    </div>
    <div class="grid h-fit w-1/3 w-fit gap-4">
      <div class="grid w-[350px] gap-4">
        <div
          class="grid gap-4 rounded-lg border border-none bg-[#2e303a] p-4 text-gray-400"
          data-dashlane-rid="01df3663469731ba"
          data-form-type="other"
        >
          <div class="mb-4 grid grid-cols-2 gap-2">
            <button class="rounded bg-green-400 p-2 text-center text-primary"
              >Buy</button
            ><button class="text-grey-600 rounded bg-gray-800 p-2 text-center"
              >Sell</button
            >
          </div>
          <div class="flex w-full justify-between gap-2">
            <button
              class="rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-gray-300"
              >switch to MTC</button
            ><button
              class="rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r25:"
              data-state="closed">Set max slippage</button
            >
          </div>
          <div class="flex flex-col">
            <div class="relative flex items-center rounded-md bg-[#2e303a]">
              <input
                class="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 pl-3 text-sm text-white outline-none ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
                id="amount"
                placeholder="0.0"
                type="number"
                data-dashlane-rid="ad224402b51f4df2"
                data-form-type="other"
                value=""
              />
              <div class="absolute right-2 ml-2 flex items-center">
                <span class="mr-2 text-white">SOL</span><img
                  alt="SOL"
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  class="h-8 w-8 rounded-full"
                  srcset="/_next/image?url=%2Fsolana-logo-square.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fsolana-logo-square.png&amp;w=64&amp;q=75 2x"
                  src="/_next/image?url=%2Fsolana-logo-square.png&amp;w=64&amp;q=75"
                  style="color: transparent;"
                />
              </div>
            </div>
            <div class="mt-2 flex rounded-lg bg-[#2e303a] p-1">
              <button
                class="-ml-1 rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                data-dashlane-rid="c5ba6005dbd06b84"
                data-form-type="action"
                data-dashlane-label="true">reset</button
              ><button
                class="ml-1 rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                data-dashlane-rid="bbb8f7fa224f22fa"
                data-form-type="action"
                data-dashlane-label="true">1 SOL</button
              ><button
                class="ml-1 rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                data-dashlane-rid="a333dc292869d84d"
                data-form-type="action"
                data-dashlane-label="true">5 SOL</button
              ><button
                class="ml-1 rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                data-dashlane-rid="89d7450916a9de47"
                data-form-type="action"
                data-dashlane-label="true">10 SOL</button
              >
            </div>
          </div>
          <button
            class="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-green-400 px-4 py-3 text-sm font-medium text-primary ring-offset-white transition-colors hover:bg-green-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:ring-offset-slate-950 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300"
            data-dashlane-rid="761f035cb9b10d5f"
            data-form-type="action"
            data-dashlane-label="true">place trade</button
          >
        </div>
      </div>
      <div
        class="grid w-[350px] gap-4 rounded-lg border border-none bg-transparent text-gray-400"
      >
        <div class="flex gap-4">
          <a
            href="https://x.com/Molly_solona"
            target="_blank"
            rel="noopener noreferrer"
            class=" text-gray-400 hover:underline">[twitter]</a
          ><a
            href="https://t.me/Molly_cto_CTO"
            target="_blank"
            rel="noopener noreferrer"
            class=" text-gray-400 hover:underline">[telegram]</a
          ><a
            href="https://x.com/Molly_solona"
            target="_blank"
            rel="noopener noreferrer"
            class=" text-gray-400 hover:underline">[website]</a
          >
        </div>
        <div class="flex h-fit items-start gap-3">
          <img
            src="https://pump.mypinata.cloud/ipfs/QmUrWAiJuxmdzvKSgRGAYzPkQsHNDj6hyGnAxtD63wxrdB"
            class="w-32 cursor-pointer object-contain"
          />
          <div>
            <div class="text-sm font-bold">Molly the cat (ticker: MTC)</div>
            <div class="text-xs text-gray-400">
              Molly the cute kitty on her way to the moon!!
            </div>
          </div>
        </div>
        <div>
          <div class="mb-1 text-sm text-gray-400">
            bonding curve progress: 1%
          </div>
          <div
            aria-valuemax="100"
            aria-valuemin="0"
            role="progressbar"
            data-state="indeterminate"
            data-max="100"
            class="relative h-4 w-full overflow-hidden rounded-full bg-gray-700 dark:bg-slate-800"
          >
            <div
              data-state="indeterminate"
              data-max="100"
              class="h-full w-full flex-1 bg-green-300 transition-all dark:bg-slate-50"
              style="transform: translateX(-99%);"
            ></div>
          </div>
        </div>
        <div class="text-xs text-gray-400">
          when the market cap reaches $55,013 all the liquidity from the bonding
          curve will be deposited into Raydium and burned. progression increases
          as the price goes up.<br /><br />there are 787,993,903 tokens still
          available for sale in the bonding curve and there is 0.143 SOL in the
          bonding curve.
        </div>
        <div class="grid gap-2">
          <div class="text-sm text-gray-400">king of the hill progress: 0%</div>
          <div
            aria-valuemax="100"
            aria-valuemin="0"
            role="progressbar"
            data-state="indeterminate"
            data-max="100"
            class="relative h-4 w-full overflow-hidden rounded-full bg-gray-700 dark:bg-slate-800"
          >
            <div
              data-state="indeterminate"
              data-max="100"
              class="h-full w-full flex-1 bg-yellow-500 transition-all dark:bg-slate-50"
              style="transform: translateX(-100%);"
            ></div>
          </div>
          <div class="text-xs text-gray-400">
            dethrone the current king at a $26,582 mcap
          </div>
        </div>
        <div class="grid gap-2">
          <div class="flex items-center justify-between font-bold">
            Holder distribution <button
              class="whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-xs font-medium text-gray-400 ring-offset-white transition-colors hover:bg-gray-600"
              >Generate bubble map</button
            >
          </div>
          <div class="text-sm">
            <div class="grid gap-1">
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/HnUnB6Xr1HwnFzRmRQfJ674RNTdKnvVVyBQP9DJrvWwa"
                  target="_blank"
                  rel="noopener noreferrer">1. HnUnB6 🏦 (bonding curve)</a
                >
                <div>99.95%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/GdWaoWDuZFQSGKVqnAf7Dq4zbkdgBMgG9oLRX9QssWMd"
                  target="_blank"
                  rel="noopener noreferrer">2. GdWaoW</a
                >
                <div>0.04%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/61K4PjnY41fcR73kCdVnpy5TTPeZYBFyp94MyzMRSdsr"
                  target="_blank"
                  rel="noopener noreferrer">3. 61K4Pj</a
                >
                <div>0.00%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/5evWZnVJsbtiCkNPj62jK2LPwUwprnuDbFVonzKPxPPW"
                  target="_blank"
                  rel="noopener noreferrer">4. 5evWZn</a
                >
                <div>0.00%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/CCeHtPnszLi9CgVd4qABWYoggJLmkorfUkF9sxKSx1Xx"
                  target="_blank"
                  rel="noopener noreferrer">5. CCeHtP</a
                >
                <div>0.00%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/2ZhnTnfAgYrQraaqbzUS3Y2d2FEDR12gX2qopoQEwycX"
                  target="_blank"
                  rel="noopener noreferrer">6. 2ZhnTn</a
                >
                <div>0.00%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/6miJC2xz4qheLTc5ZLN4xxmT4hFXKFPoTsoq4vZxJEYW"
                  target="_blank"
                  rel="noopener noreferrer">7. 6miJC2</a
                >
                <div>0.00%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/AKHjz5iiRaMLk1toTNjWvXnV4jPqWX1xnwwnbP8x7Btm"
                  target="_blank"
                  rel="noopener noreferrer">8. AKHjz5 🤵‍♂️ (dev)</a
                >
                <div>0.00%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  class="relative grid h-full pb-24 md:hidden"
  style="grid-template-rows: 1fr auto;"
>
  <div class="h-full overflow-auto p-4">
    <div class="h-full w-full" id="chart">
      <div class="grid h-fit gap-2">
        <div class="chart-container">
          <div
            id="tv-chart-m3a9p7618cl"
            class=""
            style="height: 600px; width: 95%;"
          >
            <iframe
              id="tradingview_61818"
              name="tradingview_61818"
              src="blob:https://pump.fun/454174f7-9792-4023-a537-5caed5c598c8"
              data-widget-options="symbol=MTC&amp;interval=5&amp;widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22news%22%3Afalse%2C%22datawindow%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&amp;timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%226m%22%2C%22resolution%22%3A%22120%22%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%2260%22%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%2230%22%7D%2C%7B%22text%22%3A%225d%22%2C%22resolution%22%3A%225%22%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%221%22%7D%5D&amp;locale=en&amp;uid=tradingview_61818&amp;clientId=0&amp;userId=0&amp;chartsStorageVer=1.0&amp;debug=false&amp;timezone=Etc%2FUTC&amp;theme=dark"
              title="Financial Chart"
              frameborder="0"
              allowtransparency="true"
              scrolling="no"
              allowfullscreen=""
              style="display: block; width: 100%; height: 100%;"
            >
            </iframe>
          </div>
          <div class="hidden">
            <div id="dexscreener-embed">
              <iframe
                src="https://dexscreener.com/solana/null?embed=1&amp;theme=dark&amp;trades=0&amp;info=0"
                data-dashlane-frameid="922"
                style="height: 600px; width: 95%;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="fixed bottom-0 z-10 flex w-full justify-around border-t-2 border-gray-200 bg-[#5c5f66] py-4 md:relative"
  >
    <button
      class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-black ring-offset-white transition-colors hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300"
      >[info]</button
    ><button
      class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-transparent px-4 py-2 text-sm font-bold text-white ring-offset-white transition-colors hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300"
      >[chart]</button
    ><button
      class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-black ring-offset-white transition-colors hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300"
      >[buy/sell]</button
    ><button
      class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-black ring-offset-white transition-colors hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300"
      >[txs]</button
    >
  </div>
</div>

<div class="mt-auto px-2 py-4 text-sm text-gray-400 md:px-12">
  <div class="relative flex items-center justify-between">
    <p class="flex-shrink-0">© pump.fun 2024</p>
    <p
      class="absolute left-1/2 -translate-x-1/2 transform text-center text-xs text-gray-400"
    >
      This site is protected by reCAPTCHA and the Google <a
        href="https://www.google.com/intl/en/policies/privacy/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline">Privacy Policy</a
      >
      and
      <a
        href="https://www.google.com/intl/en/policies/terms/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline">Terms of Service</a
      > apply.
    </p>
    <a
      class="flex-shrink-0"
      href="/report/coins/FcnfsRn5exavV45ZpDpDMM6ngo8XW1JfDS42zNwNpump"
      >Report</a
    >
  </div>
</div>
