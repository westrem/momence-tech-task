import { useQuery } from 'react-query'
import { format, set, isAfter } from 'date-fns'

import { dateFormat } from '../utils/date'
import parser from '../utils/parser'

import * as CNB from '../api/cnb'

function useDailyFx(date?: string) {
  const now = Date.now()
  const todayFormatted = format(now, dateFormat)
  const todayAt230PM = set(now, {
    hours: 14,
    minutes: 30,
    seconds: 0,
    milliseconds: 0,
  })
  const isAfter230PM = isAfter(now, todayAt230PM)

  // CNB updates Fx rate within the day after 2:30PM
  // so if we are querying data for current date, we need to differentiate the cache key
  // for calls before and after 2:30PM to not end up with stale data
  const queryKeys =
    date && date !== todayFormatted
      ? [date]
      : [date ?? 'today', isAfter230PM ? 'updated' : 'initial']

  return useQuery(['daily', ...queryKeys], CNB.getDailyFx({ date }), {
    staleTime: Infinity,
    cacheTime: 10 * 60 * 1000, // 10 minutes
    select: parser,
  })
}

function useYearlyFx(year?: string) {
  return useQuery(['yearly', year ?? 'this_year'], CNB.getYearlyFx({ year }), {
    staleTime: Infinity,
    cacheTime: 10 * 60 * 1000, // 10 minutes
  })
}

export { useDailyFx, useYearlyFx }
