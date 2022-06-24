import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox } from '@material-ui/core'

import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';






const SignUp = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    const avatarStyle = { backgroundColor: 'orange' }
    const marginTop = { marginTop: 5 }
    const buttonStyle = { marginLeft: 70 }


    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2> Sign up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder='Enter your name' />
                    <TextField fullWidth label='Email' placeholder='Enter your Email Addresse' />
                    <FormControl component='fieldset' style={marginTop}>
                        <FormLabel component='legend'>Gender </FormLabel>
                        <RadioGroup area-label='gender' name='gender' style={{ display: 'initial' }}>
                            <FormControlLabel value='female' control={<Radio />} label='Female' />
                            <FormControlLabel value='male' control={<Radio />} label='Male' />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder='Enter a passwor from your choice' />
                    <TextField fullWidth label='Password' required type='password' placeholder='Confirm your password' />
                    <TextField fullWidth label='Confirm password' required type='password' placeholder='Confirm your password' />
                    <FormControlLabel control={<Checkbox name='checkedA' />}
                        label='I accept the terms and conditions'
                    />
                    <Button type='submit' variant='contained' color='primary' style={buttonStyle}>Sign up</Button>


                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp