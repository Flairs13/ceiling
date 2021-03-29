import React from 'react'
import GlobalStyle from "./globalStyle";
import {Route, Switch} from "react-router-dom";
import {Suspense} from 'react';
import Preloader from "./Common/Preloader";
import ErrorBoundary from "./Common/ErrorBundary";


const Admin = React.lazy(() => import("./Admins/admin"));
const Main = React.lazy(() => import("./Main/main"));


function App() {

    return (
        <>
            <GlobalStyle/>
            <Suspense fallback={<Preloader/>}>
                <ErrorBoundary>
                    <Switch>
                        <Route path={'/admin'} render={() => <Admin/>}/>
                        <Route path={'/'} render={() => <Main/>}/>
                    </Switch>
                </ErrorBoundary>
            </Suspense>

        </>
    );
}

export default App;




