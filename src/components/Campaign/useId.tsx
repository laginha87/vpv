import { useLocation } from 'react-router'

export const useId = (): string => {
  const { pathname } = useLocation()
  return pathname.split('/').pop() as string
}
