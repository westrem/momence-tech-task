import { FxTable, Disclaimer, InfoNav } from '../components'

import daily from '../../cypress/fixtures/daily.json'

import { BaseSceneProps } from './types'

function Rates(props: BaseSceneProps) {
  const { ready = false } = props

  return (
    <>
      <InfoNav position='top'>
        <Disclaimer />
      </InfoNav>

      <FxTable
        records={daily}
        loading={!ready}
      />
    </>
  )
}

export { Rates }
