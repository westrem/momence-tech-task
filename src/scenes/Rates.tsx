import { Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

import { FxTable, Disclaimer, InfoNav } from '../components'

import { useFxContext } from '../contexts/fx'
import { linkTo } from '../utils/routing'

function Rates() {
  const { records, ready } = useFxContext()

  return (
    <>
      <InfoNav position='top'>
        <Link
          as={ReactLink}
          to={linkTo.root()}
          fontSize='xs'
        >
          Back to Exchange
        </Link>
        <Disclaimer />
      </InfoNav>

      <FxTable
        records={records}
        loading={!ready}
      />
    </>
  )
}

export { Rates }
