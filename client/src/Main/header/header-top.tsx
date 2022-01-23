import React from 'react';
import styled from "styled-components/macro";
import {ReactComponent as Call} from '../../assets/images/call.svg'
import {ReactComponent as Whatsapp} from '../../assets/images/whatsapp.svg'
import {ReactComponent as Mail} from '../../assets/images/mail.svg'

import {Container} from '../../Common/CSS/src';
import {NavLink} from 'react-router-dom';

const HeaderTop = () => {
    return (
        <HeaderTopWrapper>
            <Container>
                <Wrapper>
                    <HeaderLeft>
                        <ItemLeft>
                            <SvgWrapper>
                                <CallIcon/>
                            </SvgWrapper>
                            <PhoneLink href="tel:+7(985)993-44-60">+7(985)993-44-60</PhoneLink>
                        </ItemLeft>
                        <ItemLeft>
                            <SvgWrapper>
                                <WhatsappIcon/>
                            </SvgWrapper>
                            <a href="https://wa.me/79859934460" target='_blank'>Консультация в WhatsApp</a>
                        </ItemLeft>
                        <ItemLeft>
                            <SvgWrapper>
                                <MailIcon/>
                            </SvgWrapper>
                            <a href="mailto:potolokmsk@list.ru">potolokmsk@list.ru</a>
                        </ItemLeft>
                    </HeaderLeft>
                    <HeaderRight>
                        {/*<ItemRight>*/}
                        {/*    <Link to={'/company'}>*/}
                        {/*        <p>О нас</p>*/}
                        {/*    </Link>*/}
                        {/*</ItemRight>*/}
                        <ItemRight>
                            <Link to={'/contacts'}>
                                <p>Контакты</p>
                            </Link>
                        </ItemRight>
                    </HeaderRight>
                </Wrapper>
            </Container>
        </HeaderTopWrapper>
    );
};

export default HeaderTop;

const HeaderTopWrapper = styled.div`
  border-bottom: 1px solid var(--main-border);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLeft = styled.ul`
  display: flex;
`
const HeaderRight = styled.ul`
    display: flex;
  @media (max-width: 450px){
    font-size: 14px;
  }
`
const SvgWrapper = styled.div`
  width: 15px;
 
`
const CallIcon = styled(Call)`
  fill: var(--main-color);
  width: 100%;
  height: 100%;
`

const WhatsappIcon = styled(Whatsapp)`
  fill: var(--main-color);;
  width: 100%;
  height: 100%;
`

const MailIcon = styled(Mail)`
  fill: var(--main-color);
  width: 100%;
  height: 100%;
`
const ItemLeft = styled.li`
  
  padding: 10px 10px 10px;
  display: flex;
  border-right: 1px solid;
  border-color: var(--main-border);
     :last-child {
      border: none;
     }
  a {
    color: var(--second);
    margin-left: 5px;
  }
  
  
  @media (max-width: 900px){
    :nth-child(2){
      display: none;
    }
  }
  
  @media (max-width: 645px){
    :nth-child(3){
      display: none;
    }
    :nth-child(1){
      border-right: none;
    }
  }
`

const ItemRight = styled.li`
  border-bottom: 2px solid transparent;
  transition: 0.3s all ease-in;
   p {
    padding: 10px 0;
   }
  :last-child {
    margin-left: 10px;
    padding-right: 10px;
  }
  :hover {
    border-bottom: 2px solid var(--main-color);
  }
`


const PhoneLink = styled.a`
  color: var(--main-color) !important;
`

const Link = styled(NavLink)`
  color: var(--second);
`
