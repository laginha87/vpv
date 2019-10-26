import tailwindConfig from '../../tailwind.config';

export type ColorName = keyof typeof tailwindConfig.theme.colors;

export const COLOR_NAMES = Object.keys(tailwindConfig.theme.colors);
export const BG_COLORS = COLOR_NAMES.map(e => `bg-${e}`);
export const TEXT_COLORS = COLOR_NAMES.map(e => `text-${e}`);


