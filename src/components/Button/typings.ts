import { ButtonHTMLAttributes, ElementType } from 'react'

export type VariantOptions = 'contained' | 'info' | 'outlined' | 'text'

export type Props = {
  as?: ElementType
  href?: string
  rel?: string
  target?: string
  variant?: VariantOptions
} & ButtonHTMLAttributes<HTMLButtonElement>
