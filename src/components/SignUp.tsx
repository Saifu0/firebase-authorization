import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../Store';
import { Link } from 'react-router-dom';
import { auth, generateUserDocument } from '../firebase';
import { 
    TextField,
    Button,
    Typography
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const SignUp = () => {

    const [ email, setEmail ] = useState('');
    const [ password, SetPassword ] = useState('');
    const [ confirmPassword, setConfrimPassword ] = useState('');
    const [ error, setError ] = useState('');
    const dispatch = useDispatch()
    
    const handleChange = ( event : any ) => {
        const { name, value } = event.currentTarget;

        setError('');

        if(name==="userEmail"){
            setEmail(value);
        }else if(name === "userPassword"){
            SetPassword(value);
        }else if(name === "userConfirmPassword"){
            setConfrimPassword(value);
        }
    }

    const createUserHandler = async ( event : any ) => {
        event.preventDefault();
        
        if(password !== confirmPassword){
            setError("Password mismatch!");
            return;
        }
        
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            dispatch(setCurrentUser(user));
            generateUserDocument(user);
            setError('');

        }catch(error){
            setError(error.message);
        }
    }
                                                     
    return (
        <div>
            { error && <Alert severity="error">{error}</Alert>}
            <Typography variant="h4" color="textSecondary">
                Create an account
            </Typography>
            <hr/>
            <form>
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

                <div>
                    <TextField 
                        required
                        label="Confirm Password" 
                        name="userConfirmPassword" 
                        type="password"
                        onChange={(event) => handleChange(event)} 
                    />
                </div>
                
                <div style={{ marginTop : 20 }}>
                    <Button variant="outlined" color="secondary" onClick={(event) => createUserHandler(event)}>Sign In</Button>
                </div>
            </form>
            <p>Already have an account {" "}</p>
            <Link to="/">
                Sign In
            </Link>
        </div>
    
    )
}

export default SignUp;
