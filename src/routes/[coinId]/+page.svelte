<script lang="ts">
  import { page } from '$app/stores';

  interface CommentProps {
    id: string;
    author: {
      name: string;
      avatar: string;
      color: string;
    };
    timestamp: string;
    content: string;
    likes: number;
    mentions?: string[];
    image?: string;
  }

  function Comment(props: CommentProps) {
    return `
      <div id="${props.id}" class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200">
        <div class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400">
          <a href="/profile/${props.author.name}">
            <span class="flex items-center gap-1">
              <img alt="" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" class="h-4 w-4 rounded" src="${props.author.avatar}" style="color: transparent;">
              <span class="flex gap-1 rounded px-1 text-black hover:underline" style="background-color: ${props.author.color};">
                ${props.author.name}
              </span>
            </span>
          </a>
          <div>${props.timestamp}</div>
          <div class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <div>${props.likes}</div>
          </div>
          <div class="cursor-pointer justify-self-end hover:underline">${props.id} [reply]</div>
        </div>
        ${props.mentions ? `
          <div class="flex gap-1 text-xs text-slate-400">
            Mentions: ${props.mentions.map(m => `<a href="#${m}" class="text-green-300 hover:underline">#${m}</a>`).join(' ')}
          </div>
        ` : ''}
        <div class="flex items-start gap-2">
          ${props.image ? `<img src="${props.image}" class="max-h-[500px] w-32 cursor-pointer object-contain">` : ''}
          <div>${props.content}</div>
        </div>
        <div class="flex gap-2"></div>
      </div>
    `;
  }

  const comments = [
  {
    id: "4054817",
    author: {
      name: "9SS8XC",
      avatar: "https://pump.mypinata.cloud/ipfs/Qmbny4caFxuQ9dV9z37AxqQa2S7N2pavbPXHapF4agDXBg?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(169, 241, 251)",
    },
    timestamp: "13:47:08",
    content: "CTO -https://t.me/Poseidon_CTO",
    likes: 0,
    image: "https://pump.mypinata.cloud/ipfs/QmYmKcCSyhZVR4FB7t7nWoy1pp5LcfWBwHLvRwDuAUTz7y"
  },
  {
    id: "4054839",
    author: {
      name: "wolf",
      avatar: "https://pump.mypinata.cloud/ipfs/QmUeioJEkpgx327RX5VbiZecrN1vLfZ7hcVDXYTBgbRjwr?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(192, 209, 221)",
    },
    timestamp: "13:47:38",
    content: "Easy sendor... binance dog hit 1 mil, this is second best if not better since it's a cat. SEND IT!",
    likes: 1
  },
  {
    id: "4054137",
    author: {
      name: "27wS9G",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(174, 177, 143)",
    },
    timestamp: "13:22:06",
    content: "rug the I buy",
    likes: 1,
  },
  {
    id: "4054147",
    author: {
      name: "djaarot",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(141, 193, 209)",
    },
    timestamp: "13:22:36",
    content: "lfg",
    likes: 1,
  },
  {
    id: "4054192",
    author: {
      name: "27wS9G",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(174, 177, 143)",
    },
    timestamp: "13:24:47",
    content: "dev make a tg",
    likes: 1,
  },
  {
    id: "4054210",
    author: {
      name: "Pannasvart",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(218, 137, 151)",
    },
    timestamp: "13:25:40",
    content: "DEV WHERES THE TG",
    likes: 1,
  },
  {
    id: "4054216",
    author: {
      name: "Pannasvart",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(218, 137, 151)",
    },
    timestamp: "13:26:05",
    content: "DEV U PAY DEX NOW AND SEND SOLSCAN",
    likes: 1,
  },
  {
    id: "4054220",
    author: {
      name: "Pannasvart",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(218, 137, 151)",
    },
    timestamp: "13:26:30",
    content: "NO ONE APE HE HASNT PAID ANYTHING",
    likes: 1,
  },
  {
    id: "4054225",
    author: {
      name: "johnwaka",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(175, 145, 191)",
    },
    timestamp: "13:26:55",
    content: "https://x.com/binance/status/1248973179965468677",
    likes: 1,
  },
  {
    id: "4054249",
    author: {
      name: "Pannasvart",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(218, 137, 151)",
    },
    timestamp: "13:27:21",
    content: "Told ya",
    likes: 1,
  },
  {
    id: "4054254",
    author: {
      name: "27wS9G",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(174, 177, 143)",
    },
    timestamp: "13:27:34",
    content: "dev could you rug now? and with your other wallets, ty",
    likes: 1,
  },
  {
    id: "4054278",
    author: {
      name: "27wS9G",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(174, 177, 143)",
    },
    timestamp: "13:28:16",
    content: "okay he is out",
    likes: 1,
  },
  {
    id: "4054292",
    author: {
      name: "27wS9G",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(174, 177, 143)",
    },
    timestamp: "13:28:47",
    content: "I will cto it, making tg",
    likes: 1,
  },
  {
    id: "4054330",
    author: {
      name: "Pannasvart",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(218, 137, 151)",
    },
    timestamp: "13:29:28",
    content: "LFGGGG THIS CAN RUN LETS CTO",
    likes: 1,
  },
  {
    id: "4054370",
    author: {
      name: "Pannasvart",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(218, 137, 151)",
    },
    timestamp: "13:30:45",
    content: "Make tg and post it here asap",
    likes: 1,
    mentions: ["#4054397"],
  },
  {
    id: "4054397",
    author: {
      name: "dogold",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(149, 130, 137)",
    },
    timestamp: "13:31:30",
    content: "#4054370 the guy said cto sold",
    likes: 1,
    mentions: ["#4054370"],
  },
  {
    id: "4054419",
    author: {
      name: "HXQK3P",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(166, 242, 217)",
    },
    timestamp: "13:32:22",
    content: "I will also help. lets run it",
    likes: 1,
  },
  {
    id: "4054433",
    author: {
      name: "manorman",
      avatar: "https://pump.mypinata.cloud/ipfs/QmXQEdNu7HwbwagTXAnjTWZ8raQWxM4BujgQjsgdaYmsdY?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(211, 145, 239)",
    },
    timestamp: "13:32:50",
    content: "Cto this",
    likes: 1,
  },
  {
    id: "4054447",
    author: {
      name: "djaarot",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(141, 193, 209)",
    },
    timestamp: "13:33:37",
    content: "cto this shit lfg",
    likes: 1,
  },
  {
    id: "4054449",
    author: {
      name: "HXQK3P",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(166, 242, 217)",
    },
    timestamp: "13:33:45",
    content: "Ok I will make it, have dex credits also",
    likes: 1,
  },
  {
    id: "4054466",
    author: {
      name: "HXQK3P",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(166, 242, 217)",
    },
    timestamp: "13:34:08",
    content: "https://t.me/+jjkBryq4kBk1Y2Fk",
    likes: 1,
  },
  {
    id: "4054472",
    author: {
      name: "PG",
      avatar: "https://pump.mypinata.cloud/ipfs/QmZt5vFWewLvhDZMMM7cyZ9cFdMEU1zsurcUj4ihqy5cx5?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(240, 147, 202)",
    },
    timestamp: "13:34:20",
    content: "Open Socials",
    likes: 1,
  },
  {
    id: "4054490",
    author: {
      name: "memesendor",
      avatar: "https://pump.mypinata.cloud/ipfs/QmfQ6KE59mcsswd3XGeereB2XRDBDBqJsaH5asBEt732aE?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(189, 163, 157)",
    },
    timestamp: "13:35:02",
    content: "LFG",
    likes: 1,
  },
  {
    id: "4054495",
    author: {
      name: "LastChance",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(156, 211, 246)",
    },
    timestamp: "13:35:06",
    content: "It looks cool lol",
    likes: 1,
  },
  {
    id: "4054509",
    author: {
      name: "HXQK3P",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(166, 242, 217)",
    },
    timestamp: "13:36:04",
    content: "https://t.me/+jjkBryq4kBk1Y2Fk",
    likes: 1,
  },
  {
    id: "4054370",
    author: {
      name: "Pannasvart",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(166, 242, 217)",
    },
    timestamp: "13:30:45",
    content: "Make tg and post it here asap",
    likes: 1,
    mentions: ["#4054397"]
  },
  {
    id: "4054397",
    author: {
      name: "dogold",
      avatar: "https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect",
      color: "rgb(149, 130, 137)",
    },
    timestamp: "13:31:30",
    content: "#4054370 the guy said cto sold",
    likes: 1,
    mentions: ["#4054370"]
  },
]

  $: coinId = $page.params.coinId;
