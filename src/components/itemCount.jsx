import { useState } from 'react'
import { Button, Stack, Box } from '@chakra-ui/react'


const ItemCount = () => {

    const [contador, setContador] = useState(0)

  return (
        <>
        <Stack>
            <Box>
                <Button onClick={() => setContador(contador + 1)}>
                    +
                </Button>
            </Box>
            <Box>
                <p>{contador}</p>
            </Box>
            <Box>
                <Button onClick={() => setContador(contador - 1)}>
                    -
                </Button>
            </Box>
        </Stack>
    </>
  )
}

export default ItemCount