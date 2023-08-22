import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
        <Menu>
            {({ isOpen }) => (
            <>
                <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                {isOpen ? 'Close' : 'Open'}
                </MenuButton>
                <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
                </MenuList>
            </>
            )}
        </Menu>
    </div>
  )
}

export default Navbar