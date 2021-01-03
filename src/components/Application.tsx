import React from 'react';
import { useSelector } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Application = () => {

    const { user } = useSelector((state : any) => state.userState);


    React.useEffect(() => {
       console.log('[USER]',user);
    },[user]);

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/signup" exact component={user ? Home : SignUp}/>
                    <Route path="/" exact component={user ? Home : SignIn} />
                </Switch>
            </Router>

        </div>
    )
}

export default Application
