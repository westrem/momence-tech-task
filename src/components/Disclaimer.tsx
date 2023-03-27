import { format } from 'date-fns'
import { Text } from '@chakra-ui/react'

import { now, dateFormat } from '../utils/date'

interface Props {
  /**
   * The date the exchange rates are from
   * @default now
   */
  date?: Date | number
}

function Disclaimer(props: Props) {
  const { date = now } = props
  const formatted = format(date, dateFormat)

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
