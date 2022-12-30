export const getChainData = (chainData) => {
  return {
    type: "getChains",
    payload: chainData,
  };
};
