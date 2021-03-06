import React from 'react'
import GlobalStyle from "./globalStyle";
import {Route} from "react-router-dom";
import Admin from "./Admins/admin";
import Main from "./Main/main";
import {ThemeProvider} from "styled-components";


function App() {

    const theme = {
        main: '#0088CC',
        second: '#999',
        mainBorder: 'rgba(0,0,0,0.06)'
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Route path='/admin' render={() => <Admin/>}/>
                <Route exact path={'/'} render={() => <Main/>}/>
            </ThemeProvider>
        </>
    );
}

export default App;




