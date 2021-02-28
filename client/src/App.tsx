import React from 'react'
import GlobalStyle from "./globalStyle";
import {Route} from "react-router-dom";
import Admin from "./Admins/admin";
import MainPage from "./Main/main-src/main-page";


function App() {
    return (
        <>
            <GlobalStyle/>
            <Route path='/admin' render={() => <Admin/>}/>
            <Route exact path={'/'} render={() => <MainPage/>}/>
        </>
    );
}

export default App;




