import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from '@chakra-ui/react'
  import CartWidget from './CartWidget'
  import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='body'>
        <div>
            <h1 className='title'>Faster Click Store 🖱</h1>
        </div>
            <Menu>
                <MenuButton className='text'>
                    Skus
                </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <link to={`/categoria/${"A"}`}>
                            Categoria A
                            </link>
                        </MenuItem>
                        <MenuItem>
                            <link to={`/categoria/${"B"}`}>
                            Categoria B
                            </link>
                        </MenuItem>
                        <MenuItem>
                            <link to={`/categoria/${"C"}`}>
                            Categoria C
                            </link>
                        </MenuItem>
                    </MenuList>
            </Menu>
        <CartWidget/>
    </div>
  )
}

export default NavBar