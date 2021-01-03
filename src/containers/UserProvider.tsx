import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth, generateUserDocument } from '../firebase';
import { setCurrentUser } from '../Store';

const UserProvider = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      auth.onAuthStateChanged(async userAuth => {
        const user = await generateUserDocument(userAuth);
        dispatch(setCurrentUser(user));
      })
    },[dispatch]);

    return (
        <div>
            
        </div>
    )
}

export default UserProvider
