import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={Home}/>
          <Route path="/detail" exact component={Detail}/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
