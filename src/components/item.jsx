import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading  } from '@chakra-ui/react'


const item = ({producto}) => {

    console.log (producto)

  return (
    <div>
      <card>
        <CardBody>
          src={producto.Image}
          <Stack>
            <Heading>{producto.nombre}</Heading>
            <text>check
            </text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <button>
              <link to={`/item/${producto.id}`}>Detalle</link>
            </button>
          </ButtonGroup>
        </CardFooter>
      </card>
    </div>
  )
}

export default item