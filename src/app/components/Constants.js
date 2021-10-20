
 export default function Constants () {

  // var protocolToUse = document.location.protocol != "file:" ? document.location.protocol : "http:";

  return {
    ADAPTER: "PROXY_MarketBeat",
    SERVER: "https://iengine.hermesonline.com/",

    ITEMS: ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"],

    FIELD_DEF: [
      {
        field: 'm_OpenPrice',
        title: 'Open Price',
        default: true
      },
      {
        field: 'm_LastTradePrice',
        title: 'Last Trade Price',
        default: true
      },
      {
        field: 'm_LastTradeVolume',
        title: 'Last Volume',
        default: true
      },
      {
        field: 'm_Change',
        title: 'Change',
        default: true
      },
      {
        field: 'm_DailyLowPrice',
        title: 'Low Price',
        default: true
      },
      {
        field: 'm_DailyHighPrice',
        title: 'High Price',
        default: true
      },
      {
        field: 'm_BidVol',
        title: 'Bid Vol',
        default: true
      },
      {
        field: 'm_AskVol',
        title: 'Ask Vol',
        default: true
      },
      {
        field: 'm_TotalBids',
        title: 'Total Bids',
        default: true
      },
      {
        field: 'm_TotalAsks',
        title: 'Total Asks',
        default: true
      },
      {
        field: 'm_TradedValue',
        title: 'Turnover',
        default: true
      },
      {
        field: 'm_TradedVolume',
        title: 'Volume',
        default: true
      },
      {
        field: 'm_ClosePrice',
        title: 'Close Price',
        default: true
      },
      {
        field: 'm_adjustedYestClose',
        title: 'Prev. Close Price',
        default: true
      },
      {
        field: 'm_PrecentChange',
        title: 'Change %'
      },
      {
        field: 'm_BidPrice',
        title: 'High Bid'
      },
      {
        field: 'm_AskPrice',
        title: 'Low Ask'
      },
      {
        field: 'm_TradesCount',
        title: 'Trades'
      },
      {
        field: 'm_MinPrice',
        title: 'Min Price'
      },
      {
        field: 'm_MaxPrice',
        title: 'Max Price'
      },
      {
        field: 'm_Wk52HighPrice',
        title: 'WK52 High Price'
      },
      {
        field: 'm_Wk52LowPrice',
        title: 'WK52 Low Price'
      },
      {
        field: 'm_Reuters',
        title: 'Reuters Code'
      },
      {
        field: 'm_ISIN',
        title: 'ISIN'
      }
    ]
  };

}

