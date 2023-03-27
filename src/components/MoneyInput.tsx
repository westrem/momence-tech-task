import { Text, Input, InputGroup, InputRightAddon, Stack, Skeleton, chakra } from '@chakra-ui/react'

interface Props {
  /**
   * @default false
   */
  loading?: boolean

  /**
   * @example 420,69
   */
  value: string

  onChange: (newValue: string) => void
}

function MoneyInput(props: Props) {
  const { loading = false, value, onChange } = props

  if (loading)
    return (
      <Stack
        spacing={2}
        minW='350px'
      >
        <Skeleton height='24px' />
        <Skeleton height='48px' />
      </Stack>
    )

  return (
    <Stack spacing={2}>
      <chakra.label
        htmlFor='moneyIn'
        textAlign='center'
        w='100%'
      >
        <Text fontSize='md'>How much CZK do you want to exchange?</Text>
      </chakra.label>

      <InputGroup size='lg'>
        <Input
          placeholder='420,69'
          value={value}
          onChange={(evt) => onChange(evt.target.value)}
          id='moneyIn'
        />
        <InputRightAddon children='CZK' />
      </InputGroup>
    </Stack>
  )
}

export { MoneyInput }
