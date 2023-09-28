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
            <h2>The way to buy all the Anime STUFFS</h2>
        </div>
            <Menu>
                <MenuButton className='text'>
                    PRODUCTOS
                </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to={`/categoria/${"A"}`}>
                            Categoria A
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/categoria/${"B"}`}>
                            Categoria B
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/categoria/${"C"}`}>
                            Categoria C
                            </Link>
                        </MenuItem>
                    </MenuList>
            </Menu>
        <CartWidget/>
    </div>
  )
}

export default NavBar