import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Currency = 'EUR' | 'USD'

export interface CurrencyInfo {
  code: Currency
  symbol: string
  price: string
  regular: string
  discount: string
  label: string
  workbookValue: string
}

export const CURRENCIES: Record<Currency, CurrencyInfo> = {
  EUR: {
    code: 'EUR',
    symbol: '€',
    price: '8.90',
    regular: '47.00',
    discount: '81%',
    label: 'EUR (€)',
    workbookValue: '€62.00',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    price: '9.90',
    regular: '49.00',
    discount: '80%',
    label: 'USD ($)',
    workbookValue: '$68.00',
  },
}

interface CurrencyContextType {
  currency: Currency
  setCurrency: (c: Currency) => void
  currentCurrency: CurrencyInfo
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('EUR')

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currentCurrency: CURRENCIES[currency],
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
