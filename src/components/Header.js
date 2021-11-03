import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { cartHiddenAtom } from '../store/cart';
import CartDropdown from './CartDropdow';
import CartIcon from './CartIcon';
import useRouter from '../Hooks/useRouter'
import WhatshotIcon from '@mui/icons-material/Whatshot';


const Header = () => {
  const router = useRouter()
  const cartHidden = useRecoilValue(cartHiddenAtom)
  return (
      <AppBar sx={{ backgroundColor: 'white'}} position="fixed">
        <Toolbar>
          <Typography variant="a" component="div" sx={{ flexGrow: 1, color: 'black', cursor: 'pointer' }} onClick={() => router.history.push('/')}>
              <WhatshotIcon />
            </Typography>
              <NavLink exact className="text-decoration-none mx-3 text-dark" to="/shop">Shop</NavLink>
              <NavLink exact className="text-decoration-none mx-3 text-dark" to="/contact">Contact</NavLink>
              <NavLink exact className="text-decoration-none mx-3 text-dark" to="/sign">Sign</NavLink>
            <div style={{cursor: 'pointer'}}><CartIcon /></div>
            {
                cartHidden ? null : <CartDropdown />
            }
        </Toolbar>
      </AppBar>
  );
}

export default Header;