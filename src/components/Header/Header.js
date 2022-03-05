import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Form from '../Form/Form'
import useStyles from './styles'

const Header = () => {
    const classes = useStyles()
    const [form,setForm]=useState(false)

    const addForm = () => {
        setForm(!form)
    }
  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h5" >
              Manage Employee Page
            </Typography>
            <Button color="inherit" onClick={addForm}>Add Contact</Button>
        </Toolbar>
    </AppBar>
    {
  
       form ? 
        <div className={classes.main}>
          <Form/>
        </div>  
        : 
        <div className={classes.mainTwo}>
           Click on Add Contact to Create New Contact
        </div>
    }
    </>
    
  )
}

export default Header