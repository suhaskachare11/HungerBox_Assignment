import React, { useEffect, useState } from 'react'
import {Button, Paper, TextField, Typography} from '@material-ui/core'
import useStyles from './styles'
import ContactCard from '../Cards/ContactCard'

const getLocalContacts =()=>{
  let contact = localStorage.getItem('contacts')
  if(contact){
    return JSON.parse(localStorage.getItem('contacts'))
  }else{
    return []
  }
}

const Form = () => {
    const classes = useStyles()
    const[name,setName]=useState('');
    const[mobile,setMobile]=useState('');
    const[email,setEmail]=useState('');
    const[list,setList]=useState(getLocalContacts());

    useEffect(()=>{
      localStorage.setItem('contacts',JSON.stringify(list))
   },[list])
    
    const handleChange = () => {
      if(name&&mobile&&email){
        const newContact = {
          id: new Date().getTime().toString(),
          name,
          mobile,
          email
        }
        setList([...list,newContact])
        setName('')
        setMobile('')
        setEmail('')
      }
      
    }
  
  return (
    <>
    <Paper elevation={3} className={classes.paper}>
        <form>
          <Typography className={classes.heading}>Employee List</Typography>
          <TextField 
            label="Name" 
            fullWidth 
            className={classes.textField} 
            required 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField 
            label="Mobile No"  
            fullWidth 
            className={classes.textField} 
            required 
            value={mobile} 
            onChange={(e)=>setMobile(e.target.value)}
          />
          <TextField 
            label="Email ID" 
            fullWidth 
            className={classes.textField} 
            required 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          /> 
          <Button variant='contained' className={classes.button} size='small' onClick={handleChange}>Add</Button> 
        </form>  
    </Paper>
    {
      list.map((item,id)=>{
        return (
            <ContactCard name={item.name} mobile={item.mobile} email={item.email} id={item.id} list={list} setList={setList}/>
        )
      })
    }
    </>
   
  )
}

export default Form
