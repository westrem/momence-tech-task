import React, { useContext, PropsWithChildren } from 'react'

import { useDailyFx } from '../queries'
import { CNBExchangeRecord } from '../utils/types'

interface FxContextValue {
  records: CNBExchangeRecord[]
  default: boolean
  loading: boolean
  errorOccured: boolean
  ready: boolean
}

const defaultFxContextValue = {
  records: [
    {
      country: 'EMU',
      currency: 'euro',
      amount: 1,
      code: 'EUR' as const,
      rate: 24.12, // Average exchange rate for past few months
    },
  ],
  default: true,
  loading: false,
  errorOccured: false,
  ready: true,
}

const FxContext = React.createContext<FxContextValue>(defaultFxContextValue)
FxContext.displayName = 'FxContext'

function useFxContext() {
  return useContext(FxContext)
}

function FxContextProvider(props: PropsWithChildren) {
  const { data, isLoading, isError, isSuccess } = useDailyFx()

  return (
    <FxContext.Provider
      value={
        isError
          ? {
              ...defaultFxContextValue,
              errorOccured: isError,
            }
          : {
              records: data ?? [],
              default: false,
              loading: isLoading,
              errorOccured: isError,
              ready: isSuccess,
            }
      }
    >
      {props.children}
    </FxContext.Provider>
  )
}

export { useFxContext, FxContextProvider }
