import React from 'react'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../Store';

const Home = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentUser(null));
    }

    return (
        <div>
            <h1>Hello!</h1>
            <Button onClick={handleClick} color="secondary" variant="outlined" >
                Sign Out
            </Button>
        </div>
    )
}

export default Home
