import React from 'react';
import logo from "../img/logo.png";
import { AppBar,Avatar,Toolbar,Typography } from '@mui/material'
import { Daytab } from './Daytab';


export const Header = () => {

  return (
    <AppBar position="fixed" sx={{backgroundColor:"#f0a500"}}>
      <Toolbar >
        <Avatar src={logo}/>
        <Typography sx={{ flexGrow: 1,color:"#1a1c20",fontWeight:"bold"}} align="center" variant="h6" component="div" >
          Haftalık Çalışma Programı
        </Typography>
      </Toolbar>
      <Daytab/>
    </AppBar>

  )
}
