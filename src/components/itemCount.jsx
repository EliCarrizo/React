import { useState } from 'react'
import { Button, Stack, Box } from '@chakra-ui/react'


const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const onAdd = () => {

        setContador(contador + 1);
    }

 return (
        <>
        <Stack>
            <Box>
                <Button onClick={onAdd}>
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
            <Button>Agregar al 🛒</Button>
        </Stack>
    </>

  )

 }

export default ItemCount