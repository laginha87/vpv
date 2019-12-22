import classNames from 'classnames'
import tailwindConfig from '~/../tailwind.config'
export type TailwindColor = keyof typeof tailwindConfig.theme.colors;
export type TailwindPadding = keyof typeof tailwindConfig.theme.padding;
export type TailwindMargin = keyof typeof tailwindConfig.theme.margin;
export type TailwindWidth = keyof typeof tailwindConfig.theme.width;
export type TailwindBorderRadius = keyof typeof tailwindConfig.theme.borderRadius;
export type TailwindBorderWidth = keyof typeof tailwindConfig.theme.borderWidth;

export const COLORS = tailwindConfig.theme.colors

export const COLOR_NAMES = Object.keys(tailwindConfig.theme.colors)
export const BG_COLORS = COLOR_NAMES.map(e => `bg-${e}`)
export const TEXT_COLORS = COLOR_NAMES.map(e => `text-${e}`)

export interface TailwindPropsInner {
  p: TailwindPadding,
  px: TailwindPadding,
  py: TailwindPadding,
  pl: TailwindPadding,
  pr: TailwindPadding,
  pt: TailwindPadding,
  pb: TailwindPadding,
  m: TailwindMargin,
  mx: TailwindMargin,
  my: TailwindMargin,
  ml: TailwindMargin,
  mr: TailwindMargin,
  mt: TailwindMargin,
  mb: TailwindMargin,
  bg: TailwindColor,
  text: TailwindColor,
  w: TailwindWidth,
  rounded: TailwindBorderRadius,
}

const TailwindPropKeys: { [k in keyof TailwindPropsInner]: string } = {
  p: '',
  px: '',
  py: '',
  pl: '',
  pr: '',
  pt: '',
  pb: '',
  m: '',
  mx: '',
  my: '',
  ml: '',
  mr: '',
  mt: '',
  mb: '',
  bg: '',
  text: '',
  w: '',
  rounded: ''
}

const TailwindPropsSet = new Set<string>(Object.keys(TailwindPropKeys))

export const tailwindClassNames = (props: Partial<TailwindPropsInner>, ...rest) => {
  const tailwindClasses = Object
    .keys(props)
    .filter((e) => TailwindPropsSet.has(e))
    .map((k) => props[k] === 'default' ? k : [k, props[k]].join('-')).join(' ')
  return classNames(tailwindClasses, rest)
}

export type TailwindProps<Required extends keyof TailwindPropsInner, Optional extends keyof TailwindPropsInner = never> = Pick<TailwindPropsInner, Required> & Partial<Pick<TailwindPropsInner, Optional>>;
