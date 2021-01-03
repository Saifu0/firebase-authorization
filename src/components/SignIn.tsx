import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { setCurrentUser } from '../Store';
import { 
    TextField,
    Button,
    Typography
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const SignIn = () => {

    const [ email, setEmail ] = useState('');
    const [ password, SetPassword ] = useState('');
    const [ error, setError ] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = ( event : any ) => {
        const { name, value } = event.currentTarget;

        setError('');


        if(name==="userEmail"){
            setEmail(value);
        }else if(name === "userPassword"){
            SetPassword(value);
        }
    }

    const signInHandler = async ( event : any ) => {
        event.preventDefault();
        try{
            const {user} = await auth.signInWithEmailAndPassword(email,password);
            dispatch(setCurrentUser(user));
            setError('');

        }
        catch(error){
            setError(error.message);
            console.log("Error signing!",error);
        };
        
    }

    console.log("[EMAIL]",email);
    console.log('[PASSWORD]',password);

    return (
        <div>
            { error && <Alert severity="error">{error}</Alert>}
            <Typography variant="h4" color="textSecondary">
                Login
            </Typography>
            <hr/>
            <form >
                <div>
                    <TextField 
                        required
                        label="Email" 
                        name="userEmail"
                        onChange={(event) => handleChange(event)} 
                    />
                </div>
                
                <div>
                    <TextField 
                        required
                        label="Password" 
                        name="userPassword" 
                        type="password"
                        onChange={(event) => handleChange(event)} 
                    />
                </div>
                
                <div style={{ marginTop : 20}}>
                    <Button variant="outlined" color="secondary" onClick={(event) => signInHandler(event)}>Sign In</Button>
                </div>
            </form>
            <p>Don't have an account {" "}</p>
            <Link to="signup">
                Sign Up
            </Link>
        </div>
    
    )
}

export default SignIn
