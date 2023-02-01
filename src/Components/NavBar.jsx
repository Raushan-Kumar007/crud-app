
import {AppBar, Toolbar,Typography, styled} from '@mui/material'
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`
   background: #111111;
`
const Tabs = styled(NavLink)`
   font-size: 20px;
   margin-right:200px;
   color: white;
   text-decoration:none;
`
const NavBar= () =>{
    return(
        <Header position='static'>
            <Toolbar>
                 <Tabs to='/'>CRUD Application</Tabs>
                 <Tabs to='/All'>All Users</Tabs>
                 <Tabs to='/add'>Add Users</Tabs>
            </Toolbar>
        </Header>
    )
}
export default NavBar;
