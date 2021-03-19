import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainItemContainer from './main-itemContainer';
import Delivery from "./Delivery/delivery";
import Contacts from "./Contacts/contacts";
import Request from "./Req/req-component";
import Company from "./Company/company";
import ItemRequest from "./item-request";
import Cloth from "./Cloth/Cloth";
import styled from "styled-components/macro";
import { Container } from '../../Common/CSS/src';
import MainComponent from "./TheMain/main-component";


const MainPage: React.FC = () => {
    return (
        <MainWrapper>
            <Container>
                <Switch>
                    <Route exact path='/delivery' render={() => <Delivery/>}/>
                    <Route exact path='/contacts' render={() => <Contacts/>}/>
                    <Route exact path='/request' render={() => <Request/>}/>
                    <Route exact path='/company' render={() => <Company/>}/>
                    <Route exact path='/' render={() => <MainComponent/>}/>
                    <Route path='/:route/:id' render={({match}) => <ItemRequest id={match.params.id} route={match.params.route}/>}/>
                    <Route path='/:route' render={({match}) => {
                        if (match.params.route === 'cloth') {
                            return <Cloth route={match.params.route}/>
                        } else {
                            return <MainItemContainer route={match.params.route}/>
                        }

                    }}/>

                </Switch>
            </Container>
        </MainWrapper>
    );
};

export default MainPage;

const MainWrapper = styled.section`
  flex: 1;
`