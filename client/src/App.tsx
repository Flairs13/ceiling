import React from 'react'
import GlobalStyle from "./globalStyle";
import {Route, Switch} from "react-router-dom";

import Main from "./Main/main";
import Admin from "./Admins/admin";



function App() {

    return (
        <>
            <GlobalStyle/>
            <Switch>
                <Route  path={'/admin'} render={() => <Admin/>}/>
                <Route path={'/'} render={() => <Main/>}/>
            </Switch>
        </>
    );
}

export default App;




