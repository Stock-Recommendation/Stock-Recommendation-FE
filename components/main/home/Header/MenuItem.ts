export interface SubMenu {
  name: string;
  url: string;
  isNewTab: boolean;
}
export interface MainMenu {
  title: string;
  link?: string;
  sub?: SubMenu[];
  isNewTab?: boolean;
}
export const MainMenu: MainMenu[] = [
  {
    title: "Dapp",
    sub: [
      {
        name: "NFT Marketplace",
        url: "https://nft.heroarena.app/",
        isNewTab: true,
      },
      {
        name: "NFT Staking",
        url: "https://defi.heroarena.app/",
        isNewTab: true,
      },
      {
        name: "NFT Fusion",
        url: "https://nft.heroarena.app/fusion",
        isNewTab: true,
      },
      {
        name: "Lottery",
        url: "https://lottery.heroarena.app/",
        isNewTab: true,
      },
      {
        name: "Payment Gateway",
        url: "#",
        isNewTab: false,
      },
    ],
  },
  {
    title: "Farming",
    sub: [
      {
        name: "Bunicorn",
        url: "https://bunicorn.exchange/#/hero-arena-farms",
        isNewTab: true,
      },
      {
        name: "Tokenplay Defi",
        url: "#",
        isNewTab: false,
      },
    ],
  },
  {
    title: "Trade",
    sub: [
      {
        name: "PancakeSwap",
        url: "https://pancakeswap.finance/swap?outputCurrency=0x49c7295ff86eabf5bf58c6ebc858db4805738c01",
        isNewTab: true,
      },
      {
        name: "GATE.IO",
        url: "https://www.gate.io/trade/HERA_USDT",
        isNewTab: true,
      },
      {
        name: "MEXC Global",
        url: "https://www.mexc.com/vi-VN/exchange/HERA_USDT",
        isNewTab: true,
      },
      {
        name: "ZT Global",
        url: "https://www.ztb.im/exchange?coin=HERA_USDT",
        isNewTab: true,
      },
    ],
  },
  {
    title: "Blog",
    link: "https://blog.heroarena.app/",
    isNewTab: true,
  },
  {
    title: "Scholarship",
    link: "https://scholarship.heroarena.app/",
    isNewTab: true,
  },
];
