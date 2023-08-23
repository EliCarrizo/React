import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from '@chakra-ui/react'
  import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className='body'>
        <div>
            <h1>Faster Click Store 🖱</h1>
        </div>
            <Menu>
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
        <CartWidget/>
    </div>
  )
}

export default NavBar