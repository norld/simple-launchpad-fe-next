export const truncateAddress = (address: string): string => {
  const addrLength = address.length;

  return `${address.substring(0, 5)}..${address.substring(addrLength - 4, addrLength)}`;
};
