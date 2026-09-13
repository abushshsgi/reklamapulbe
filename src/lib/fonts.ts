const NORMAL =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const STYLES = {
  bold: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵",
  gothic: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷0123456789",
  wide: "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９",
  cursive: "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫",
} as const;

export type FontStyle = keyof typeof STYLES;

export const FONT_STYLE_META: Record<
  FontStyle,
  { label: string; hint: string }
> = {
  bold: { label: "Bold Sans", hint: "Loud bio energy" },
  gothic: { label: "Gothic", hint: "Dark academia vibe" },
  wide: { label: "Wide", hint: "Spaced & aesthetic" },
  cursive: { label: "Cursive", hint: "Soft script look" },
};

function mapChars(input: string, mapped: string): string {
  return [...input]
    .map((char) => {
      const index = NORMAL.indexOf(char);
      if (index === -1) return char;
      return [...mapped][index] ?? char;
    })
    .join("");
}

export function convertFont(text: string, style: FontStyle): string {
  return mapChars(text, STYLES[style]);
}

export const AESTHETIC_SYMBOLS = [
  "✦",
  "✧",
  "★",
  "☆",
  "☾",
  "☽",
  "✿",
  "❀",
  "❁",
  "☘",
  "♡",
  "♥",
  "✧˖°",
  "⋆｡°✩",
  "ꨄ",
  "☁︎",
  "༄",
  "✧･ﾟ",
  "‧₊˚",
  "˚₊·",
  "⋆.ೃ࿔",
  "ᯓ★",
  "♡₊˚",
  "✧⋄⋆",
];
