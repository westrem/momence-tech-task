import { format } from 'date-fns'
import { Text } from '@chakra-ui/react'

import { dateFormat } from '../utils/date'

interface Props {
  /**
   * The date the exchange rates are from
   * @default now
   */
  date?: Date | number | string | null
}

function Disclaimer(props: Props) {
  const { date } = props

  const dateToUse = date ? (typeof date === 'string' ? new Date(date) : date) : Date.now()
  const formatted = format(dateToUse, dateFormat)

  return (
    <Text
      color='gray.400'
      fontSize='xs'
      textAlign='center'
    >
      Using rates from CNB.cz for date {formatted}
    </Text>
  )
}

export { Disclaimer }
