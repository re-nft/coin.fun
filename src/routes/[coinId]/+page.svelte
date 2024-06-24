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
  const content = props.content.replace(/#(\d+)/g, (match, p1) => 
    `<a href="#p${p1}" class="font-bold text-green-300 hover:underline">${match}</a>`
  );

  return `
    <div id="p${props.id}" class="grid gap-1 overflow-auto bg-[#2e303a] p-1 text-sm text-slate-200">
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
        <div class="cursor-pointer justify-self-end hover:underline">#${props.id} [reply]</div>
      </div>
      ${props.mentions ? `
        <div class="flex gap-1 text-xs text-slate-400">
          Mentions: ${props.mentions.map(m => `<a href="#p${m}" class="text-green-300 hover:underline">#${m}</a>`).join(' ')}
        </div>
      ` : ''}
      <div class="flex items-start gap-2">
        ${props.image ? `<img src="${props.image}" class="max-h-[500px] w-32 cursor-pointer object-contain">` : ''}
        <div>${content}</div>
      </div>
      <div class="flex gap-2"></div>
    </div>
  `;
}

  interface TradeEntryProps {
    account: string;
    accountShort: string;
    type: 'buy' | 'sell';
    solAmount: string;
    tokenAmount: string;
    timeAgo: string;
    transactionId: string;
  }

  function TradeEntry(props: TradeEntryProps) {
    return `
      <div class="my-1 grid grid-cols-4 items-start rounded-lg bg-[#2e303a] text-xs sm:grid-cols-6">
        <div class="flex flex-wrap items-center py-3 pl-2 text-left" style="word-break: break-all;">
          <a href="/profile/${props.account}"><span class="flex items-center gap-1">
            <img alt="" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" class="h-4 w-4 rounded" src="https://pump.mypinata.cloud/ipfs/QmeSzchzEPqCU1jwTnsipwcBAeH7S4bmVvFGfF65iA1BY1?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect" style="color: transparent;">
            <span class="flex gap-1 rounded px-1 text-black hover:underline" style="background-color: ${getRandomColor()};">${props.accountShort}</span>
          </span></a>
        </div>
        <div class="hidden p-3 text-left text-${props.type === 'buy' ? 'green' : 'red'}-300 sm:block">${props.type}</div>
        <div class="p-3 text-left text-${props.type === 'buy' ? 'green' : 'red'}-300 sm:flex sm:hidden sm:items-center">
          <span>${props.type} ${props.timeAgo}</span>
        </div>
        <div class="overflow-hidden whitespace-nowrap p-3 text-left">${props.solAmount}</div>
        <div class="overflow-hidden whitespace-nowrap p-3 text-left">${props.tokenAmount}</div>
        <div class="hidden p-3 text-left md:block">${props.timeAgo}</div>
        <a href="https://solscan.io/tx/${props.transactionId}" target="_blank" rel="noopener noreferrer" class="hidden p-3 text-right hover:text-blue-500 hover:underline sm:block">${props.transactionId.slice(0, 6)}</a>
      </div>
    `;
  }

  interface HolderEntryProps {
    rank?: number;
    address: string;
    shortAddress: string;
    percentage: string;
  }

  function HolderEntry(props: HolderEntryProps) {
    return `
      <div class="flex justify-between">
        <a class="hover:underline" href="https://solscan.io/account/${props.address}" target="_blank" rel="noopener noreferrer">
          ${props.rank}. ${props.shortAddress}
        </a>
        <div>${props.percentage}</div>
      </div>
    `;
  }

  function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }

  const comments: CommentProps[] = [
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
  const trades: TradeEntryProps[] = [
    {
      account: "BoQ6eDEtTQbXMS6caFPajjp3DdnRu6jmwJPryyQaCXrg",
      accountShort: "BoQ6eD",
      type: "buy",
      solAmount: "0.3875",
      tokenAmount: "1.17m",
      timeAgo: "3h ago",
      transactionId: "3KqTKw"
    },
    {
      account: "xnxx",
      accountShort: "xnxx",
      type: "sell",
      solAmount: "1.5445",
      tokenAmount: "4.73m",
      timeAgo: "3h ago",
      transactionId: "125DgC"
    },
    {
      account: "jizz_king",
      accountShort: "jizz_king",
      type: "buy",
      solAmount: "0.4000",
      tokenAmount: "1.22m",
      timeAgo: "3h ago",
      transactionId: "4zQxnX"
    },
    {
      account: "DnPSZU",
      accountShort: "DnPSZU",
      type: "buy",
      solAmount: "0.0492",
      tokenAmount: "150.77k",
      timeAgo: "3h ago",
      transactionId: "32NwDQ"
    },
    {
      account: "69vgUigu1DuCD1qzDFnUbpw7xd9LRSzCzpyPdn9w7YaN",
      accountShort: "69vgUi",
      type: "buy",
      solAmount: "0.1137",
      tokenAmount: "348.84k",
      timeAgo: "3h ago",
      transactionId: "3cbhPV"
    },
    {
      account: "AcueZGVYM7fJDN4A5FUkLA3urjgh8z1bjnxctvzqCNnh",
      accountShort: "AcueZG",
      type: "buy",
      solAmount: "0.2070",
      tokenAmount: "625.55k",
      timeAgo: "3h ago",
      transactionId: "3cYyd6"
    },
    {
      account: "adamsol",
      accountShort: "adamsol",
      type: "sell",
      solAmount: "0.2679",
      tokenAmount: "809.92k",
      timeAgo: "3h ago",
      transactionId: "3cSQA5"
    },
    {
      account: "wKdoi9Qi8EHsyx4Eyzi5E6Ww5LAucjTQag3bU4rcxtP",
      accountShort: "wKdoi9",
      type: "sell",
      solAmount: "0.6986",
      tokenAmount: "2.13m",
      timeAgo: "3h ago",
      transactionId: "3gy1KQ"
    },
    {
      account: "5Y5M1UxCfStEi9jZwFe3YvnyCFi8tqTnvELiyZ3vGHjc",
      accountShort: "5Y5M1U",
      type: "buy",
      solAmount: "0.1491",
      tokenAmount: "451.90k",
      timeAgo: "3h ago",
      transactionId: "5dfQKG"
    },
    {
      account: "DPxs4PTpWCL23y1G6jL7TosuKsRzPkxtCC4xzfGfiDdF",
      accountShort: "DPxs4P",
      type: "buy",
      solAmount: "0.4901",
      tokenAmount: "1.50m",
      timeAgo: "3h ago",
      transactionId: "3rL378"
    },
    {
      account: "Lucky133",
      accountShort: "Lucky133",
      type: "sell",
      solAmount: "0.8181",
      tokenAmount: "2.49m",
      timeAgo: "3h ago",
      transactionId: "3Fk9ce"
    },
    {
      account: "ppRREzpvrASHHLApecDj3JWonJ8a7e8E1GK8CCwsrPR",
      accountShort: "ppRREz",
      type: "buy",
      solAmount: "0.0312",
      tokenAmount: "93.99k",
      timeAgo: "3h ago",
      transactionId: "3DmTj3"
    },
    {
      account: "Jabroni",
      accountShort: "Jabroni",
      type: "sell",
      solAmount: "0.1316",
      tokenAmount: "396.41k",
      timeAgo: "3h ago",
      transactionId: "4YsUKw"
    },
    {
      account: "gigachad12",
      accountShort: "gigachad12",
      type: "buy",
      solAmount: "0.1039",
      tokenAmount: "313.08k",
      timeAgo: "3h ago",
      transactionId: "5ZQgAY"
    },
    {
      account: "2KBynUhy1UrgtLFZaranRgvc88XV9bkJswDRfkDdSgsK",
      accountShort: "2KBynU",
      type: "buy",
      solAmount: "0.5278",
      tokenAmount: "1.60m",
      timeAgo: "3h ago",
      transactionId: "5AA3eL"
    },
    {
      account: "53E9A1QZz2NkHTAfofDz4L5gvstSM54frCUJDeF34zaL",
      accountShort: "53E9A1",
      type: "buy",
      solAmount: "1.9826",
      tokenAmount: "6.09m",
      timeAgo: "3h ago",
      transactionId: "4JACFG"
    },
    {
      account: "allahgreat",
      accountShort: "allahgreat",
      type: "sell",
      solAmount: "0.9253",
      tokenAmount: "2.80m",
      timeAgo: "3h ago",
      transactionId: "p1pbwk"
    },
    {
      account: "2545194148",
      accountShort: "2545194148",
      type: "buy",
      solAmount: "0.3589",
      tokenAmount: "1.08m",
      timeAgo: "3h ago",
      transactionId: "3LT1KP"
    },
    {
      account: "6uk2JWU4YWVuhZMuHASEBh3GBieUZsXKYSeSW7wiywsM",
      accountShort: "6uk2JW",
      type: "sell",
      solAmount: "0.4394",
      tokenAmount: "1.37m",
      timeAgo: "3h ago",
      transactionId: "RfyHrf"
    },
    {
      account: "DvgLSTTDcK8NbDjknjeV4EJQTt4ntPsCufML5BhVtR2W",
      accountShort: "DvgLST",
      type: "buy",
      solAmount: "2.9406",
      tokenAmount: "9.41m",
      timeAgo: "3h ago",
      transactionId: "4fUpT6"
    },
    {
      account: "E7YTPYSkD3jLxjbtGxrLUnJ5ZyZtvuhfDceFdqfA8kqd",
      accountShort: "E7YTPY",
      type: "buy",
      solAmount: "0.0150",
      tokenAmount: "123.65k",
      timeAgo: "3h ago",
      transactionId: "5gkmz9"
    },
    {
      account: "q8Qqp33EntKqXdGoqWGVKeZEC56Xtr937tyZqyHU1Ui",
      accountShort: "q8Qqp3",
      type: "buy",
      solAmount: "0.3099",
      tokenAmount: "2.57m",
      timeAgo: "3h ago",
      transactionId: "4M6eGR"
    },
    {
      account: "99HPwT6AQLYZLGNoJBohEdnmCH8BRTDXYBhzUBEgbgDG",
      accountShort: "99HPwT",
      type: "buy",
      solAmount: "1.0000",
      tokenAmount: "8.46m",
      timeAgo: "3h ago",
      transactionId: "5JJBUc"
    }
  ];
  const holders: HolderEntryProps[] = [
    {
      address: "GT85NLK8nvpUqYNjp5D2GXhWXcCcPsxoT6ZXkjGoziGn",
      shortAddress: "GT85NL",
      percentage: "38.52%"
    },
    {
      address: "5n2NzQgHKRuHGBSss8TPBRkvjy1HNBBpFVw9qJ1STuhJ",
      shortAddress: "5n2NzQ",
      percentage: "4.23%"
    },
    {
      address: "9kQiNnFiaCVbRDenS4BKzgkuMjQgmndMgfS3XFWi87rB",
      shortAddress: "9kQiNn",
      percentage: "3.96%"
    },
    {
      address: "B6bHdQmuNDpnMiXixG1qcxhcSyCKiQ68PGHzDjKVy9y4",
      shortAddress: "B6bHdQ",
      percentage: "3.42%"
    },
    {
      address: "pPLdkq5CcrNd7k3FAZhaFcbpH13xNqUvGKdgfuCDKj7",
      shortAddress: "pPLdkq",
      percentage: "2.55%"
    },
    {
      address: "92sEVeLaGy2GXwcijaokHHsNtE8Y9GtmbkQMy1U5ik7c",
      shortAddress: "92sEVe",
      percentage: "2.22%"
    },
    {
      address: "4Kvc5vJCtqeGKEupPckUExP8eXTH2nRkUPMxtHZG8uYo",
      shortAddress: "4Kvc5v",
      percentage: "2.15%"
    },
    {
      address: "4SgbyGaZ2AN6sJYfZxUmXff2PCUVUUSz42UMmA5TSihr",
      shortAddress: "4SgbyG",
      percentage: "1.94%"
    },
    {
      address: "DZ25CGUVczLKz8mCDoNZV4JcCaH2SAGzsJ83EGtSLbRy",
      shortAddress: "DZ25CG",
      percentage: "1.74%"
    },
    {
      address: "A6r2iwRotXSxqtMuabXz57LAaZCaEG2iJ8XGn1Sjunnq",
      shortAddress: "A6r2iw",
      percentage: "1.60%"
    },
    {
      address: "EpyHqw9ZVHDTdrwWk58QLVSi5PVcixJo25Y3CPegXoDP",
      shortAddress: "EpyHqw",
      percentage: "1.44%"
    },
    {
      address: "9LHBhFCugDv7Qre1uDWJJQwC7VQhbEcxNWcPEjSvXMey",
      shortAddress: "9LHBhF",
      percentage: "1.42%"
    },
    {
      address: "5iiwX9L57a43yb3M1sJzWiPWRazfutsDZsZ6tDGSgm2V",
      shortAddress: "5iiwX9",
      percentage: "1.33%"
    },
    {
      address: "E3dh8mdoixgUWm6MfEyJJLqWAfiQUsipm8KwQvchP8CS",
      shortAddress: "E3dh8m",
      percentage: "1.30%"
    },
    {
      address: "Fq9mHTYNoNwsHJqnDiXWkJw4diY8LrG8SGM2X1AcPm7A",
      shortAddress: "Fq9mHT",
      percentage: "1.13%"
    },
    {
      address: "8rRM8UdQUVooG43GiRoxDWkWq13C2q1FwjAVdsY5PJq8",
      shortAddress: "8rRM8U",
      percentage: "1.08%"
    },
    {
      address: "4KLgSj38moiSPQMCRQYPr1935AFrcZumUDkJVDLUuvN9",
      shortAddress: "4KLgSj",
      percentage: "1.03%"
    },
    {
      address: "9pkpUceHJbvzYiMPp48hT1v3Ypqf5THXLYVjxisJfsrR",
      shortAddress: "9pkpUc",
      percentage: "0.96%"
    },
    {
      address: "Cqqp1z9NwJLME5jLtV74xtfeWBqmAoGstR8ntDSVqXBH",
      shortAddress: "Cqqp1z",
      percentage: "0.92%"
    },
    {
      address: "CXmEK3JmKqDrPET9DMdbxTQ73h7RCo58oxKLdLp6WDS1",
      shortAddress: "CXmEK3",
      percentage: "0.87%"
    }
  ];

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
                  title="dexscreener"
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
        <!-- SECTION START: TRADE ENTRIES  -->
        {#each trades as trade (trade.transactionId)}
          {@html TradeEntry(trade)}
        {/each}
        <!-- SECTION END: TRADE ENTRIES  -->
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
              alt="poseidon"
            />
            <div class="grid">
              <div class="text-sm font-bold">Poseidon (ticker: POSEIDON)</div>
              <div>Binance Cat</div>
            </div>
          </div>
        </div>
        <!-- SECTION START: COMMENTS -->
        {#each comments as comment (comment.id)}
          {@html Comment(comment)}
        {/each}
        <!-- SECTION END: COMMENTS -->
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
            alt="poseidon"
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
          <!-- SECTION START: Holder distribution -->
          <div class="text-sm">
            <div class="grid gap-1">
            {#each holders as holder, index (holder.address)}
              {@html HolderEntry({rank: index + 1, ...holder})}
            {/each}
            </div>
          </div>
          <!-- SECTION END: Holder distribution -->
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
