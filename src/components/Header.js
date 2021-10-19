import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { useRecoilValue } from 'recoil';
import { cartHiddenAtom } from '../store/cart';
import CartDropdown from './CartDropdow';
import CartIcon from './CartIcon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const cartHidden = useRecoilValue(cartHiddenAtom)
  return (
    <div>
      <Navbar light expand="md" className="">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="justify-content-end" style={{width: '100%'}} >
            <NavItem className="d-flex">
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/sign">Sign</NavLink>
              {/* {
                currentUser ? <NavLink style={{cursor: 'pointer'}} onClick={() => auth.signOut()}>Logout</NavLink> :
                 <NavLink href="/sign">Sign</NavLink>
              } */}
              <NavLink><CartIcon /></NavLink>
              {
                cartHidden ? null : <CartDropdown />
              }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;