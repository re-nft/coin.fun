<script lang="ts">
  import { page } from '$app/stores';

  $: coinId = $page.params.coinId;
</script>

<h1>Coin Details for {coinId}</h1>
<div>
  <!-- TradingView Widget BEGIN -->
  <div class="tradingview-widget-container w-3/4 h-full">
    <div class="tradingview-widget-container__widget" style="height:calc(100% - 32px); width:100%;"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
      {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }
    </script>
  </div>
  <!-- TradingView Widget END -->
</div>