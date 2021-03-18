import React from 'react';
import styled from "styled-components/macro";
import {Container} from '../../Common/CSS/src';
import {NavLink} from "react-router-dom";


const Footer: React.FC = () => {

    const year = Date()

    return (
        <FooterWrapper>
            <Container>
                <FooterContainer>
                    <CompanyName>© 2021. Фабрика натяжных потолков Master Plan</CompanyName>
                    <OperatingMode>
                        <p>Режим работы: будни 08:00-19:00, суббота 9:00-15:00</p>
                        <a style={{color: 'white', marginTop: '10px', display: 'block'}} href="tel:+7(999)977-93-19">Телефон: +7(999)977-93-19</a>
                    </OperatingMode>
                    <NavList>
                        <NavItem>
                            <Link to={'/delivery'}>
                                <p>Доставка</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'/contacts'}>
                                <p>Контакты</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'/request'}>
                                <p>Отправить запрос</p>
                            </Link>
                        </NavItem>
                    </NavList>
                </FooterContainer>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;


const FooterWrapper = styled.footer`
  background-color: var(--main-color);
  color: white;
  padding: 25px 0;
  font-size: 14px;
  @media (max-width: 500px){
    font-size: 12px;
  }

`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 1125px){
    flex-direction: column;
    align-items: center;
    
    ul {
      margin-bottom: 15px;
      order: 1;
    }
  }
`

const CompanyName = styled.p`
  @media (max-width: 1125px){
    order: 3;
  }
`


const OperatingMode = styled.div`
  a {
    text-align: center;
  }
  @media (max-width: 1125px){
    order: 2;
    margin-bottom: 15px;
  }
`

const NavList = styled.ul`
  display: flex;
  
`


const NavItem = styled.li`
  margin-right: 10px;
  border-bottom: 1px solid transparent;
  :hover {
    border-bottom: 1px solid white;
  }
`

const Link = styled(NavLink)`
  color: white;
`