import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Menu>
            <h1>Faster cLICK</h1>
            <MenuButton>
                Skus
            </MenuButton>
            <MenuList>
                <MenuItem>
                    Category A
                </MenuItem>
                <MenuItem>
                    Category B
                </MenuItem>
                <MenuItem>
                    Category C
                </MenuItem>
            </MenuList>
        </Menu>
    </div>
  )
}

export default NavBar