import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import './App.css';
import UserProvider from './containers/UserProvider';
import Application from './components/Application';

const App = () => {

  return (
    <Provider store={store}>
      <div className="App">
         <UserProvider/>
         <Application/>
      </div>
    </Provider>
  );
}

export default App;
