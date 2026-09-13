/** Kadam.net Direct Link for traffic monetization (blockID=451608). */
export const KADAM_DIRECT_LINK =
  "https://viiukuhe.com/dc/?blockID=451608";

export type AdSize = "728x90" | "300x250" | "320x50";

export type BannerTheme = "gadgets" | "super-price" | "fashion";

/** AliExpress-style creatives generated for Kadam DirectLink placements. */
export const BANNER_IMAGES: Record<
  BannerTheme,
  Record<AdSize, { src: string; alt: string }>
> = {
  gadgets: {
    "300x250": {
      src: "/banners/gadgets-300x250.jpg",
      alt: "Gadgets sale — up to 70% off",
    },
    "728x90": {
      src: "/banners/gadgets-728x90.jpg",
      alt: "Gadgets sale — up to 70% off",
    },
    "320x50": {
      src: "/banners/gadgets-320x50.jpg",
      alt: "Gadgets — 70% off",
    },
  },
  "super-price": {
    "300x250": {
      src: "/banners/super-price-300x250.jpg",
      alt: "Super price home deals from $2",
    },
    "728x90": {
      src: "/banners/super-price-728x90.jpg",
      alt: "Super price home deals from $2",
    },
    "320x50": {
      src: "/banners/super-price-320x50.jpg",
      alt: "Super price from $2",
    },
  },
  fashion: {
    "300x250": {
      src: "/banners/fashion-300x250.jpg",
      alt: "Trending fashion — 60% off",
    },
    "728x90": {
      src: "/banners/fashion-728x90.jpg",
      alt: "Trending fashion — 60% off",
    },
    "320x50": {
      src: "/banners/fashion-320x50.jpg",
      alt: "Trending fashion — 60% off",
    },
  },
};
