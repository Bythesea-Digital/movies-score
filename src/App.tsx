import React from 'react';
// import './assets/bulma.min.css';
// import './assets/animate.css';
import './styles/main.css'
import {BrowserRouter} from "react-router-dom";
import { Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import Movies from "./features/Movies";


const App = (props) => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Movies}/>
          {/*<Route  path="/movie/:id" component={pages.ShowMovie}/>*/}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
};


export default App;
