import { format } from 'date-fns'

const now = Date.now()
const dateFormat = 'dd.MM.yyyy'
const todayFormatted = format(now, dateFormat)

export { now, todayFormatted, dateFormat }
