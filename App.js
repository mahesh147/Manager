import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './src/Router';
import reducers from './src/reducers';


class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAElNLVpFEgIDBzUJcpAJZBQUuV8cZRpjc',
      authDomain: 'manager-15b11.firebaseapp.com',
      databaseURL: 'https://manager-15b11.firebaseio.com',
      projectId: 'manager-15b11',
      storageBucket: 'manager-15b11.appspot.com',
      messagingSenderId: '885954541214'
  };

  firebase.initializeApp(config);
}
    render() {

      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

      return (
        <Provider store={store}>
        <Router />
        </Provider>
      );
    }
}

export default App;
