import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React     from 'react'
import useStyles from './styles'

const ContactCard = ({name,mobile,email,id,list,setList}) => {
    const classes = useStyles()

    const handleDelete=(id)=>{
        let updatedList = list.filter((item)=>{
            return id !== item.id
        })
        setList(updatedList)
    }
    
  return (
    <Card className={classes.card}>
        <CardContent>
        <div className={classes.primary}>
            <div >
                <Typography color="textSecondary" className={classes.content}>Name</Typography>
                <Typography color="textSecondary" gutterBottom className={`${classes.content} ${classes.addContent}`}>{name}</Typography>
            </div>
            <div className={classes.section}>
                <Typography color="textSecondary" className={classes.content}>Mobile No</Typography>
                <Typography color="textSecondary" gutterBottom className={`${classes.content} ${classes.addContent}`}>{mobile}</Typography>
            </div>
        </div>    
        <div className={classes.secondary}>
            <div >
                <Typography color="textSecondary" className={classes.content}>Email ID</Typography>
                <Typography color="textSecondary" gutterBottom className={`${classes.content} ${classes.addContent}`}>{email}</Typography>
            </div>
            <CardActions>
                <Button size="small" className={classes.button} onClick={()=>handleDelete(id)}>Delete</Button>
            </CardActions>
        </div>    
        </CardContent>
    </Card>
  )
}

export default ContactCard