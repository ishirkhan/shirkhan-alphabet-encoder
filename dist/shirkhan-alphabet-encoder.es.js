const EncryptMap = [
  {
    from: "\u0626",
    to: "q"
  },
  {
    from: "\u0627",
    to: "w"
  },
  {
    from: "\u06D5",
    to: "e"
  },
  {
    from: "\u0628",
    to: "r"
  },
  {
    from: "\u067E",
    to: "t"
  },
  {
    from: "\u062A",
    to: "y"
  },
  {
    from: "\u062C",
    to: "u"
  },
  {
    from: "\u0686",
    to: "i"
  },
  {
    from: "\u062E",
    to: "o"
  },
  {
    from: "\u062F",
    to: "p"
  },
  {
    from: "\u0631",
    to: "a"
  },
  {
    from: "\u0632",
    to: "s"
  },
  {
    from: "\u0698",
    to: "d"
  },
  {
    from: "\u0633",
    to: "f"
  },
  {
    from: "\u0634",
    to: "g"
  },
  {
    from: "\u063A",
    to: "h"
  },
  {
    from: "\u0641",
    to: "j"
  },
  {
    from: "\u0642",
    to: "k"
  },
  {
    from: "\u0643",
    to: "l"
  },
  {
    from: "\u06AF",
    to: "z"
  },
  {
    from: "\u0644",
    to: "x"
  },
  {
    from: "\u06AD",
    to: "c"
  },
  {
    from: "\u0645",
    to: "v"
  },
  {
    from: "\u0646",
    to: "b"
  },
  {
    from: "\u06BE",
    to: "n"
  },
  {
    from: "\u0648",
    to: "m"
  },
  {
    from: "\u06C7",
    to: "7"
  },
  {
    from: "\u06C6",
    to: "6"
  },
  {
    from: "\u06C8",
    to: "5"
  },
  {
    from: "\u06CB",
    to: "4"
  },
  {
    from: "\u06D0",
    to: "3"
  },
  {
    from: "\u0649",
    to: "2"
  },
  {
    from: "\u064A",
    to: "1"
  }
];
const sMap = {};
const tMap = {};
EncryptMap.forEach((item) => {
  sMap[item.from] = item.to;
  tMap[item.to] = item.from;
});
function encode(word) {
  return Array.from(word).map((item) => sMap[item] || item).join("");
}
function decode(word) {
  return Array.from(word).map((item) => tMap[item] || item).join("");
}
export { decode, encode };
