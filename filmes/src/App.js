import React from 'react';
import './assets/bulma.min.css';
import './assets/animate.css';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import { Route, Switch} from "react-router-dom";
import * as pages from "./pages";
import { Provider } from 'react-redux';
import store from './store'


const App = (props) => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={pages.Movies}/>
          <Route  path="/movie/:id" component={pages.ShowMovie}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
};


export default App;
