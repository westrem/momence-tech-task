import React, { useContext, PropsWithChildren } from 'react'

import { useDailyFx } from '../queries'
import { sortBy, keyBy } from '../utils/common'
import { CNBExchangeRecord } from '../utils/types'

interface FxContextValue {
  date: string | null
  records: CNBExchangeRecord[]
  recordsMap: Record<string | CNBExchangeRecord['code'], CNBExchangeRecord>
  default: boolean
  loading: boolean
  errorOccured: boolean
  ready: boolean
}

const EUR = {
  country: 'EMU',
  currency: 'euro',
  amount: 1,
  code: 'EUR' as const,
  rate: 24.12, // Average exchange rate for past few months
}

const defaultFxContextValue = {
  date: null,
  records: [EUR],
  recordsMap: {
    EUR,
  },
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
  const { children } = props
  const { data, isLoading, isError, isSuccess } = useDailyFx()
  const records = data ? data.records : []
  const date = data ? data.date : null

  return (
    <FxContext.Provider
      value={
        isError
          ? {
              ...defaultFxContextValue,
              errorOccured: isError,
            }
          : {
              date,
              records: records.sort(sortBy('code')),
              recordsMap: keyBy(records, 'code'),
              default: false,
              loading: isLoading,
              errorOccured: isError,
              ready: isSuccess,
            }
      }
    >
      {children}
    </FxContext.Provider>
  )
}

export { useFxContext, FxContextProvider }
