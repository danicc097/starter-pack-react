import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { cartHiddenAtom } from '../store/cart';
import CartDropdown from './CartDropdow';
import CartIcon from './CartIcon';
import useRouter from '../Hooks/useRouter'

const Header = () => {
  const router = useRouter()
  const cartHidden = useRecoilValue(cartHiddenAtom)
  return (
    <div>
      <AppBar sx={{ backgroundColor: 'transparent'}}>
        <Toolbar>
          <Typography variant="a" component="div" sx={{ flexGrow: 1, color: 'black', cursor: 'pointer' }} onClick={() => router.history.push('/')}>
              Logo
            </Typography>
            <Button color="secondary" onClick={() => router.history.push("/shop")}>Shop</Button>
            <Button color="secondary" onClick={() => router.history.push("/contact")}>Contact</Button>
            <Button color="secondary" onClick={() => router.history.push("/sign")}>Sign</Button>
            <div><CartIcon /></div>
            {
                cartHidden ? null : <CartDropdown />
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;