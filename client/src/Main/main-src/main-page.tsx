import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainItemContainer from './main-itemContainer';
import Delivery from "./Delivery/delivery";
import { Container } from '../../Common/CSS/src';
import Contacts from "./Contacts/contacts";
import Request from "./Req/req-component";
import Company from "./Company/company";
import ItemRequest from "./item-request";


const MainPage: React.FC = () => {
    return (
        <Container>
            <Switch>
                <Route exact path='/delivery' render={() => <Delivery/>}/>
                <Route exact path='/contacts' render={() => <Contacts/>}/>
                <Route exact path='/request' render={() => <Request/>}/>
                <Route exact path='/company' render={() => <Company/>}/>
                <Route path='/:route/:id' render={({match}) => <ItemRequest id={match.params.id} route={match.params.route}/>}/>
                <Route path='/:route' render={({match}) => <MainItemContainer route={match.params.route}/>}/>

            </Switch>


        </Container>
    );
};

export default MainPage;
