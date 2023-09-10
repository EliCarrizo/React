import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading  } from '@chakra-ui/react'


const item = ({producto}) => {

    console.log (producto)

  return (
    <div>
      <Card>
        <CardBody>
          src={producto.Image}
          <Stack>
            <Heading>{producto.nombre}</Heading>
            <Text>check
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Button>
              <link to={`/item/${producto.id}`}>Detalle</link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  )
}

export default item