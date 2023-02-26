import React from 'react'
import styled from 'styled-components/macro'
import Logo from '../../assets/images/newLogo2023.png'
import { Container } from '../../Common/CSS/src'

import {NavLink} from "react-router-dom";
import { contactsGlobal } from "../../index";

const HeaderMiddle: React.FC = () => {
  return (
    <HeaderMiddleWrapper>
      <Container>
        <Wrapper>
          <HeaderLogo to={'/'}>
            <img src={Logo} alt="logo"/>
          </HeaderLogo>
          <HeaderLinks>
            <Item>
              <label>Отправьте спецификацию:</label>
              <strong>
                <a href={contactsGlobal.mailTo}>{contactsGlobal.mail}</a>
              </strong>
            </Item>
            <Item>
              <label>Консультации:</label>
              <strong>
                <a href={contactsGlobal.phoneSrc}>{contactsGlobal.phone}</a>
              </strong>
            </Item>
          </HeaderLinks>
        </Wrapper>
      </Container>
    </HeaderMiddleWrapper>
  )
}

export default HeaderMiddle

const HeaderMiddleWrapper = styled.div``
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
`

const HeaderLogo = styled(NavLink)`
 width: 250px;
  img {
    width: 100%;
  }
  @media(max-width: 550px){
    width: 150px;
  }
`

const HeaderLinks = styled.ul`
  display: flex;
`
const Item = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  :last-child {
    margin-left: 20px;
    @media (max-width: 685px) {
      display: none;
    }
  }

  @media (max-width: 550px){
    font-size: 12px;
  }

  label {
    color: var(--second);
    margin-bottom: 5px;
  }
  strong {
    a {
      color: black;
    }
  }
`