</script>

<h1>Coin Details for {coinId}</h1>

<div class="my-4 flex justify-center md:hidden lg:hidden"></div>

<div class="mb-16 mt-16 hidden p-4 md:block">
  <div class="flex justify-center">
    <a
      class="-mt-5 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-2xl font-medium text-slate-50 ring-offset-white transition-colors hover:bg-transparent hover:font-bold hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300"
      href="/board">[go back]</a
    >
  </div>
  <div class="mb-4 mt-4 w-fit rounded bg-green-300 p-4">
    raydium pool seeded! view the coin on raydium <a
      class="text-blue-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      href="https://dexscreener.com/solana/79cREYHYSGe8kJSnWDKC5RPRBEWRZ18fRDjFdHi3jL6s"
      >here</a
    >
  </div>
  <div class="mt-4 flex space-x-8">
    <div class="flex w-2/3 flex-col gap-2">
      <div
        class="flex w-full items-center justify-between text-xs text-green-300"
      >
        <div class="flex items-center gap-4">
          <div class="text-gray-400">Poseidon</div>
          <div class="text-gray-400">Ticker: POSEIDON</div>
          <div>Market cap: $15,723.49</div>
          <div class="text-gray-400">
            <div class="flex items-center">
              <label for="copy-ca">CA:</label><input
                id="copy-ca"
                class="ml-2 block w-full rounded-s-sm border border-gray-700 bg-black/10 px-1 py-0.5 text-xs focus-visible:outline-dashed focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50"
                readonly={true}
                type="text"
                value="jyB2Gg5rvNx44dnAh2wmwU6Cv5DYHxp1DGz2j6Ypump"
              /><button
                class=" inline-flex min-w-fit cursor-pointer items-center rounded-e-sm border border-s-0 border-gray-700 bg-black/20 px-2 py-0.5 text-xs text-gray-500 hover:bg-black/40 focus-visible:outline focus-visible:outline-1"
                >copy</button
              >
            </div>
          </div>
        </div>
        <div class="inline-flex items-center gap-2 text-sm">
          <span>created by</span><a
            href="/profile/3GfDXSv54NNtDaonxWFnz59yWHTH1YeSoHmcTgH1x4bw"
            ><span class="flex items-center gap-1"
              ><img
                alt=""
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                data-nimg="1"
                class="h-4 w-4 rounded"
                src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                style="color: transparent;"
              /><span
                class="flex gap-1 rounded px-1 text-black hover:underline"
                style="background-color: rgb(140, 147, 158);"
                >3GfDXS
              </span></span
            ></a
          >
        </div>
      </div>
      <div class="h-4/8">
        <div class="grid h-fit gap-2">
          <div class="flex h-fit items-center gap-1 text-white">
            <div class="cursor-pointer rounded bg-green-300 px-1 text-black">
              Pump chart
            </div>
            <div
              class="cursor-pointer rounded px-1 text-gray-500 hover:bg-gray-800"
            >
              Current chart
            </div>
          </div>
          <div class="chart-container">
            <div
              id="tv-chart-c1utekxuwcj"
              class=""
              style="height: 400px; width: 99%;"
            >
              <iframe
                id="tradingview_5ffa1"
                name="tradingview_5ffa1"
                src="blob:https://pump.fun/5025ad99-5007-4a4f-81bc-14b5abc63e7a"
                data-widget-options="symbol=POSEIDON&amp;interval=1&amp;widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22news%22%3Afalse%2C%22datawindow%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&amp;timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%226m%22%2C%22resolution%22%3A%22120%22%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%2260%22%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%2230%22%7D%2C%7B%22text%22%3A%225d%22%2C%22resolution%22%3A%225%22%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%221%22%7D%5D&amp;locale=en&amp;uid=tradingview_5ffa1&amp;clientId=0&amp;userId=0&amp;chartsStorageVer=1.0&amp;debug=false&amp;timezone=Etc%2FUTC&amp;theme=dark"
                title="Financial Chart"
                frameborder="0"
                allowtransparency={true}
                scrolling="no"
                allowfullscreen={true}
                style="display: block; width: 100%; height: 100%;"
              >
              </iframe>
            </div>
            <div class="hidden">
              <div id="dexscreener-embed">
                <iframe
                  src="https://dexscreener.com/solana/79cREYHYSGe8kJSnWDKC5RPRBEWRZ18fRDjFdHi3jL6s?embed=1&amp;theme=dark&amp;trades=0&amp;info=0"
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
      <div
        class="w-full rounded-lg bg-transparent text-xs text-gray-400 sm:text-sm"
      >
        <div class="mb-3 flex items-center gap-2">
          <label for="tradesByFollowing">Filter by following</label><button
            type="button"
            role="switch"
            aria-checked="false"
            data-state="unchecked"
            data-disabled=""
            disabled={true}
            value="on"
            class="peer inline-flex h-4 w-11 shrink-0 cursor-pointer items-center rounded border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-300 data-[state=unchecked]:bg-slate-500 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-800"
            id="tradesByFollowing"
            ><span
              data-state="unchecked"
              data-disabled=""
              class="pointer-events-none block h-3 w-5 rounded-[.2rem] bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-950"
            ></span></button
          > connect your wallet to filter
        </div>
        <div class="grid grid-cols-4 rounded-lg bg-[#2e303a] sm:grid-cols-6">
          <div class="col-span-1 p-3 text-left font-normal">account</div>
          <div class="col-span-1 hidden p-3 text-left font-normal sm:block">
            type
          </div>
          <div class="col-span-1 p-3 text-left font-normal sm:hidden">txn</div>
          <div class="col-span-1 p-3 text-left font-normal">SOL</div>
          <div class="col-span-1 p-3 text-left font-normal">POSEIDON</div>
          <div class="col-span-1 hidden p-3 text-left font-normal md:block">
            <div class="flex items-center">
              date <button
                class="ml-1 inline-block align-middle hover:text-gray-300"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style="position: relative; top: 1px;"
                  ><path
                    d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z"
                  ></path></svg
                ></button
              >
            </div>
          </div>
          <div class="col-span-1 hidden p-3 text-right font-normal sm:block">
            transaction
          </div>
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/21yJxgMqBSs75dJeabUTBXVJM7uMyC2oJp58hQHgsZFw"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(222, 243, 187);"
                  >21yJxg
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            7.2381
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            18.80m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5dXsWhWzmA8YFBp94zgCg5vLpnWkTiNAZi4T4kUDg5XuiVwtkGGK5Sthn4FB6E7LEKH357gjntguRfqe3oVXmeYD"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5dXsWh</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/HKkTCTNk7k7AJVFJjpn7UBfvRypAmMkZVegowHqkJ6wj"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(252, 181, 174);"
                  >HKkTCT
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.1071
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            297.17k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/6s3ZkxrKKRmxbXgcD7bET9u6XPmw7t4GURBHXGw7gUNK2Jo6rWReMKHrdkm7ojVLXqeQxAB2u7MeUWkXiKUJtcF"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >6s3Zkx</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/rygghhvhn"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(243, 216, 152);"
                  >rygghhvhn
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.5921
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            4.49m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/WCqribVyheEgdGnkiynQmbeUNTQwcXV5UzBTi5x5giv3Th9D4oH7atdD8Uu1y7DMcN3c5eTnNzkFbVY6hLxT8ve"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >WCqrib</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/2SX9MzADsQ6B1P1cmbWCmuFHzfLZZ7KhcrEv1vXWXgLZ"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(206, 205, 139);"
                  >2SX9Mz
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.0198
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            2.95m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/EGWpydox1jKi4KbdexGXYqavEvpK5Ymf62AUemBXu8fsLYb7am8KoWZPFeY4KffqpjqVf7MXM9F92pcwEL5HAXW"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >EGWpyd</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/8nSuV8"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmQKaVh1B2pLJ4tddGDFdc2vEWSxmiNHKuCpoLkFeW7jXW?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(217, 247, 195);"
                  >8nSuV8
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.0206
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.01m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4CNJaRk3W38qzv5WZ5bMV4ZjV1Jn5uhY238NTwtHmanXC8qVyyD5e6gz7pyYExcvcyq3Rq9WYMdAzBkHaDWpvDaA"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4CNJaR</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/DHb8SqdV662GVcvRB39qSHTiApbSQX6sEF9GuuioUu6b"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(151, 142, 172);"
                  >DHb8Sq
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.0491
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.15m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4PK2ZoYALLqMgnaibtXpgyx7MGKbdvKzhRMLsKmEo7bQcREU3C9Vm9CR6pku6XKYBEYary7g361ou8t1HyoE9bZt"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4PK2Zo</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/78zTfxY5iBiMyenMHkuGzEoAg2Prtfpjdru3dSRjCtq3"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(204, 234, 167);"
                  >78zTfx
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.1854
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            566.45k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/TUfygH5Ci7SBPfzFm6GprNpbsXV5UXHMM27cnnjiNsGHcZ2jsPVvPutpuaFD3KwQQHjQiuyjtBrGwDK7nqv47Pq"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >TUfygH</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/HjHcjEz34Nmd6ndUQy1u618MYqxBYjum4hqm8ZZEfqWS"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(231, 155, 170);"
                  >HjHcjE
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0314
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            95.58k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5NeW9XN4VoHGKSFDTJone4uDre2oS6YsztiLhwHQyq2WCwGZNPhNgT2aMEMoNEF5UqmnrHcWiFw8M3m1mbLBHuhj"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5NeW9X</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/2KBynUhy1UrgtLFZaranRgvc88XV9bkJswDRfkDdSgsK"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(182, 133, 146);"
                  >2KBynU
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.2089
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            635.49k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/2Ej3JXb17RBcB5o5Na46QvKT9BfctyEtBa9MCZXASLf2Kmu1bQqt8FxFegDWuPraDoM9efv1cYdTQYUid24eUpts"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >2Ej3JX</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/8nSuV8"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmQKaVh1B2pLJ4tddGDFdc2vEWSxmiNHKuCpoLkFeW7jXW?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(217, 247, 195);"
                  >8nSuV8
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.0207
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.16m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/2mowajmmRc2j32z7NE9iprfJwyB9Kt77Rs4DYHZGaPZPmHhNADWT3VSEMDxMY7MMVnNgBoNG8UCZBtt8ZPuv6Rob"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >2mowaj</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/EkKnKGX3sihp2VJKKRNZsJEH7MEe8w2eU5MA7sm8dQN5"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(228, 242, 196);"
                  >EkKnKG
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0300
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            95.58k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/2kocR3tezBYVMrfkrgv7YFeB2xrbYir25kKJCqcb1J2gm4SEMmVcb35E3FUbWDKTHNivAjDbFMDCG5Z3Rqchn9GS"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >2kocR3</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/EGUvJGw4ME4M83PrwdyvNbPoYYaCQqHXvv8zVfjdHZ88"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(223, 206, 206);"
                  >EGUvJG
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.0006
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.16m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5S4RXzwstUVssSPTFWSfEoQzFrexQAT12iVsL4euqPMUWQoHmrf9o4xYe5CnFaPrzRoCnsVPmxPbUpXBNgPgHZW7"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5S4RXz</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/GRUbxAL8baH9erTEpn7JrgXNNSVn1zW3WZSFZMbaocim"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(160, 188, 210);"
                  >GRUbxA
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.3130
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.00m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4FAKLjD3hLFzWovXJB8NXKiEgbx842PqyVVUVqSb1UTdgRC6Q2Vowo4pLoUZR7TTeKKwVBotnVJWBhJs2d4K2MVq"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4FAKLj</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/Fywp912WJxnc6BY6Q2FEkUGy9xyK9YvcGqmbCUUwzf2k"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(163, 154, 211);"
                  >Fywp91
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.2077
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            670.02k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/425B8ouFc3m1wv2g9reV497JJQau9po7pATrkXfdDsv35hxwoqdoc69wEdzq2SaHHcZPPefhkYNSghLf62UVy9bK"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >425B8o</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/BuXbw8"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(157, 149, 185);"
                  >BuXbw8
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.4065
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.31m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3PipBmHxbK7gkG2NYuxLEQybiXfrzkw788k9eoxtiQshwYVxiVFvTyw51yUriHXuX5Cd6MTCHUviPtpzZ28WAkAa"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3PipBm</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/bFwKfwFPJT6GT69gWSfq9poiYENXjbDigQr6TzTDkaK"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(214, 230, 178);"
                  >bFwKfw
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.9802
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.19m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/FiaNTfKXm8po4enVCJGKZWFyRcDN9E9tNv3vczno4kx43gChtmx1xeato3BdkGJ6fxxuR8JvLW8Hgg1fbL3pB4N"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >FiaNTf</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/2DC6TegmWuUtmuinWdQjSP4vxwxccPtNanr9K56ziWyy"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(245, 214, 174);"
                  >2DC6Te
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0238
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            78.04k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3FmgGM7WRAXdhC5mekXzV4WoH7eHhKweZUqNj7wsRTWPZZBncHhxCrTwaj7mNGksa7skSV4QMH4rJKTEnHJwnrCc"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3FmgGM</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/yjeet"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(169, 172, 205);"
                  >yjeet
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.0008
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.32m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4duHSe75t34C5P93hL7fGGzMLxE4QhQETAcVBmsoci3yyPEUemmtMYso8H3TwuddqcbmMPyrvFeyx6n741iDmAPG"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4duHSe</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/GGYQaFhJzzmfSwDbH5nLs9B7tZidWaJDbge9XcREmtWy"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(252, 200, 185);"
                  >GGYQaF
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0986
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            330.10k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/91jULcryucw1n3EnseFMbqDDLvbMHRquqP8MbmfUrh7nGPNa7w3mbVDVgdKhvMQHmMeaYYHLNAnunWestSAx558"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >91jULc</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/ojiT4EL2QFixLTZscsyHpJUAHq1Hj5XhsWqrxDpSEtn"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(200, 217, 142);"
                  >ojiT4E
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.1386
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            464.52k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5GfsutmHLmS8k5r4dxF8e3wzHvBhivYKwT2EBrhTUDDm8TwuAYSvWXdtuUkZbUQ4eZqNafzQgUgqu28fz2pQmDJ8"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5Gfsut</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/6wHhu7MmrPng11JbwKRtXWzW6k87z7AWsU6hgaxFZkhM"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(130, 237, 211);"
                  >6wHhu7
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.0000
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.37m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/2Sv59f3sSrpcvC6oTitwQjZUev5sBrXHdzvVKR1jwAjFBbaoLPQaXduv6KruKf4GknmLNVVgqgCDQCS24zHF82mo"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >2Sv59f</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/68ESkpqMjcnnsNhsD44ZGeLt3q7us2dEdacD6f9AJ3WQ"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(212, 247, 218);"
                  >68ESkp
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.2901
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            970.41k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3WhhiZ2WDuew99KtuYehXXRCT4QSESUWVFUepzVVk3ym8BMiM1H9CR9z25q5d3MkUdsMSR21dWLmYkZp5bXpWzQ"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3WhhiZ</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/sa4bnj1"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmcWRpenfxRqP3bUsbKTRstnmB6i1gujfmQAbtrxg8xW1o?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(227, 202, 239);"
                  >sa4bnj1
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.0092
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.47m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/2QpDSKWp6q5oZhZ5iok9z3Cuqv87p2y9c7oJYDUWeLiF69YqQxFRwyg38f6WasCLxuiG3ZX5Q6VW3yvZ9JVnDDJL"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >2QpDSK</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/GZ3Y3TrxtdnwXv79U9XfYHiJ6tm86DHvYiyHCzZSjVF1"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(249, 217, 179);"
                  >GZ3Y3T
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.5058
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.77m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5geTaeBKo6FtPofq3wTeSELub8BnR8acEBZFRBtBHa1vVY9sR4iNUV1sWeztxo4fwPPpc8XnEdquRyTSAPChfLXy"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5geTae</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/hexican"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmbuqhnvnsBQMgqfo7CYyQPuL6bR8cfgCvtBeMUawoXeKh?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(154, 152, 199);"
                  >hexican
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.2169
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            763.63k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/2bc2Pn6jUyd69qkaLTDM7xucc1yVXUv9J4L57XgqorrWFqqMcMpapzGBeaNiWjqoSuxsrzdc4L67gThDLzuG5TjK"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >2bc2Pn</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/3DVdgWG33BxurjN1PrGWiruSNFFicNmJ41aQh1P655Nv"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(142, 129, 237);"
                  >3DVdgW
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.2763
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            972.13k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/2i1g9GGxxkorw7rjDVnAjs5qFH1wGB9ucbEqDPrEdCwiM6Dr95S3Kh83Jku6dEcvz93AME2ncTJ3SccvKoUe2Jyb"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >2i1g9G</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/4EsDP2YwBdwWzDTynwpu74ZmQPf2AZD8aZuvJdi2Yr47"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(227, 164, 188);"
                  >4EsDP2
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.6087
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            2.15m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4ySqJ3nrz5mDohzHMcGNjQc5uZbe996gZEwcKHGtSPKh1JXvB9nNDDvkG6KbhRv2w6GhMY2Bcg2LVM5KkWSHREcm"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4ySqJ3</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/F4DBysPeKjoyNkdPSsWctd9GmVd5N3wq87FZuQLsyPdA"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(197, 240, 238);"
                  >F4DBys
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0975
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            347.54k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5oZnfdw7koGgkH32WPLmWqwkFMQhCSfiurPjoi9jgGGGbcCcNZevSZ4tAejv4GmatfBAauAVrPnCAiZwhGnpyR5m"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5oZnfd</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/GZu9RPVuwEoVnHPed5WC7cYNmLn9FpS181zmLcobJUSk"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(148, 230, 209);"
                  >GZu9RP
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.4826
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.73m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3eYyBwR3BvMbjoFSg64aZe7FTbosNDTvRN2QsyLufAPBqxaJqvRPgACty1UrbmudZjFEAar7eeJ9PmASsJ4eQ347"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3eYyBw</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/8eMmP4U3zzThTaxRfatgwcLqz5ic4rZhBYAtxjQ8FPhv"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(208, 203, 194);"
                  >8eMmP4
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0977
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            347.54k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5UotzjR55vos953asC5pTKiUM2MA626vqG39qgwfj8XWfdPzjKEZrH2Z4L8ZY7dLj3dLX9mdCg27cjnH8ypchZn9"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5Uotzj</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/HxzE41PDRgZqgyA2ab2sTKburnTzyWgw8bBtdMWMEejA"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(135, 143, 206);"
                  >HxzE41
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.4358
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.58m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5gt6zKupn2oVeoiGYDwFPf9StnbCUXXrYhkU9Zkq1W7g9UixxKHUS9iLWAWPCWnkWVybE5TSkudF1M6wo5p9TdA6"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5gt6zK</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/fd3ojf"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(149, 168, 217);"
                  >fd3ojf
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0846
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            304.76k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/2RaMULXN16JBnpipQqZMx9Y8fRVDBxhmfNEMWfwoFdvTemBDdFLCDh6BUza2ESJhUw67951aRUcCaAkGgxcjMQ9N"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >2RaMUL</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/8vDEKDX4qrnauLoWXLceDDD4QmBQMqPTJz7pR1cFwxQB"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(215, 172, 173);"
                  >8vDEKD
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.9220
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.32m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5fhAC1XyUJ9NyCCZXHBHojpM1WHTHPn7ot3JfDDJHDS69shZttYj4S4YMhpjP2Y9WpgrUNfT9tDnxABAw5WR9Ggs"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5fhAC1</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/DHb8SqdV662GVcvRB39qSHTiApbSQX6sEF9GuuioUu6b"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(151, 142, 172);"
                  >DHb8Sq
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.1175
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            3.93m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/J3UD9YsWArsRznAZ3XzHTPBHSFgPQzFn9Scqy8mpK9mvz4iQaPoUnHfDW6iap3adDzMPJMD8HvznvReg5yXDaU6"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >J3UD9Y</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/FdbpzGpgjftWXpRR8BjBtJZku5H4iZNQAnpCS8wVJtFb"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(184, 168, 161);"
                  >FdbpzG
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            4.7387
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            15.71m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4skwQYVJKDPuc6XSJMW9jrjRrQHJjLdvJn2xyif94a9WuzxQm18MToWuJA9PVgcwDtxxxbE7qy9YpxmTkvx5fQsp"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4skwQY</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/Be7G2ZNCVav76xsXNKDARF5nmbpTqBKXKHGtRqph2PZ8"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(186, 175, 200);"
                  >Be7G2Z
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0960
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            303.60k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4YKrCSy4fV4yyMSRoyY5XKigLRYfdVyUiT9C7pdcV9SejBr3UgpVgMH1hP9JBTyD2ykzJFoQuA5QzE7QmQeBQKnr"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4YKrCS</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/rygghhvhn"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(243, 216, 152);"
                  >rygghhvhn
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.5550
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            4.90m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/49umSBXkzYtFuGeofDYVFagySE9mz5VKvL4EXkSxb9KG4G6G1k5yMpPpF6FGxGBERTuQ9kF2CXAvVYmSuFbtsUBq"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >49umSB</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/DCv6KwzDJjbXZDgmpsNYwwMBiPPRF5BjtG5CX82BUNDC"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(138, 168, 239);"
                  >DCv6Kw
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0986
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            306.22k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/6225CZMTn9CueUbQ8wJuTUUWPUMPZagMEyBAKb3922TmHoTZME7DcTC8PP1FxQRVwfQKfa15deDw1Y5E5dfBpXYS"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >6225CZ</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/kenz"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(170, 206, 236);"
                  >kenz
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.5264
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.68m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/2W9a2BncJQYEKEsfxgRe62A7wgr6briAdLqGJfAzCysbeKoToNn3BbFSRXBHnb31TwHANKodSRTwxao9Sv9PWhpR"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >2W9a2B</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/BoQ6eDEtTQbXMS6caFPajjp3DdnRu6jmwJPryyQaCXrg"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(176, 178, 224);"
                  >BoQ6eD
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.3875
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.17m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3KqTKwa6jJYAQkbNE6TCHBmHXrbkUGbKUB9y7xUZSZRMQiRn2gp9eAGcZVYxWZ4hB8GtPs53cRsC1xiBQKnPZZmB"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3KqTKw</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/xnxx"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(147, 235, 217);"
                  >xnxx
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.5445
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            4.73m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/125DgCCUH7JGuiMrkaJQMtc1uPzvi9bKmMtQtvwaoNvpKSHm3dYfu2yuWWVejRv2BJRHucQxEWRxZepcfb7URZyZ"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >125DgC</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/jizz_king"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(185, 214, 140);"
                  >jizz_king
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.4000
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.22m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4zQxnXJHiT4DkyEvwH4YffW3TSycgipkWwZaqo9uBVJ69GZUifrNBEh8Rgpu6oovvF12RYWZzYg2UhwioEEPMiLW"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4zQxnX</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/DnPSZU"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(167, 195, 188);"
                  >DnPSZU
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0492
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            150.77k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/32NwDQer4P5xo6ds32vbQEaY3YbX2vLhoCB3bZVioByEvE2TEydzPvhWbd4QFr3ESYUCuT5A9hLmiAzFeB9JvxqK"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >32NwDQ</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/69vgUigu1DuCD1qzDFnUbpw7xd9LRSzCzpyPdn9w7YaN"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(231, 157, 127);"
                  >69vgUi
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.1137
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            348.84k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3cbhPVHkpVnQeYpUuLhrhyEtRMDEmX93NvPAAuWsmEQRm26UkhzgxaS1XHxRDjUUxSLvWkk3xwc6kiZqfofTJFxD"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3cbhPV</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/AcueZGVYM7fJDN4A5FUkLA3urjgh8z1bjnxctvzqCNnh"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(254, 203, 147);"
                  >AcueZG
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.2070
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            625.55k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3cYyd674pxZofrpf8zdzgfvAsXELVpw1FSENZKTtQ6AqTeaiXWvXs6SDijhNfnewMGjMY6hbRu6F1Kczq63jkTaE"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3cYyd6</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/adamsol"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(227, 243, 183);"
                  >adamsol
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.2679
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            809.92k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3cSQA5ELfm8jR2oZTKace6YneZoGS9HJLzZK333deTBFi7cJNFGCiLtwnZoxxPhwRg6TnvHqqoWq731KJEcNhMgt"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3cSQA5</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/wKdoi9Qi8EHsyx4Eyzi5E6Ww5LAucjTQag3bU4rcxtP"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(144, 199, 158);"
                  >wKdoi9
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.6986
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            2.13m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3gy1KQT9WrfhYzLMRQFDWA5J1zbB3rUQfCmxQVp3s4TeAEpURXHN2yLqet3FTPdDWvQmbyXTbGKB5PH3w6foyerS"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3gy1KQ</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/5Y5M1UxCfStEi9jZwFe3YvnyCFi8tqTnvELiyZ3vGHjc"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(191, 194, 239);"
                  >5Y5M1U
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.1491
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            451.90k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5dfQKGZ3BYai481GC6U2rtRAvLWZk19RBjNGvt2aatAHTDH3wvqMwgAjPhJ7PrjPuHLD2oGpBjN9Pg8sJqvyeufy"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5dfQKG</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/DPxs4PTpWCL23y1G6jL7TosuKsRzPkxtCC4xzfGfiDdF"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(226, 164, 168);"
                  >DPxs4P
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.4901
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.50m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3rL378CrEdSbbG3yhC9qy1aXd1dHhJ3exTjtSrpKfAQtyZ5ZyVyLn55gRqMjKxLqdw8u6fGu7vsuNxPsDejmsJsz"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3rL378</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/Lucky133"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(213, 249, 156);"
                  >Lucky133
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.8181
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            2.49m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3Fk9ceaw87Nhzkr8BgbtWCZsMEEuhzf12mqtq2EUbjLYTsYnYJv1kK1cLdhUv2v6T9ZJf4HYqArxoTnbfMHmQH2t"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3Fk9ce</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/ppRREzpvrASHHLApecDj3JWonJ8a7e8E1GK8CCwsrPR"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(234, 237, 143);"
                  >ppRREz
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0312
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            93.99k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3DmTj37ehVCT5PJyM1ZdRcWHW2AxhF6n5aRo6Ugb4SJhUo7C5y1SGQaRZALJfWRXSwWMsurxxxw44WkvJxXzyiNv"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3DmTj3</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/Jabroni"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(231, 226, 235);"
                  >Jabroni
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.1316
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            396.41k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4YsUKw61soC5X8ZRqQYkymr4iH2TkEEzGfNdzFSTgTCgkgw3dchf28Nd1Yfics4EpV2KrdQQ7CdJwrYg3cRgn4wi"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4YsUKw</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/gigachad12"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(227, 187, 202);"
                  >gigachad12
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.1039
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            313.08k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5ZQgAY7GSEVoZwrtDZGAPwqaokACiNnmW9fGeVHtjHvTu4c5UDYKhRoCEndbgsAbeMsCAPEetoTED158AQiUzXL7"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5ZQgAY</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/2KBynUhy1UrgtLFZaranRgvc88XV9bkJswDRfkDdSgsK"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(182, 133, 146);"
                  >2KBynU
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.5278
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.60m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5AA3eLEQ9HT9eHsZuiHSGy1AFs1VoFPLVPCpb4htkuimgwjPWoeDtyMPoBHhE1mS3ykrdUtfD2iZatXZZgdihyma"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5AA3eL</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/53E9A1QZz2NkHTAfofDz4L5gvstSM54frCUJDeF34zaL"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(193, 194, 222);"
                  >53E9A1
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.9826
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            6.09m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4JACFG71xLJX8TbQ5YgZocjwEA4bxSyyHdXovrMpFr4uDxdWYqcorAAu46kmeYe16wbQJY33kvvEC2zWW6H1CeBX"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4JACFG</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/allahgreat"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(186, 216, 206);"
                  >allahgreat
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.9253
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            2.80m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/p1pbwkDQi9yy28zJ56PfXUfF6JysmY596WnryqLh7aanA3FUaAgViUB7v5dSJaMiwj1KfEhBTnRETvYX2ayDg2Q"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >p1pbwk</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/2545194148"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(246, 146, 182);"
                  >2545194148
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.3589
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.08m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/3LT1KPLRrndfShJ8t28Pcfwn8BzW6WoNk2WkSNan4r4pfLpKs1T6x6nQWHcy9HNJEB7YAsQjUEBbnwKSmuPzSJZt"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >3LT1KP</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/6uk2JWU4YWVuhZMuHASEBh3GBieUZsXKYSeSW7wiywsM"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(178, 215, 198);"
                  >6uk2JW
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-red-300 sm:block">sell</div>
          <div
            class="p-3 text-left text-red-300 sm:flex sm:hidden sm:items-center"
          >
            <span>sell 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.4394
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.37m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/RfyHrfw2YaX76sR15vCKPRcvBPf6H7RXAW4yjMGJ1ER8sTynb1SjWLZb9iWEZjSsVrzdc8qDPybws8sYydhTyt9"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >RfyHrf</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/DvgLSTTDcK8NbDjknjeV4EJQTt4ntPsCufML5BhVtR2W"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(151, 216, 183);"
                  >DvgLST
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            2.9406
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            9.41m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4fUpT6NvkMvngH79cJMrgAPXrNoP3vFivnUqRA2JpqGBLPXV6Essx46KxzwXDMuJZkefbp5iboKwGrHpopapCmSY"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4fUpT6</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/E7YTPYSkD3jLxjbtGxrLUnJ5ZyZtvuhfDceFdqfA8kqd"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(245, 168, 238);"
                  >E7YTPY
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.0150
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            123.65k
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5gkmz9bLHgV35mrrVhHXKq1X3Qba5PPXU4DoFm93MN5MXv8LiPpKAkx4n8nLSaRZ5nqGkTrMx8TJ6mTqxubgntH3"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5gkmz9</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/q8Qqp33EntKqXdGoqWGVKeZEC56Xtr937tyZqyHU1Ui"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(149, 180, 239);"
                  >q8Qqp3
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            0.3099
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            2.57m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/4M6eGRVK4HnLXB5HWeGNb27cTaCUaDFk58CUgrNc97r2EbZjJH5FYbAQJoTyWksU6UteukDHJCVNEfmJM7cBASEe"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >4M6eGR</a
          >
        </div>
        <div
          class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6"
        >
          <div
            class="flex flex-wrap items-center py-3 pl-2 text-left"
            style="word-break: break-all;"
          >
            <a href="/profile/99HPwT6AQLYZLGNoJBohEdnmCH8BRTDXYBhzUBEgbgDG"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(228, 235, 136);"
                  >99HPwT
                </span></span
              ></a
            >
          </div>
          <div class="hidden p-3 text-left text-green-300 sm:block">buy</div>
          <div
            class="p-3 text-left text-green-300 sm:flex sm:hidden sm:items-center"
          >
            <span>buy 3h</span>
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            1.0000
          </div>
          <div class="overflow-hidden whitespace-nowrap p-3 text-left">
            8.46m
          </div>
          <div class="hidden p-3 text-left md:block">3h ago</div>
          <a
            href="https://solscan.io/tx/5JJBUcpgHAU2Trh8JUxDRJ31ojmGP2fG42bGszg6YWb4LtNCMemhTcRnUJveiJst6X78JxZu9y7BeJJXQXTrv2QL"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block"
            >5JJBUc</a
          >
        </div>
        <div class="mt-4 flex w-full justify-center">
          <div class="mb-20 justify-self-end">
            <div class="flex justify-center space-x-2 text-slate-50">
              <button
                disabled={true}
                class="cursor-not-allowed text-sm text-slate-400"
                >[ &lt;&lt; ]</button
              ><span>1</span><button
                class="text-sm text-slate-50 hover:bg-transparent hover:font-bold hover:text-slate-50"
                >[ &gt;&gt; ]</button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="relative grid gap-1 text-slate-300">
        <div
          class="w-fit cursor-pointer text-sm text-slate-300 hover:underline"
        >
          [scroll to bottom]
        </div>
        <div class="grid h-fit gap-1 bg-[#2e303a] p-1 text-sm">
          <div class="flex gap-1 text-xs">
            <a href="/profile/3GfDXSv54NNtDaonxWFnz59yWHTH1YeSoHmcTgH1x4bw"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(140, 147, 158);"
                  >3GfDXS (dev)</span
                ></span
              ></a
            >
            <div class="text-slate-400">21/06/2024, 13:20:54</div>
          </div>
          <div
            class="relative flex items-start gap-3 overflow-auto text-xs text-slate-300"
          >
            <img
              src="https://pump.mypinata.cloud/ipfs/QmYmKcCSyhZVR4FB7t7nWoy1pp5LcfWBwHLvRwDuAUTz7y"
              class="w-32 cursor-pointer object-contain"
            />
            <div class="grid">
              <div class="text-sm font-bold">Poseidon (ticker: POSEIDON)</div>
              <div>Binance Cat</div>
            </div>
          </div>
        </div>
        <div
          id="p4054137"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/27wS9GW25D17bHcWvY2bigrUcVDQUusjooQMng9E6AMA"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(174, 177, 143);"
                  >27wS9G
                </span></span
              ></a
            >
            <div>13:22:06</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054137 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>rug the I buy</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054147"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/djaarot"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(141, 193, 209);"
                  >djaarot
                </span></span
              ></a
            >
            <div>13:22:36</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054147 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>lfg</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054192"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/27wS9GW25D17bHcWvY2bigrUcVDQUusjooQMng9E6AMA"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(174, 177, 143);"
                  >27wS9G
                </span></span
              ></a
            >
            <div>13:24:47</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054192 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>dev make a tg</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054210"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/Pannasvart"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(218, 137, 151);"
                  >Pannasvart
                </span></span
              ></a
            >
            <div>13:25:40</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054210 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>DEV WHERES THE TG</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054216"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/Pannasvart"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(218, 137, 151);"
                  >Pannasvart
                </span></span
              ></a
            >
            <div>13:26:05</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054216 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>DEV U PAY DEX NOW AND SEND SOLSCAN</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054220"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/Pannasvart"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(218, 137, 151);"
                  >Pannasvart
                </span></span
              ></a
            >
            <div>13:26:30</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054220 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>NO ONE APE HE HASNT PAID ANYTHING</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054225"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/johnwaka"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(175, 145, 191);"
                  >johnwaka
                </span></span
              ></a
            >
            <div>13:26:55</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054225 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>https://x.com/binance/status/1248973179965468677</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054249"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/Pannasvart"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(218, 137, 151);"
                  >Pannasvart
                </span></span
              ></a
            >
            <div>13:27:21</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054249 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>Told ya</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054254"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/27wS9GW25D17bHcWvY2bigrUcVDQUusjooQMng9E6AMA"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(174, 177, 143);"
                  >27wS9G
                </span></span
              ></a
            >
            <div>13:27:34</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054254 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>dev could you rug now? and with your other wallets, ty</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054278"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/27wS9GW25D17bHcWvY2bigrUcVDQUusjooQMng9E6AMA"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(174, 177, 143);"
                  >27wS9G
                </span></span
              ></a
            >
            <div>13:28:16</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054278 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>okay he is out</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054292"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/27wS9GW25D17bHcWvY2bigrUcVDQUusjooQMng9E6AMA"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(174, 177, 143);"
                  >27wS9G
                </span></span
              ></a
            >
            <div>13:28:47</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054292 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>I will cto it, making tg</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054330"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/Pannasvart"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(218, 137, 151);"
                  >Pannasvart
                </span></span
              ></a
            >
            <div>13:29:28</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054330 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>LFGGGG THIS CAN RUN LETS CTO</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054370"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/Pannasvart"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(218, 137, 151);"
                  >Pannasvart
                </span></span
              ></a
            >
            <div>13:30:45</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054370 [reply]
            </div>
          </div>
          <div class="flex gap-1 text-xs text-slate-400">
            Mentions: <a href="#p4054397" class="text-green-300 hover:underline"
              >#4054397</a
            >
          </div>
          <div class="flex items-start gap-2">
            <div>Make tg and post it here asap</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054397"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/dogold"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(149, 130, 137);"
                  >dogold
                </span></span
              ></a
            >
            <div>13:31:30</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054397 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>
              <a
                href="#p4054370"
                class="font-bold text-green-300 hover:underline">#4054370</a
              > the guy said cto sold
            </div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054419"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/HXQK3PZqh1sbDohGv2dxnMGdWNo94FzsA6fx6PuSu5aT"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(166, 242, 217);"
                  >HXQK3P
                </span></span
              ></a
            >
            <div>13:32:22</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054419 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>I will also help. lets run it</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054433"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/manorman"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmXQEdNu7HwbwagTXAnjTWZ8raQWxM4BujgQjsgdaYmsdY?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(211, 145, 239);"
                  >manorman
                </span></span
              ></a
            >
            <div>13:32:50</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054433 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>Cto this</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054447"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/djaarot"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(141, 193, 209);"
                  >djaarot
                </span></span
              ></a
            >
            <div>13:33:37</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054447 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>cto this shit lfg</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054449"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/HXQK3PZqh1sbDohGv2dxnMGdWNo94FzsA6fx6PuSu5aT"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(166, 242, 217);"
                  >HXQK3P
                </span></span
              ></a
            >
            <div>13:33:45</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054449 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>Ok I will make it, have dex credits also</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054466"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/HXQK3PZqh1sbDohGv2dxnMGdWNo94FzsA6fx6PuSu5aT"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(166, 242, 217);"
                  >HXQK3P
                </span></span
              ></a
            >
            <div>13:34:08</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054466 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>https://t.me/+jjkBryq4kBk1Y2Fk</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054472"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/PG"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmZt5vFWewLvhDZMMM7cyZ9cFdMEU1zsurcUj4ihqy5cx5?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(240, 147, 202);"
                  >PG
                </span></span
              ></a
            >
            <div>13:34:20</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054472 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>Open Socials</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054490"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/memesendor"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmfQ6KE59mcsswd3XGeereB2XRDBDBqJsaH5asBEt732aE?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(189, 163, 157);"
                  >memesendor
                </span></span
              ></a
            >
            <div>13:35:02</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054490 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>LFG</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054495"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/LastChance"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(156, 211, 246);"
                  >LastChance
                </span></span
              ></a
            >
            <div>13:35:06</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054495 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>It looks cool lol</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054509"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/HXQK3PZqh1sbDohGv2dxnMGdWNo94FzsA6fx6PuSu5aT"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(166, 242, 217);"
                  >HXQK3P
                </span></span
              ></a
            >
            <div>13:36:04</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054509 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>https://t.me/+jjkBryq4kBk1Y2Fk</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054556"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/9t7doFjbgApfFmK77KThv789mWZS3FzQM8sYsQQa3KNr"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(222, 230, 192);"
                  >9t7doF
                </span></span
              ></a
            >
            <div>13:37:31</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054556 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>join cto - https://t.me/+jjkBryq4kBk1Y2Fk</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054591"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/manorman"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmXQEdNu7HwbwagTXAnjTWZ8raQWxM4BujgQjsgdaYmsdY?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(211, 145, 239);"
                  >manorman
                </span></span
              ></a
            >
            <div>13:38:47</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054591 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>bullish CTO</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054599"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/manorman"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmXQEdNu7HwbwagTXAnjTWZ8raQWxM4BujgQjsgdaYmsdY?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(211, 145, 239);"
                  >manorman
                </span></span
              ></a
            >
            <div>13:39:03</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054599 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>https://t.me/+MyZLwedlIEczNDBk bullish CTO</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054601"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/memesendor"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmfQ6KE59mcsswd3XGeereB2XRDBDBqJsaH5asBEt732aE?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(189, 163, 157);"
                  >memesendor
                </span></span
              ></a
            >
            <div>13:39:05</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054601 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>DEX will be paid soon, making portal</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054622"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/memesendor"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmfQ6KE59mcsswd3XGeereB2XRDBDBqJsaH5asBEt732aE?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(189, 163, 157);"
                  >memesendor
                </span></span
              ></a
            >
            <div>13:40:20</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054622 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>CTOing lead is based; LFG!</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054626"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/HXQK3PZqh1sbDohGv2dxnMGdWNo94FzsA6fx6PuSu5aT"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(166, 242, 217);"
                  >HXQK3P
                </span></span
              ></a
            >
            <div>13:40:25</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054626 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>Created portal also https://t.me/poseidoncatcto</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054638"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/memesendor"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmfQ6KE59mcsswd3XGeereB2XRDBDBqJsaH5asBEt732aE?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(189, 163, 157);"
                  >memesendor
                </span></span
              ></a
            >
            <div>13:40:52</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054638 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>He gonna pay the DEX as soon as he finishes a website</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054661"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/7Lgp6P"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(247, 128, 185);"
                  >7Lgp6P
                </span></span
              ></a
            >
            <div>13:41:41</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054661 [reply]
            </div>
          </div>
          <div class="flex gap-1 text-xs text-slate-400">
            Mentions: <a href="#p4054872" class="text-green-300 hover:underline"
              >#4054872</a
            >
          </div>
          <div class="flex items-start gap-2">
            <div>
              dex paid with credit join cto tg https://t.me/poseidoncatcto
            </div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054690"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/Be7G2ZNCVav76xsXNKDARF5nmbpTqBKXKHGtRqph2PZ8"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(186, 175, 200);"
                  >Be7G2Z
                </span></span
              ></a
            >
            <div>13:43:05</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>0</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054690 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>Is this shit going to the moon?</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054768"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/manorman"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmXQEdNu7HwbwagTXAnjTWZ8raQWxM4BujgQjsgdaYmsdY?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(211, 145, 239);"
                  >manorman
                </span></span
              ></a
            >
            <div>13:45:36</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>0</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054768 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>to the moon</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054791"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/manorman"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmXQEdNu7HwbwagTXAnjTWZ8raQWxM4BujgQjsgdaYmsdY?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(211, 145, 239);"
                  >manorman
                </span></span
              ></a
            >
            <div>13:46:09</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>0</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054791 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>Work is underway to pay for dex</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054793"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/manorman"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmXQEdNu7HwbwagTXAnjTWZ8raQWxM4BujgQjsgdaYmsdY?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(211, 145, 239);"
                  >manorman
                </span></span
              ></a
            >
            <div>13:46:17</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>0</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054793 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>guys</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054795"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/manorman"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmXQEdNu7HwbwagTXAnjTWZ8raQWxM4BujgQjsgdaYmsdY?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(211, 145, 239);"
                  >manorman
                </span></span
              ></a
            >
            <div>13:46:21</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>0</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054795 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2"><div>sendor</div></div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054817"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/9SS8XC"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/Qmbny4caFxuQ9dV9z37AxqQa2S7N2pavbPXHapF4agDXBg?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(169, 241, 251);"
                  >9SS8XC
                </span></span
              ></a
            >
            <div>13:47:08</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>0</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054817 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <img
              src="https://pump.mypinata.cloud/ipfs/QmYmKcCSyhZVR4FB7t7nWoy1pp5LcfWBwHLvRwDuAUTz7y"
              class="max-h-[500px] w-32 cursor-pointer object-contain"
            />
            <div>CTO -https://t.me/Poseidon_CTO</div>
          </div>
          <div class="flex gap-2"></div>
        </div>
        <div
          id="p4054839"
          class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200"
        >
          <div
            class="flex w-full flex-wrap items-start gap-2 text-xs text-slate-400"
          >
            <a href="/profile/wolf"
              ><span class="flex items-center gap-1"
                ><img
                  alt=""
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-4 rounded"
                  src="https://pump.mypinata.cloud/ipfs/QmUeioJEkpgx327RX5VbiZecrN1vLfZ7hcVDXYTBgbRjwr?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                  style="color: transparent;"
                /><span
                  class="flex gap-1 rounded px-1 text-black hover:underline"
                  style="background-color: rgb(192, 209, 221);"
                  >wolf
                </span></span
              ></a
            >
            <div>13:47:38</div>
            <div
              class="flex w-fit cursor-pointer items-center gap-2 hover:stroke-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
                ><path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path></svg
              >
              <div>1</div>
            </div>
            <div class="cursor-pointer justify-self-end hover:underline">
              #4054839 [reply]
            </div>
          </div>
          <div class="flex items-start gap-2">
            <div>
              Easy sendor... binance dog hit 1 mil, this is second best if not
              better since it's a cat. SEND IT!
            </div>
          </div>
          <div class="flex gap-2"></div>
        </div>


        {#each comments as comment (comment.id)}
          {@html Comment(comment)}
        {/each}


        <div
          class="absolute bottom-0 left-0 w-fit cursor-pointer text-sm text-slate-300 hover:underline"
        >
          [scroll to top]
        </div>
        <div class="cursor-pointer justify-self-center hover:underline">
          [Post a reply]
        </div>
      </div>
    </div>
    <div class="grid h-fit w-1/3 w-fit gap-4">
      <div class="grid w-[350px] gap-4">
        <div class="rounded bg-blue-500 p-2 text-white">
          Trade on raydium via Pump
        </div>
        <div
          class="grid gap-4 rounded-lg border border-none bg-[#2e303a] p-4 text-gray-400"
        >
          <div class="grid grid-cols-2 gap-2">
            <button class="rounded bg-green-400 p-2 text-center text-primary"
              >Buy</button
            ><button class="text-grey-600 rounded bg-gray-800 p-2 text-center"
              >Sell</button
            >
          </div>
          <div>
            <div class="mb-2 flex items-center justify-between">
              <div></div>
              <button
                class="rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:rf:"
                data-state="closed">Set max slippage</button
              >
            </div>
            <div class="relative flex items-center rounded-md bg-[#2e303a]">
              <input
                class="flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 pl-3 text-sm text-white outline-none ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
                placeholder="0.0"
                type="number"
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
                >reset</button
              ><button
                class="ml-1 rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                >1 SOL</button
              ><button
                class="ml-1 rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                >5 SOL</button
              ><button
                class="ml-1 rounded bg-primary px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                >10 SOL</button
              >
            </div>
          </div>
          <button
            class="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-green-400 px-4 py-3 text-sm font-medium text-primary ring-offset-white transition-colors hover:bg-green-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:ring-offset-slate-950 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300"
            >place trade</button
          >
        </div>
      </div>
      <div
        class="grid w-[350px] gap-4 rounded-lg border border-none bg-transparent text-gray-400"
      >
        <div class="flex h-fit items-start gap-3">
          <img
            src="https://pump.mypinata.cloud/ipfs/QmYmKcCSyhZVR4FB7t7nWoy1pp5LcfWBwHLvRwDuAUTz7y"
            class="w-32 cursor-pointer object-contain"
          />
          <div>
            <div class="text-sm font-bold">Poseidon (ticker: POSEIDON)</div>
            <div class="text-xs text-gray-400">Binance Cat</div>
          </div>
        </div>
        <div>
          <div class="mb-1 text-sm text-gray-400">
            bonding curve progress: 100%
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
              style="transform: translateX(0%);"
            ></div>
          </div>
        </div>
        <div class="text-xs text-gray-400">
          when the market cap reaches $0 all the liquidity from the bonding
          curve will be deposited into Raydium and burned. progression increases
          as the price goes up.<br /><br />there are 0 tokens still available
          for sale in the bonding curve and there is 0 SOL in the bonding curve.
        </div>
        <div class="font-bold text-yellow-500">
          👑 Crowned king of the hill on 21/06/2024, 13:44:34
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
                  href="https://solscan.io/account/GT85NLK8nvpUqYNjp5D2GXhWXcCcPsxoT6ZXkjGoziGn"
                  target="_blank"
                  rel="noopener noreferrer">1. GT85NL</a
                >
                <div>38.52%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/5n2NzQgHKRuHGBSss8TPBRkvjy1HNBBpFVw9qJ1STuhJ"
                  target="_blank"
                  rel="noopener noreferrer">2. 5n2NzQ</a
                >
                <div>4.23%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/9kQiNnFiaCVbRDenS4BKzgkuMjQgmndMgfS3XFWi87rB"
                  target="_blank"
                  rel="noopener noreferrer">3. 9kQiNn</a
                >
                <div>3.96%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/B6bHdQmuNDpnMiXixG1qcxhcSyCKiQ68PGHzDjKVy9y4"
                  target="_blank"
                  rel="noopener noreferrer">4. B6bHdQ</a
                >
                <div>3.42%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/pPLdkq5CcrNd7k3FAZhaFcbpH13xNqUvGKdgfuCDKj7"
                  target="_blank"
                  rel="noopener noreferrer">5. pPLdkq</a
                >
                <div>2.55%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/92sEVeLaGy2GXwcijaokHHsNtE8Y9GtmbkQMy1U5ik7c"
                  target="_blank"
                  rel="noopener noreferrer">6. 92sEVe</a
                >
                <div>2.22%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/4Kvc5vJCtqeGKEupPckUExP8eXTH2nRkUPMxtHZG8uYo"
                  target="_blank"
                  rel="noopener noreferrer">7. 4Kvc5v</a
                >
                <div>2.15%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/4SgbyGaZ2AN6sJYfZxUmXff2PCUVUUSz42UMmA5TSihr"
                  target="_blank"
                  rel="noopener noreferrer">8. 4SgbyG</a
                >
                <div>1.94%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/DZ25CGUVczLKz8mCDoNZV4JcCaH2SAGzsJ83EGtSLbRy"
                  target="_blank"
                  rel="noopener noreferrer">9. DZ25CG</a
                >
                <div>1.74%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/A6r2iwRotXSxqtMuabXz57LAaZCaEG2iJ8XGn1Sjunnq"
                  target="_blank"
                  rel="noopener noreferrer">10. A6r2iw</a
                >
                <div>1.60%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/EpyHqw9ZVHDTdrwWk58QLVSi5PVcixJo25Y3CPegXoDP"
                  target="_blank"
                  rel="noopener noreferrer">11. EpyHqw</a
                >
                <div>1.44%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/9LHBhFCugDv7Qre1uDWJJQwC7VQhbEcxNWcPEjSvXMey"
                  target="_blank"
                  rel="noopener noreferrer">12. 9LHBhF</a
                >
                <div>1.42%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/5iiwX9L57a43yb3M1sJzWiPWRazfutsDZsZ6tDGSgm2V"
                  target="_blank"
                  rel="noopener noreferrer">13. 5iiwX9</a
                >
                <div>1.33%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/E3dh8mdoixgUWm6MfEyJJLqWAfiQUsipm8KwQvchP8CS"
                  target="_blank"
                  rel="noopener noreferrer">14. E3dh8m</a
                >
                <div>1.30%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/Fq9mHTYNoNwsHJqnDiXWkJw4diY8LrG8SGM2X1AcPm7A"
                  target="_blank"
                  rel="noopener noreferrer">15. Fq9mHT</a
                >
                <div>1.13%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/8rRM8UdQUVooG43GiRoxDWkWq13C2q1FwjAVdsY5PJq8"
                  target="_blank"
                  rel="noopener noreferrer">16. 8rRM8U</a
                >
                <div>1.08%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/4KLgSj38moiSPQMCRQYPr1935AFrcZumUDkJVDLUuvN9"
                  target="_blank"
                  rel="noopener noreferrer">17. 4KLgSj</a
                >
                <div>1.03%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/9pkpUceHJbvzYiMPp48hT1v3Ypqf5THXLYVjxisJfsrR"
                  target="_blank"
                  rel="noopener noreferrer">18. 9pkpUc</a
                >
                <div>0.96%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/Cqqp1z9NwJLME5jLtV74xtfeWBqmAoGstR8ntDSVqXBH"
                  target="_blank"
                  rel="noopener noreferrer">19. Cqqp1z</a
                >
                <div>0.92%</div>
              </div>
              <div class="flex justify-between">
                <a
                  class="hover:underline"
                  href="https://solscan.io/account/CXmEK3JmKqDrPET9DMdbxTQ73h7RCo58oxKLdLp6WDS1"
                  target="_blank"
                  rel="noopener noreferrer">20. CXmEK3</a
                >
                <div>0.87%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      href="/report/coins/jyB2Gg5rvNx44dnAh2wmwU6Cv5DYHxp1DGz2j6Ypump">Report</a
    >
  </div>
</div>
