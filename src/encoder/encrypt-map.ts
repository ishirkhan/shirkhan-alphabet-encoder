export interface IEncryptMap {
  from: string;
  to: string;
}
const EncryptMap: IEncryptMap[] = [
  {
    from: "ئ",
    to: "q",
  },
  {
    from: "ا",
    to: "w",
  },
  {
    from: "ە",
    to: "e",
  },
  {
    from: "ب",
    to: "r",
  },
  {
    from: "پ",
    to: "t",
  },
  {
    from: "ت",
    to: "y",
  },
  {
    from: "ج",
    to: "u",
  },
  {
    from: "چ",
    to: "i",
  },
  {
    from: "خ",
    to: "o",
  },
  {
    from: "د",
    to: "p",
  },
  {
    from: "ر",
    to: "a",
  },
  {
    from: "ز",
    to: "s",
  },
  {
    from: "ژ",
    to: "d",
  },
  {
    from: "س",
    to: "f",
  },
  {
    from: "ش",
    to: "g",
  },
  {
    from: "غ",
    to: "h",
  },
  {
    from: "ف",
    to: "j",
  },
  {
    from: "ق",
    to: "k",
  },
  {
    from: "ك",
    to: "l",
  },
  {
    from: "گ",
    to: "z",
  },
  {
    from: "ل",
    to: "x",
  },
  {
    from: "ڭ",
    to: "c",
  },
  {
    from: "م",
    to: "v",
  },
  {
    from: "ن",
    to: "b",
  },
  {
    from: "ھ",
    to: "n",
  },
  {
    from: "و",
    to: "m",
  },
  {
    from: "ۇ",
    to: "7",
  },
  {
    from: "ۆ",
    to: "6",
  },
  {
    from: "ۈ",
    to: "5",
  },
  {
    from: "ۋ",
    to: "4",
  },
  {
    from: "ې",
    to: "3",
  },
  {
    from: "ى",
    to: "2",
  },
  {
    from: "ي",
    to: "1",
  },
];

const sMap: { [k: string]: string } = {};
const tMap: { [k: string]: string } = {};
EncryptMap.forEach((item) => {
  sMap[item.from] = item.to;
  tMap[item.to] = item.from;
});

export { sMap, tMap };
