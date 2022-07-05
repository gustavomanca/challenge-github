import { ButtonHTMLAttributes } from 'react'

export type VariantOptions = 'contained' | 'info' | 'outlined' | 'text'

export type Props = {
  variant?: VariantOptions
} & ButtonHTMLAttributes<HTMLButtonElement>
