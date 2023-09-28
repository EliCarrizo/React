import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Item = ({ producto }) => {

    console.log (producto)

  return (
    <div>
      <Card>
        <CardBody>
          <Image
          src={producto.image}
          />
          <Stack>
            <Heading>{producto.nombre}</Heading>
            <Text>Some text
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Button>
              <Link to={`/item/${producto.id}`}>Detalle</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Item