<script>
  export let data;
  import kingImage from '$lib/assets/king.webp';

  let { coins } = data;
</script>

<div class="container">
  <a href="/makecoin" class="makecoin-button">make a coin</a>
</div>

<div class="grid h-fit gap-4 md:gap-12">
  <div class="mt-4 flex w-full flex-col items-center">
    <a
      class="mb-4 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-2xl font-medium text-slate-50 ring-offset-white transition-colors hover:bg-transparent hover:font-bold hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-300"
      href="/create">[start a new coin]</a
    >
    <div class="grid max-w-[800px] gap-2 text-white">
      <img
        alt="king of the hill"
        loading="lazy"
        width="166"
        height="32"
        decoding="async"
        data-nimg="1"
        class="h-8 justify-self-center"
        srcset="{kingImage} 1x, {kingImage} 2x"
        src="{kingImage}"
        style="color: transparent;"
      /><a href="/2MBgUUj1uWB2csSSde3wR95XsBSWFWjppTzjhViypump"
        ><div
          class="flex max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-20">
            <img
              alt="Boggy Coin"
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-20"
              src="https://pump.mypinata.cloud/ipfs/QmPiX2GZg72UVxvow9duLxbb6Q2UEkQBEue6QkJnau5dyD?img-width=200&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
                ><span class="flex items-center gap-1"
                  ><img
                    alt=""
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    class="h-4 w-4 rounded"
                    src="https://pump.mypinata.cloud/ipfs/QmPiX2GZg72UVxvow9duLxbb6Q2UEkQBEue6QkJnau5dyD?img-width=16&amp;img-dpr=2&amp;img-onerror=redirect"
                    style="color: transparent;"
                  /><span
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >BOGGYDev
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 30.00K
              <div class="flex text-green-500">
                [badge: <div>
                  <div>
                    <div
                      class="hover:opacity-7 cursor-pointer"
                      role="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2n:"
                      data-state="closed"
                    >
                      <img
                        alt="king of the hill badge"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        class="h-4"
                        srcset="{kingImage} 1x, {kingImage} 2x"
                        src={kingImage}
                        style="color: transparent;"
                      />
                    </div>
                  </div>
                </div>
                ]
              </div>
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 10</p>
            <p class="w-full text-sm font-bold">Boggy Coin [ticker: BOGGY]</p>
          </div>
        </div></a
      >
    </div>
  </div>
  <div class="grid w-[95vw] justify-center px-2 sm:p-0">
    <div
      class="grid w-[90vw] max-w-[450px] gap-2"
      style="grid-template-columns: 1fr auto;"
      data-dashlane-rid="1e37595ec33f29fc"
      data-form-type=""
    >
      <input
        class="flex h-10 w-full rounded-md border border-none border-gray-300 bg-green-300 p-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 active:border-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        placeholder="search for token"
        type="search"
        value=""
        data-dashlane-rid="a05adadbaa8ace97"
        data-form-type=""
      /><button
        class="rounded bg-green-300 p-2 text-black hover:bg-green-500"
        data-dashlane-rid="8385bd6654f69c01"
        data-form-type=""
        data-dashlane-label="true">search</button
      >
    </div>
  </div>
  <div class="grid gap-6 px-2 md:gap-4 md:px-12">
    <div class="grid gap-2 px-2">
      <div class="flex gap-4">
        <button class="grid cursor-pointer gap-1 text-gray-500"
          >Following</button
        ><button class="grid cursor-pointer gap-1 text-green-300"
          >Terminal<span class="h-1 w-full rounded bg-green-300"></span></button
        >
      </div>
      <div class="grid w-full items-center gap-4 sm:flex">
        <div class="flex gap-4">
          <button
            type="button"
            role="combobox"
            aria-controls="radix-:r2e:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            class="[&amp;>span]:line-clamp-1 flex h-10 w-full items-center justify-between rounded-md border border-none border-slate-200 bg-green-300 px-3 py-2 text-sm text-black ring-offset-white placeholder:text-slate-500 focus:border-none focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 active:border-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 sm:w-fit"
            aria-label="Sort"
            ><span style="pointer-events: none;">sort: bump order</span><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down h-4 w-4 opacity-50"
              aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg
            ></button
          ><button
            type="button"
            role="combobox"
            aria-controls="radix-:r2f:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            class="[&amp;>span]:line-clamp-1 flex h-10 w-full items-center justify-between rounded-md border border-none border-slate-200 bg-green-300 px-3 py-2 text-sm text-black ring-offset-white placeholder:text-slate-500 focus:border-none focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 active:border-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 sm:w-fit"
            aria-label="Order"
            ><span style="pointer-events: none;">order: desc</span><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down h-4 w-4 opacity-50"
              aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg
            ></button
          >
        </div>
        <div class="flex flex-wrap gap-4 text-sm md:grid md:gap-1">
          <div class="flex h-fit items-center gap-1 text-white">
            <div>Show animations:</div>
            <div
              class="cursor-pointer rounded px-1 text-gray-500 hover:bg-gray-800"
            >
              On
            </div>
            <div class="cursor-pointer rounded bg-green-300 px-1 text-black">
              Off
            </div>
          </div>
          <div class="flex h-fit items-center gap-1 text-white">
            <div>Include nsfw:</div>
            <div class="cursor-pointer rounded bg-green-300 px-1 text-black">
              On
            </div>
            <div
              class="cursor-pointer rounded px-1 text-gray-500 hover:bg-gray-800"
            >
              Off
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid-col-1 grid gap-4 text-gray-400 md:grid-cols-2 lg:grid-cols-3"
    >
      <a href="/FCqniymT7DfdJXnj3JHbvbMA2nHwbJAHrArRSS5ypump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="PEPEBLESS"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmUHV3r2jtKYMtw1ky79PyJ6QJqPKcQ4moutqAunKF5ooC?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >A6E52Q
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 3.71K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >PEPEBLESS (ticker: PEPEBLESS):
              </span>PEPEBLESS
            </p>
          </div>
        </div></a
      ><a href="/BEbtyGLaveAqVJMR5Mk2RAN5UntkKQ5SwC4JwYcpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Purry by Matt Furie"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmbeVwEoRjnvsJPwKDohp8XMwtk73V6QA6Sdf9ahevWLmi?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >EgeFdn
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 5.94K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >Purry by Matt Furie (ticker: PURRY):
              </span>PURRY – inspired by a based Matt Furie character, here to
              take over the Cat Meta on Solana. The ultimate feline degen in the
              crypto jungle. Welcome to the ‘Cats Club’.
            </p>
          </div>
        </div></a
      ><a href="/BAEBTz4d7RgWY1jXKmLWGupy3tXdyJH95mqasXWupump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="dqwoin"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmeBXqjHzrXLypajhB3NLpMmcf5i5PADdMZzhcdcs9hwec?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >4y3UVe
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 3.69K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">dqwoin (ticker: dqwoin): </span>asdqwdwq
            </p>
          </div>
        </div></a
      ><a href="/3ZZE6ikYWQhJKAVaXqvhNxVAcxcUmM33oqBCNaLvpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Monster Brains"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmYkzzRsyhrYfqys5ZkGXU291BeQoDNaX7M3RSaXwRBEUi?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >2BY2Ns
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 9.98K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 74</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Monster Brains (ticker: Brains): </span>A
              nod to Matt Furie - Monster Brains
            </p>
          </div>
        </div></a
      ><a href="/5e7nhBSgAH2sSMznQd44r7FDcYTtH8vPT7kmvhTpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Reflect Cat"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://bafybeie7ezmzr2vq7tpqwlnp7zmmbnzigcywx6wciayo3afmqtevm2lsby.ipfs.nftstorage.link/?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >Aft1wo
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 10.28K
              <div class="flex text-green-500">
                [badge: <div>
                  <div>
                    <div
                      class="hover:opacity-7 cursor-pointer"
                      role="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2o:"
                      data-state="closed"
                    >
                      <img
                        alt="king of the hill badge"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        class="h-4"
                        srcset="{kingImage} 1x, {kingImage} 2x"
                        src={kingImage}
                        style="color: transparent;"
                      />
                    </div>
                  </div>
                </div>
                ]
              </div>
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 85</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Reflect Cat (ticker: REFLECT): </span>It's
              Time To $Reflect....
            </p>
          </div>
        </div></a
      ><a href="/Ha5iuLDVDByoEGGwghWSz5T3ou42EKNFKZngavvgpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="McDonald’s Hamster"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmRnBsNAHR1uzmUFKQ3tNPwE9jA7U1QDsTRrYUvq8dUdZU?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >HXaMtN
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 12.28K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 5</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >McDonald’s Hamster (ticker: MCHAM):
              </span>McDonald’s Hamster is here to eat the whole menu. Let’s
              feed this hamster 🐹
            </p>
          </div>
        </div></a
      ><a href="/FamzVWtZgpS1WPkpGNBgfrqVCNk8VKugDHT24jWRpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Wojak Fried"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmYfAvhkcfUpgP1K16WJdVXfdFKt7gKuz9SgnGUyKLEsMR?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >8nQycP
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 5.53K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >Wojak Fried (ticker: WojakFried):
              </span>Welcome to WFC we are here to serve your bags !
            </p>
          </div>
        </div></a
      ><a href="/5nj4ut2KvBDMk8rASELc5khc3uq8oHozLpV5dLSDCPa4"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Sadi"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmeaQfnX3UNsEHJnBKBtXAUj5uYVNngE6pdCx4x9NgHgXT?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >5tp8dx
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 9.42K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 1</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Sadi (ticker: $Sadi): </span>The Sadi Cat
              ($SADI) – the cutest and coolest meme on solana!
            </p>
          </div>
        </div></a
      ><a href="/2dxbdcxkvdsCnqpQcLKNKgbrYbch2t3VYSkM3cMEW9b8"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Base Brettness"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmQB9NsnTw9topGVwK1UY19n3gz9uKhU8o5fe6e9kwjAQX?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >kPZQTV
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 3.72K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 1</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >Base Brettness (ticker: BRETTNESS):
              </span>Brettness, with his shades gleaming under the neon lights,
              unleashed a flurry of punches, his movements as precise and
              powerful as Mike Tyson's. Each strike against the jeets was a
              testament to his relentless determination and unparalleled
              strength.
            </p>
          </div>
        </div></a
      ><a href="/6xL662QnXfyXHkoHBWr8HPUTrRVUhUYwCYAP2zTypump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="KFCDOG"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmdAvE4SjbeHJtF1KhQdU55jHhayoy1pxC8y5L5JkU5QSz?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >H1y9d8
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 28.14K
              <div class="flex text-green-500">
                [badge: <div>
                  <div>
                    <div
                      class="hover:opacity-7 cursor-pointer"
                      role="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2p:"
                      data-state="closed"
                    >
                      <img
                        alt="king of the hill badge"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        class="h-4"
                        srcset="{kingImage} 1x, {kingImage} 2x"
                        src={kingImage}
                        style="color: transparent;"
                      />
                    </div>
                  </div>
                </div>
                ]
              </div>
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 56</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">KFCDOG (ticker: KFCDOG): </span>KFCDOG ON
              SOLANA
            </p>
          </div>
        </div></a
      ><a href="/8XTkNNN8QZGeSrTCUYP7ehaEKdHZGwMYmsocBWX3pump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Sup Cat"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmSxpjiNcqx7jHXojqLJFizvdRshcieE8VGsNgFUkcrQwR?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >HoP25G
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 14.19K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 60</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Sup Cat (ticker: SUP): </span>Sup dog? Nah
              sup cat? How you doin
            </p>
          </div>
        </div></a
      ><a href="/2ZMacDWHKmWHGJzFxgz3t4buTzNsZWEJHuWwjHyGpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="UberCat"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmYttgd13q2yMLiXJQ3B4rQdHTPwaqQtXqHENhVGZYtzGe?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >CtKZAy
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 5.52K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 1</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">UberCat (ticker: UberCat): </span>Gonna
              deliver your food! $UberCat
            </p>
          </div>
        </div></a
      ><a href="/5ofG3DEwyBDzMCkPn95XCoxZyE5kg25vvbhSuf61pump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Figen.eth"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmRtomKR3WLt8xzck1dru8EdVUhVsst3yNKY56jquyS87L?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >2VUEV7
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 5.82K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 1</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Figen.eth (ticker: Figen): </span>Deli
              kız🌹💃🏻🎈
            </p>
          </div>
        </div></a
      ><a href="/4g1j5CdNHyHixQwTnnbcSv4zAGg7KGBhaN4GPMfApump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Therapy Dog"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmWVc1GW55RZR8WDNTG3YH2TUatfxSQmnDYL72HyhS81N3?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >GSdJ1k
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 5.80K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 9</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Therapy Dog (ticker: TDOG): </span>Therapy
              Dog - a service dog like no other
            </p>
          </div>
        </div></a
      ><a href="/Hg27oJSm3y63AZ26CbZyCauqRcKWmQNCtkHD7yPpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="VITOCAT"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmX4ySYXSE3FbcUJpysiaidBGwMYttxEJocgQnd7MkQREo?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >7gA5ig
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 6.35K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 29</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">VITOCAT (ticker: VITO): </span>Those eyes
              Vito, they see through my sol..
            </p>
          </div>
        </div></a
      ><a href="/DqSE9dD7bXahApiVFcjZEWE9cDaj8HxEHDrZTLWQpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="MediCat"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmcJ1xb33xeYUTuJTPPHG9oo52LEHDCHq3rqkXpV2Xs8fv?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >Atmccf
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 11.93K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 3</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">MediCat (ticker: Medic): </span>the cutest
              medic on sol.
            </p>
          </div>
        </div></a
      ><a href="/5kwqBu2aQhvhMhGFwPhdJcR71Pr5umvuzwauKE8Spump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Trumps Army"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmQ6xNDY1LMUgbREAFntHRSdi3JSqrTbn1t6yQea9G41mV?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >3j3LP8
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 4.68K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 2</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Trumps Army (ticker: TRUMPA): </span>Make
              Crypto Great Again! We are building our green wall and it’s going
              to be YUUUUGE!
            </p>
          </div>
        </div></a
      ><a href="/CFFeoNDqx9jy7rjMfmZfJvQVuguHKsGVQ4WqEe4kpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Harry The Hedgehog"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmaRuLgZwUiohAcuC4rPvETdLp6gzTVC7R11BzV4dhDiC5?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >EZNju2
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 5.19K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >Harry The Hedgehog (ticker: HARRY):
              </span>
            </p>
          </div>
        </div></a
      ><a href="/8bZveQKGDXtwRnJNEAzy8Xg6PHG9AYoJmXXvgbLppump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="dogs wif hats"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmcnAhTBDF1cWDyKq2rJ2vjkbubCnUYK9wfL62WDpJVuUY?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >AsBKNa
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 5.77K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 147</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">dogs wif hats (ticker: hats): </span>just
              two dogs wif hats
            </p>
          </div>
        </div></a
      ><a href="/5HqwMnPSxLvBdhxwTW39gGncfdyBXS4prE3U8MsZpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="BurgaCat"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmYubN9gHZSPViVKAKTAz4pUiTpYTwyJNPv8KNvdjUpCVt?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >4Vi5bu
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 4.28K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 1</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">BurgaCat (ticker: BURGI): </span>HOW DID I
              END UP IN A BURGAAAAAAAA
            </p>
          </div>
        </div></a
      ><a href="/2MBgUUj1uWB2csSSde3wR95XsBSWFWjppTzjhViypump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Boggy Coin"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmPiX2GZg72UVxvow9duLxbb6Q2UEkQBEue6QkJnau5dyD?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >Erajg1
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 30.19K
              <div class="flex text-green-500">
                [badge: <div>
                  <div>
                    <div
                      class="hover:opacity-7 cursor-pointer"
                      role="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2q:"
                      data-state="closed"
                    >
                      <img
                        alt="king of the hill badge"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        class="h-4"
                        srcset="{kingImage} 1x, {kingImage} 2x"
                        src={kingImage}
                        style="color: transparent;"
                      />
                    </div>
                  </div>
                </div>
                ]
              </div>
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 10</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Boggy Coin (ticker: BOGGY): </span>Boggy
              was once a degen memecoin gambler, just like you. After being
              rug-pulled one too many times he decided to take control and
              create his own unique token. Boggy has a unique idea of combining
              MemeFi with Philanthropy and creating a consistent,
              self-sustaining ecosystem through revenue generated from Youtube,
              Merchandise, Partnerships etc. Join the 1st Philanthropic Meme on
              Solana, $BOGGY.
            </p>
          </div>
        </div></a
      ><a href="/4vHfvZvXhD4TWSgGHeTEZMd1aJKAkFFuXdRexyCnpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="The fashionable cat"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmetRtNWtjVzvJTE5rRX42FbUGo8n7xN3JVdgNzBJtVhZ8?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >5vkfv6
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 3.73K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >The fashionable cat (ticker: TFCAT):
              </span>The trendiest cat on the internet.
            </p>
          </div>
        </div></a
      ><a href="/HpA4BtT2j78xXEdAFPPYmHnDwTq9SqfpU9vSE5uipump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Tuffy"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmbFVwmepgfcenthqMptTq6kFpxF19v2v54tqnzxznQ3UN?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >GpuPxx
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 6.73K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 6</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Tuffy (ticker: Tuffy): </span>$Tuffy is a
              fluffy, cream-colored pup with sparkling brown eyes and a playful
              button nose. His perky ears and wagging plumy tail add to his
              adorable charm, making him irresistibly cute and full of joy. He
              is OG meme coin with mission to reach 1 BILLION Mc
            </p>
          </div>
        </div></a
      ><a href="/7m7E8U7oM4rwdhQ1axmd9xqXaEvvLBP6tk2UogNJpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="motherfucker"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmRRL1Wqrqz7njqqzrrPKgM8dRkeCyuB5wnnABzqbjrEup?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >C82Swz
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 4.04K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >motherfucker (ticker: fuck):
              </span>nothing but a meme coin to release your feelings
            </p>
          </div>
        </div></a
      ><a href="/EXzaUjGvvQtkpnQYFXBBhprLCM59DMaQb2YF4M3upump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="UberCat"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmYttgd13q2yMLiXJQ3B4rQdHTPwaqQtXqHENhVGZYtzGe?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >HRGqdp
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 35.89K
              <div class="flex text-green-500">
                [badge: <div>
                  <div>
                    <div
                      class="hover:opacity-7 cursor-pointer"
                      role="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2r:"
                      data-state="closed"
                    >
                      <img
                        alt="king of the hill badge"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        class="h-4"
                        srcset="{kingImage} 1x, {kingImage} 2x"
                        src={kingImage}
                        style="color: transparent;"
                      />
                    </div>
                  </div>
                </div>
                ]
              </div>
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 78</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">UberCat (ticker: UberCat): </span>Gonna
              deliver your food! $UberCat
            </p>
          </div>
        </div></a
      ><a href="/AYWGxw1qh18cRWDvqbwc9TGpMzmMf95MG21TUfiHpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="KFC NIGGA "
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/Qmc62Zgqx3bwz3WsMfqaDzvK5ZYFJAfDyK46u2DPsAzwBs?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >E8na3j
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 3.91K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">KFC NIGGA (ticker: NIGGA): </span>Nigga
              loves chicken and KFC
            </p>
          </div>
        </div></a
      ><a href="/h7jXa2DkazNitpJp3mwqCwx6jsXKzgoWDb9Q4ampump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Dog WIF Burger KING"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmeKFktJYvEzpbSzPhdZGuGctGhFcuu2z41VHwadC1t9uq?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >EVdsZt
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 3.87K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 1</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >Dog WIF Burger KING (ticker: KING):
              </span>Dog WIF burger king has arrived on SOLANA and he is here to
              stay. First taking over SOLANA as the main fast food restaurant
              and then the whole crypto space
            </p>
          </div>
        </div></a
      ><a href="/44sUX4515w5pxtXPL7JoAxXMx3rmUtHcP57UPBpBpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="GERRY TO THE MOON"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmSQw5Vb6JVH5H38FvDRq739VqfMNzhj71F7VRkhVEgBQE?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >8KqgWS
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 4.58K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >GERRY TO THE MOON (ticker: GERRY):
              </span>$Gerry, the adventurous dog, eagerly attempts to fly by
              holding onto a bunch of colorful balloons, his paws outstretched
              and eyes wide with excitement.
            </p>
          </div>
        </div></a
      ><a href="/47FhdJdDFURknGufyBGMQv2TbZWimJkzfZjwaAcmpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Wojak Fried Chicken "
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmZ3aCDhh44y48gi9pnQty6t7aw2XTsi3QbkAZwvyhEC8Q?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >CL3fmd
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 18.75K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 10</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >Wojak Fried Chicken (ticker: WFC):
              </span>Welcome to WFC we are here to serve your bags !
            </p>
          </div>
        </div></a
      ><a href="/5ZBZNtZxhp7PHkRHxTTnPa6WdJg3nqHzgBPph2B9pump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="KEMI"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmeuQpvMYrUSbUG316VAj7HsaRBVNwgF6gbWNopWSK9B2a?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >APtWrE
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 5.30K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 37</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">KEMI (ticker: KEMI): </span>Erm! According
              to my calculations we're mooning! https://nerdcatsolana.com/
              https://t.me/nerdcatportals https://x.com/nerdcatonsol
            </p>
          </div>
        </div></a
      ><a href="/4MeDmMUGABBYCpT5VZ52d27UjWh78tGsNcAk94Erpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="NeuraBobo"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmQRtveJBihoefs6iGSgBnjQhWvMyKbbMknuK2ipDfSLwX?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >9AGTbz
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 6.90K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 31</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >NeuraBobo (ticker: NEBOBO):
              </span>neurabobo is the first ever meme star with a neuralink
            </p>
          </div>
        </div></a
      ><a href="/ALiLg8LPoqastMh3GDpNvVxvkcRU2CRKxKTQWQS7pump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Dog'in"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/Qma6WyWBqrC5r9CcXcK4yxduyVeLPoKYeYkX1PErv3QNUK?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >BbjYJb
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 10.49K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 83</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Dog'in (ticker: dogin): </span>hide yo
              bitch, cause i'll be dog'in-n'out
            </p>
          </div>
        </div></a
      ><a href="/7Wcny1SLJmWFWfurgtRpgN84NP1Rupuov88xeR3LamAi"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="badass cat"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmfTaWH5m3e6UTHgWvHDz9wKYZGA2PCmf2awEcZyJuDWb7?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >EjRLo7
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 33.86K
              <div class="flex text-green-500">
                [badge: <div>
                  <div>
                    <div
                      class="hover:opacity-7 cursor-pointer"
                      role="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2s:"
                      data-state="closed"
                    >
                      <img
                        alt="king of the hill badge"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        class="h-4"
                        srcset="{kingImage} 1x, {kingImage} 2x"
                        src={kingImage}
                        style="color: transparent;"
                      />
                    </div>
                  </div>
                </div>
                ]
              </div>
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 308</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">badass cat (ticker: bcat): </span>you
              would definitely not want to do business with him
            </p>
          </div>
        </div></a
      ><a href="/AqbWppWbz52QZhGxobGmWZqTeV5YrpqDxtcM9Fudpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="This is Fine"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmNcrHEYWj6m9ypgsLKN5SHczbbUe1oLadLKCAJW6YP4ta?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >DaQQqs
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 7.08K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 108</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >This is Fine (ticker: FINE):
              </span>EVERYTHING IS RED, but we are FINE, engaging is risky and
              dangerous but with the right team, perseverance and a little luck,
              $FINE will be very lucrative !
            </p>
          </div>
        </div></a
      ><a href="/AZGDCnDeET11zDSsgTomQPMbw6yTe7eCHym5PC55pump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="PeaCup2024"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmbfDCaSChbi9AbmsZi9BXKpiuSVFoN2suaTi7bvAW6KYN?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >Cf7Wjg
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 21.80K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 149</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >PeaCup2024 (ticker: PeaCup):
              </span>🟧🟧🟩🟩🟪🟪🟦🟦🟥🟥🟨🟨🟫🟫🟩🟩🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚$Peacup2024:
              The Token of Champions! 🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆
              $PeaCup2024 is the ultimate meme token that brings together the
              majestic flair of the peacock and the thrilling excitement of the
              Euro Cup 2024. Whether you're a crypto enthusiast, a football fan,
              or just love a good laugh, $PeaCup2024 is here to make your
              portfolio as colorful and victorious as a peacock at the Euro Cup!
              Join the flock and score big with $PeaCup2024 – where every token
              is a goal! "Peacup2024: Strut Your Stuff, Score Big!"
              🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🦚🟥🟥🟥🟪🟪🟩🟩🟧🟧🟦🟦🟨🟨🟪🟪🟦
            </p>
          </div>
        </div></a
      ><a href="/3A36ahgRpmBoTBZfs7LRv37iZbzLa6UfF8C3oazHpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="HawkTuah"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmYdsQvt7t5NVonRLt8YwSj28d1oYgfAjsgM1WmhGe9vA3?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >2y3Bnj
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 20.19K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 19</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">HawkTuah (ticker: HawkTuah): </span>hawk
              tuah and spit on that thang
            </p>
          </div>
        </div></a
      ><a href="/29BpkZxCPsnvW556Nw34hHzbAfLCptkoma736ma6pump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Gary Dog"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmXRfpSL93gCimUpa8yQBX8ZvdmayCjruWLLJF8UhnvUTG?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >FgBuQa
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 4.22K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 19</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Gary Dog (ticker: GARY): </span>$GARY is a
              community made and owned Crypto currency ​project. We are aspiring
              to become the new high quality ​standard within the Crypto Space.
              A group of like minded ​individuals have come together to create
              the new golden ​standard of what a community should have to offer.
              We have ​a 0% tax on both buy and sell orders! Gary will be a safe
              and perfect destination for you while the market is truly
              volatile! https://garysol.pro/ https://x.com/GaryDog_Sol
              https://t.me/GARY_PORTAL
            </p>
          </div>
        </div></a
      ><a href="/F2oQQxRpvFVcxzPPWci5qNfyJNtNVqrHU8zvVMPYpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="CAT WILLIAM$ "
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmaokLk9K5UNdau8UW6WKsNDSxCHMLTdtG6YyQLDfohLDd?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >GoVQ9z
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 8.43K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 309</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >CAT WILLIAM$ (ticker: $CWILL):
              </span>Welcome to the Biggest Cat in Showbiz as he journeys his
              way through the crypto space to entertain all. 😂🎤🐈🎫 Get your
              ticket today!!!
            </p>
          </div>
        </div></a
      ><a href="/8UgtcGPmcMzFbpL1ngSEtBs2WwBRcTp2AXmVLj3Tpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="WGAHW"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmdV5fdrMkaRtwUYZe7YGhFej4GpccRW4sEQ2jGSs8aXkV?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >HLHaZh
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 3.75K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 37</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">WGAHW (ticker: WGAHW): </span>$TUX Magical
              Tux is a cat in a tuxedo Tele: https://t.me/Magical_Tux X:
              https://x.com/Magical_Tux Web:
              https://magicaltux.online/🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕
            </p>
          </div>
        </div></a
      ><a href="/8sU5Y6BRUxzPgoDKKpzqtvdbVzprGYJ14TbBWWs3LsSx"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="MarketCat"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmVXUBEPtwRzxpr4mo7FnnCMdi9PQSEEWFdJjnp9jjLRNy?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >75z3eY
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 4.14K
              <div class="flex text-green-500">
                [badge: <div>
                  <div>
                    <div
                      class="hover:opacity-7 cursor-pointer"
                      role="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2t:"
                      data-state="closed"
                    >
                      <img
                        alt="king of the hill badge"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        class="h-4"
                        srcset="{kingImage} 1x, {kingImage} 2x"
                        src={kingImage}
                        style="color: transparent;"
                      />
                    </div>
                  </div>
                </div>
                ]
              </div>
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 137</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">MarketCat (ticker: MCAT): </span>Relaunch
              as CTO with community made socials. The most famous cat in Vietnam
              is about to be known across all chains. The name is Chó which
              means Dog, and he works at the fish market. The ticker is $MCAT -
              MarketCat
            </p>
          </div>
        </div></a
      ><a href="/79FKVNWZPD3CvRqpBSdiSmUcJq42pbBKBMJRfNNmpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="$Snoopz the doggy dog"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmTo2iktvKLXYhbrwLZ2LcDNiWRjTsXs4qUE1wfKkm8aei?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >GCaqTz
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 40.43K
              <div class="flex text-green-500">
                [badge: <div>
                  <div>
                    <div
                      class="hover:opacity-7 cursor-pointer"
                      role="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2u:"
                      data-state="closed"
                    >
                      <img
                        alt="king of the hill badge"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        class="h-4"
                        srcset="{kingImage} 1x, {kingImage} 2x"
                        src={kingImage}
                        style="color: transparent;"
                      />
                    </div>
                  </div>
                </div>
                ]
              </div>
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 23</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >$Snoopz the doggy dog (ticker: $Snoopz):
              </span>Combination of the best rapper and a world class dog :
              $Snoopz ! Experience team of 3 did several multi M cap.
            </p>
          </div>
        </div></a
      ><a href="/DAauPixjWZr6C21yrVYnX2YjunZd7cvQBHiYwdh2pump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="STEVE"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmdL16HaPU2D4opkwZYpKLh48nFekzhhizfoCZamtr16MQ?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >6Vqcjz
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 4.30K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 13</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">STEVE (ticker: STEVE): </span>Smoke weed,
              drop acid, and vibe with other members of the $STEVE community.
              Watch Steve fuck around and find out in Matt Furie's Boy's Club
              Universe live on X and buy weed off our site! Adding utility
              innovation to shitcoins is what $STEVE’s all about.
            </p>
          </div>
        </div></a
      ><a href="/4J7HnyxHfg3NShWGELdVPg4ea8DqiPL8K34Y7AGzpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="TOTO"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/Qme64dHuS6USDeu4QPQ5SGbfUBit9p7q8RbcnQXNRXdvQ6?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >2SjqXB
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 6.45K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 5</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">TOTO (ticker: TOTO): </span>$TOTO, the
              most famous dog on Solana
            </p>
          </div>
        </div></a
      ><a href="/CefcyyyjhobifydPSuP4vk17Yh8tYu3hqj1VdE68pump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="CHINESE EATING RICE 🍚"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmaBtKcSyVwqF8qmmFHXJYZnzAnjUCvySpBwdzdQorguMx?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >5yMrW5
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 16.41K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 156</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >CHINESE EATING RICE 🍚 (ticker: CHICE):
              </span>How can you not love rice? Look at the joy on his face as
              he eats rice. This image, captured by Berthold Laufer between 1901
              and 1904, beautifully depicts a China man savoring his rice.
            </p>
          </div>
        </div></a
      ><a href="/4chMmXn4zGDCxxsr8eozTMMqKHK55v3PbhHPM7sqSwj4"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="MOGA"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/Qme7CHpTHsTGtJP54m6GMVEUpLbqtsCDwT21U895SYuKqj?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >5tp8dx
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 3.74K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 2</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">MOGA (ticker: MOGA): </span>$MOGA is a
              breed of style and PolitiFi. Wear glasses, stay alpha and chill!
              MOG AGAIN Telegram: https://t.me/mogaportalsol Twitter:
              https://x.com/mogaonsolX Website: https://moga.live/
            </p>
          </div>
        </div></a
      ><a href="/HqXo9GvWJZSMec6o7PP5QZcDTmGu7jeWHzABgQVnpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Mcdonalds Bag Wif"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmUNvJDib7HXBn8dr9R1hSpu7ZKAaTd2h3pcqNS7kpuPqe?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >2a9rf5
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 19.64K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 14</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >Mcdonalds Bag Wif (ticker: MCWIF):
              </span>Solana memecoin devs be like: "Lets put a McDonald's bag on
              a dog, create a coin and watch it go to $100M market cap."
            </p>
          </div>
        </div></a
      ><a href="/Dx4qjG1kDG65hBKVP9thiFtUFiZLE9jKkV2VvEb6pump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Munch Saylor"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmVqj4GyMpAeXQdhxSy5GQdFpoZAn38i4wgFnBJPxSqJeC?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >JDdEFe
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 15.07K
              <div class="flex text-green-500">
                [badge: <div>
                  <div>
                    <div
                      class="hover:opacity-7 cursor-pointer"
                      role="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2v:"
                      data-state="closed"
                    >
                      <img
                        alt="king of the hill badge"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        class="h-4"
                        srcset="{kingImage} 1x, {kingImage} 2x"
                        src={kingImage}
                        style="color: transparent;"
                      />
                    </div>
                  </div>
                </div>
                ]
              </div>
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 46</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold"
                >Munch Saylor (ticker: MUNCH):
              </span>Michael Saylor Meme coin Saylor is our DADDY.
              https://x.com/saylor/status/1804135251058278665
            </p>
          </div>
        </div></a
      ><a href="/9WoqRAgoHax1pzUmwsnyE3zhjFj2LyXAS1R6NCeKpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Emojiblocks"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmW1eb4AZgYsR1MdUxSeuQPz9VddUdpzqvHqk76x635a6P?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >4JTRBK
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 5.89K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 27</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Emojiblocks (ticker: EBLOX): </span>No
              hype, just attitude, we rule.
            </p>
          </div>
        </div></a
      ><a href="/Gn9ubRjPdFbg7S5KxNNxrYhcqSZTiooqinrRdSFqpump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="CatBucket"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmRuP9VrGmiNC6WYtUevFfE1TNe3Uisw6LriSbJk7nP6tS?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >6ff1Kx
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 10.65K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 30</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">CatBucket (ticker: CatBucket): </span>KFC
              newly launches products
            </p>
          </div>
        </div></a
      ><a href="/37Zt96W41bVvB1xQQK1reBPwGvPgUXnNiT3Mu3hapump"
        ><div
          class="flex h-fit max-h-[300px] w-full gap-2 overflow-hidden border border-transparent p-2 hover:border-white"
        >
          <div class="min-w-32">
            <img
              alt="Book of Nick"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              class="mr-4 h-auto w-32"
              src="https://pump.mypinata.cloud/ipfs/QmSR8wvPJPoJobs2zuQNsYKigeS1p6Q8mUgWgBstdTLmwJ?img-width=128&amp;img-dpr=2&amp;img-onerror=redirect"
              style="color: transparent;"
            />
          </div>
          <div class="grid h-fit gap-1">
            <div class="flex items-center gap-2 text-xs text-blue-200">
              <div>Created by</div>
              <button type="button"
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
                    class="flex gap-1 rounded px-1 hover:underline"
                    style="background-color: transparent;"
                    >F9g3Ts
                  </span></span
                ></button
              >
            </div>
            <div class="flex gap-1 text-xs text-green-300">
              market cap: 3.68K
            </div>
            <p class="flex items-center gap-2 text-xs">replies: 0</p>
            <p
              class="w-full text-sm"
              style="overflow-wrap: break-word; word-break: break-all;"
            >
              <span class="font-bold">Book of Nick (ticker: NICK): </span>OG
              nick bought BTC at 0.01$
            </p>
          </div>
        </div></a
      >
    </div>
  </div>
  <div class="mt-4 flex w-full justify-center">
    <div class="mb-20 justify-self-end">
      <div class="flex justify-center space-x-2 text-slate-50">
        <button
          disabled={true}
          class="cursor-not-allowed text-sm text-slate-400">[ &lt;&lt; ]</button
        ><span>1</span><button
          class="text-sm text-slate-50 hover:bg-transparent hover:font-bold hover:text-slate-50"
          >[ &gt;&gt; ]</button
        >
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
    </div>
  </div>
</div>
