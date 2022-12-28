export const decimalNFT = 16;
export const decimalBNB = 18;

let color,
  letters = "0123456789ABCDEF".split("");
export const AddDigitToColor = (limit) => {
  color += letters[Math.round(Math.random() * limit)];
};

export const makeRandomColor = () => {
  color = "#";
  AddDigitToColor(5);
  for (let i = 0; i < 5; i++) {
    AddDigitToColor(15);
  }
  return color;
};

export const makeRandomDeg = () => {
  return Math.random() * 10;
};

export const toSmallUnit = (price, decimal) => {
  return price / Math.pow(10, decimal);
};

export const hideBalance = (price, dcm) => {
  return toSmallUnit(price, dcm).toString().replace(/[0-9]/g, "*");
};

export const truncate = (str, n, useWordBoundary) => {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
  return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(" ")) : subString) + "...";
};

export const truncateWalletAddress = (input = "", n = 10) => {
  if (input.length > n) {
    let sbstr = input.substring(0, n - 1);
    let revSbstr = input
      .split("")
      .reverse()
      .join("")
      .substring(0, n - 2);
    const finalString = `${sbstr} ... ${revSbstr}`;
    return finalString;
  } else {
    return input;
  }
};

export const toNormalUnit = (price, decimal) => {
  let unit;
  if (typeof price === "string") {
    parseInt(price);
  }
  unit = BigInt(price * Math.pow(10, decimal));

  return unit;
};

export const generateRandomString = (length) => {
  let result = "";
  let characters = "1234567890";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generatePurchase = () => BigInt(Math.random() * 61 + Date.now());
export const generateId = (n) => {
  var add = 1,
    max = 12 - add;
  // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
  if (n > max) {
    return generateId(max) + generateId(n - max);
  }

  max = Math.pow(10, n + add);
  var min = max / 10; // Math.pow(10, n) basically
  var number = Math.floor(Math.random() * (max - min + 1)) + min;

  return ("" + number).substring(add);
};

export const randomString = (length) => {
  let result = "";
  let characters = "abcdef1234567890";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const toCodeUnit = (str) => {
  const arr = [];
  const buf = new Buffer(str, "utf16le");
  for (let i = 0; i < buf.length; i++) {
    arr.push(buf[i]);
  }
  return arr;
};

export const fancyTimeFormat = (duration) => {
  // Hours, minutes and seconds
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
};

export const shouldTruncateName = (name = "") => (name.includes("0x") ? truncateWalletAddress(name.replace("@nefti.id", ""), 6) : name);

export const toFormattedBalance = (str) => (str.length > 4 ? `${str[0]}${str[1]}${str[2]}${str[3]}${str[4]}` : str);

export const toTimeFormat = (seconds) => {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));

  const dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : "";
  return dDisplay;
};
