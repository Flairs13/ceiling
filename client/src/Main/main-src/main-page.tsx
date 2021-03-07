import React from 'react';
import {Route} from 'react-router-dom';
import MainItemContainer from './main-itemContainer';

const MainPage: React.FC = () => {
    return (
        <div>
            <Route path='/:route' render={({match}) => <MainItemContainer route={match.params.route}/>
            }/>
        </div>
    );
};

export default MainPage;
