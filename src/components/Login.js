import { Grid, Paper, Avatar, TextField, FormControlLabel,Button, Typography, Link } from '@material-ui/core'
import React from 'react'
import { Checkbox } from '@material-ui/core'



const Login = ()=> {

  const paperStyle = {padding: 20, height:'70vh', width:280, margin:'20px auto'}
  const avatarStyle = {backgroundColor:'#5effed'}
  const btnStyle = {margin:'8px 0'}


    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                 <Grid align='center'> 
                    <Avatar style={avatarStyle}>S</Avatar>
                    Sign in
                 </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required></TextField>
                <TextField label='Password' type='password' placeholder='Enter password' fullWidth required></TextField>
                <FormControlLabel 
                control={<Checkbox  />} label="Remember me" />
                <Button type='submit' color='primary' fullWidth variant='contained' style={btnStyle}>Sign in</Button>
                <Typography>
                    <Link href='#' >Forgot password ?</Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href='#'>Sign up</Link></Typography>
                    
            </Paper>
        </Grid>
    )
}

export default Login