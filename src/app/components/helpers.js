
// eslint-disable-next-line no-unused-vars

export const tradesSchema = ['key', 'command', 'm_TradePrice', 'TransactionType', 'm_TradeVolume', 'm_LastUpdated']
export const marketTradesSchema = ['key', 'command', 'm_SymbolID', 'm_TradePrice', 'TransactionType', 'm_TradeVolume', 'm_LastUpdated']
export const mboSchema = ['key', 'command', 'OrderNumber', 'OrderPrice', 'VolumeTraded']
export const mbpSchema = ['key', 'command', 'OrderPrice', 'VolumeTraded', 'OrdersCount']
export const marketSummarySchema = [
  'm_adjustedYestClose',
  'm_TradesCount',
  'm_TradedVolume',
  'm_TradedValue',
  'm_IndexValue',
  'm_PrecentChange',
  'm_NetChange',
  'm_MarketStatus']

export const indexSchema = [
  'm_IndexValue',
  'm_NetChange',
  'm_PrecentChange'
]

export const quoteDetailsSchema = [
  'm_OpenPrice',
  'm_PriceChgFromAvg',
  'm_LastTradePrice',
  'm_Change',
  'm_LastTradeVolume',
  'm_PrecentChange',
  'm_DailyLowPrice',
  'm_DailyHighPrice',
  'm_BidPrice',
  'm_AskPrice',
  'm_BidVol',
  'm_AskVol',
  'm_TotalBids',
  'm_TotalAsks',
  'm_TradedValue',
  'm_BidsAsksRatio',
  'm_TradedVolume',
  'm_TradesCount',
  'm_ClosePrice',
  'm_adjustedYestClose',
  'm_MinPrice',
  'm_MaxPrice',
  'm_Wk52HighPrice',
  'm_Wk52LowPrice',
  'm_Reuters',
  'm_ISIN'
]

export const marketDataFields = [
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

export const marketDataContextMenuActions = [
  {
    title: 'Place An Order',
    type: 'order'
  },
  {
    title: 'Quote Details',
    type: 'quote'
  },
  {
    title: 'Market By Price',
    type: 'mbp'
  },
  {
    title: 'Market By Order',
    type: 'mbo'
  },
  {
    title: 'Trades',
    type: 'trades'
  }
]








