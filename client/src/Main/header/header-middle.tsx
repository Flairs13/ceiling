import React from 'react'
import styled from 'styled-components/macro'
import { Container } from '../../Common/CSS/src'
import Logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";

const HeaderMiddle: React.FC = () => {
  return (
    <HeaderMiddleWrapper>
      <Container>
        <Wrapper>
          <HeaderLogo to={'/'}>
            <img src={Logo} alt="Logo" />
          </HeaderLogo>
          <HeaderLinks>
            <Item>
              <label>Отправьте спецификацию:</label>
              <strong>
                <a href="mailto:flairs13@gmail.com">flairs13@gmail.com</a>
              </strong>
            </Item>
            <Item>
              <label>Консультации:</label>
              <strong>
                <a href="tel:+7(999)977-93-19">+7(999)977-93-19</a>
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
  width: 150px;
  img {
    width: 100%;
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
    @media (max-width: 550px) {
      display: none;
    }
  }

  @media (max-width: 550px){
    font-size: 13px;
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
