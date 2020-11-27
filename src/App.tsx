import React, {useMemo, useState} from 'react';
import {ThemeProvider} from "styled-components";

// import './assets/bulma.min.css';
// import './assets/animate.css';
import './styles/main.css'
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store'
import Movies from "./features/Movies";
import Header from "./components/Header";
import {darkTheme, lightTheme} from "./styles/themes";
import {Themes} from "./helpers/consts";


const App = () => {
    const [theme, setTheme] = useState<keyof typeof Themes>(Themes.light);
    const isDarkMode = useMemo(() => theme === Themes.dark, [theme])

    const themeToggler = () => {
        if (isDarkMode) {
            setTheme(Themes.light)
        } else {
            setTheme(Themes.dark)
        }
    }

    const selectedTheme = isDarkMode ? darkTheme : lightTheme

    return (
        <ThemeProvider theme={selectedTheme}>
            <Provider store={store}>
                <Header setTheme={themeToggler} isDarkMode={isDarkMode}/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Movies}/>
                        {/*<Route  path="/movie/:id" component={pages.ShowMovie}/>*/}
                    </Switch>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    )
};


export default App;
