import { FxTable, Disclaimer, InfoNav, NavLink } from '../components'

import { useFxContext } from '../contexts/fx'
import { linkTo } from '../utils/routing'

function Rates() {
  const { records, ready, date } = useFxContext()

  return (
    <>
      <InfoNav position='top'>
        <NavLink
          backlink
          to={linkTo.root()}
        >
          Back to Exchange
        </NavLink>
        <Disclaimer date={date} />
      </InfoNav>

      <FxTable
        records={records}
        loading={!ready}
      />
    </>
  )
}

export { Rates }
