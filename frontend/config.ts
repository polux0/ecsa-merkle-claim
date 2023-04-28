// Types
type IConfig = {
  decimals: number;
  airdrop: Record<string, number>;
};

// Config from generator
const config: IConfig = {
  decimals: 18,
  airdrop: {
    "0xa90C389DA5A251A22bfFf744990e5D52a7FfD6dE": 1,
    "0x9a90Fa92f67a03252111eb0a98a7bDe967783bC5": 2,
    "0x5866F4a3544EbFf6FBDC9fFD76d9b5FFeB215105": 3,
    "0xD57561247d3cFa75aB409eF745079a757879F332": 4,
    "0xd7E0f8E96b87819E47bCD65a1B53D52FE091f8aD": 5
  },
};

// Export config
export default config;