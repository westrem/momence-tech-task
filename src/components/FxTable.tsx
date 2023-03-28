import { PropsWithChildren } from 'react'

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Skeleton, Box } from '@chakra-ui/react'

import { CNBExchangeRecord } from '../utils/types'

// -------------------------------------------------------------------------------------------------------------------
// Helper components
// -------------------------------------------------------------------------------------------------------------------
function TableWrapper(props: PropsWithChildren) {
  const { children } = props
  return (
    <Box
      p={3}
      border='1px'
      borderColor='gray.200'
      borderRadius='xl'
    >
      <TableContainer>
        <Table
          variant='unstyled'
          size='md'
        >
          <Thead>
            <Tr>
              <Th>Currency</Th>
              <Th isNumeric>Amount</Th>
              <Th isNumeric>Rate</Th>
            </Tr>
          </Thead>
          <Tbody>{children}</Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

function SkeletonRow() {
  return (
    <Tr>
      <Td>
        <Skeleton height='16px' />
      </Td>
      <Td>
        <Skeleton height='16px' />
      </Td>
      <Td>
        <Skeleton height='16px' />
      </Td>
    </Tr>
  )
}

// -------------------------------------------------------------------------------------------------------------------
// Main component
// -------------------------------------------------------------------------------------------------------------------

interface Props {
  /**
   * @default false
   */
  loading?: boolean

  records: CNBExchangeRecord[]
}

function FxTable(props: Props) {
  const { loading = false, records } = props

  if (loading)
    return (
      <TableWrapper>
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
      </TableWrapper>
    )

  return (
    <TableWrapper>
      {records.map((record) => (
        <Tr key={record.code}>
          <Td>{record.code}</Td>
          <Td isNumeric>{record.amount}</Td>
          <Td isNumeric>{record.rate}</Td>
        </Tr>
      ))}
    </TableWrapper>
  )
}

export { FxTable }
