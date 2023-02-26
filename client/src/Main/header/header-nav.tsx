import React, {useEffect, useRef, useState} from 'react'
import styled, {css} from 'styled-components/macro'
import {Container} from '../../Common/CSS/src'
import {NavLink} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import {ReactComponent as Down} from '../../assets/images/down-chevron.svg'
import {ReactComponent as Up} from '../../assets/images/up-chevron.svg'
import {ReactComponent as Call} from "../../assets/images/call.svg";
import {ReactComponent as Whatsapp} from '../../assets/images/whatsapp.svg'
import Logo from "../../assets/images/newLogo2023.png";
import {contactsGlobal} from "../../index";


const HeaderNav: React.FC = () => {
    const [isShowMobileMenu, setShowMobileMenu] = useState(false)
    const [isShowMenu, setShowMenu] = useState(false)
    const [isMenuFixed, setMenuFixed] = useState(false)
    const refItem = useRef<HTMLLIElement>(null)

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction)
    }, [])

    const scrollFunction = () => {
        let scrollY = window.pageYOffset;
        if (scrollY >= 110) {
            setMenuFixed(true)
        } else if (scrollY <= 50) {
            setMenuFixed(false)
        }
    }

    const arrNav = [
        {name: 'Полотна', route: '/cloth'},
        {name: 'Профили', route: '/profile'},
        {name: 'Kraab-systems', route: '/profile-kraab'},
        {name: 'Flexy', route: '/profile-flexy'},
        {name: 'Комплектующие', route: '/accessories'},
        {name: 'Светодиодная лента', route: '/led'},
        {name: 'Освещение', route: '/light'},
        {name: 'Вставки', route: '/tape'},
        {name: 'Расходный материал', route: '/consumables'},
        {name: 'Инструмент', route: '/tools'},
    ]


    return (
        <HeaderNavWrapper>
            <Container>
                {isMenuFixed && <div style={{height: '59px'}}></div>}
                <Wrapper isMenuFixed={isMenuFixed}>
                    <NavList>
                        {isMenuFixed &&
                        <FixedLogo>
                            <NavLink to={'/'}>
                                <img src={Logo} alt="Logo"/>
                            </NavLink>
                        </FixedLogo>
                        }
                        <NavItem onMouseLeave={() => setShowMenu(false)} ref={refItem}>
                            <Link onMouseEnter={() => setShowMenu(true)}
                                  to={'#'}>
                                <p>Продукция</p>
                            </Link>
                            <DropDownMenu style={isShowMenu ? {opacity: 1} : {pointerEvents: 'none'}}>


                                {arrNav.map(i => {
                                    return (
                                        <DropDownItem key={i.name}>
                                            <DropDownLink to={i.route}>{i.name}</DropDownLink>
                                        </DropDownItem>
                                    )
                                })}


                            </DropDownMenu>
                        </NavItem>
                        <NavItem>
                            <Link to={'/company'}>
                                <p>О нас</p>
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
                        {isMenuFixed && <Contacts>
                            <li>
                                <SvgWrapper>
                                    <CallIcon/>
                                </SvgWrapper>
                                <PhoneLink href={contactsGlobal.phoneSrc}>{contactsGlobal.phone}</PhoneLink>
                            </li>
                            <li>
                                <SvgWrapper>
                                    <WhatsappIcon/>
                                </SvgWrapper>
                                <PhoneLink href={contactsGlobal.phoneWhatsSrc} target='_blank'>Консультация в WhatsApp</PhoneLink>
                            </li>
                        </Contacts>}
                    </NavList>

                    <NavListMobile>
                        {isMenuFixed &&
                        <HeaderLogo>
                            <img src={Logo} alt="Logo"/>
                        </HeaderLogo>
                        }
                        <IconButton
                            onClick={() => setShowMenu((prevState) => !prevState)}
                            style={{
                                color: 'white',
                                padding: '15px',
                                marginLeft: 'auto',
                                display: 'block',
                                backgroundColor: 'var(--main-color)',
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <DropDownMobileWrapper style={isShowMenu ? {height: 'auto'} : undefined}>
                            <DropDownMobileList>
                                <DropDownMobileItem>
                                    <DropDownMobileLink
                                        style={{display: 'flex', justifyContent: 'space-between'}}
                                        onClick={() => setShowMobileMenu((prevState) => !prevState)}
                                        to={'#'}
                                    >
                                        Продукция
                                        <IconWrapper>
                                            {isShowMobileMenu ? <IconWrapper><UpIcon/></IconWrapper> :
                                                <IconWrapper><DownIcon/></IconWrapper>}
                                        </IconWrapper>
                                    </DropDownMobileLink>
                                    <DropDownMenuMobile
                                        isShowMobileMenu={isShowMobileMenu}
                                        style={isShowMobileMenu ? {height: '310px'} : undefined}
                                    >

                                        {arrNav.map((i) => {
                                            return (
                                                <DropDownMenuItemMobile key={i.name} onClick={() => setShowMenu(false)}>
                                                    <DropDownMenuLink to={i.route}>
                                                        {i.name}
                                                    </DropDownMenuLink>
                                                </DropDownMenuItemMobile>
                                            )
                                        })}

                                    </DropDownMenuMobile>
                                </DropDownMobileItem>
                                <DropDownMobileItem>
                                    <DropDownMobileLink onClick={() => setShowMenu(false)}
                                                        to={'/company'}>О нас</DropDownMobileLink>
                                </DropDownMobileItem>
                                <DropDownMobileItem>
                                    <DropDownMobileLink onClick={() => setShowMenu(false)}
                                                        to={'/contacts'}>Контакты</DropDownMobileLink>
                                </DropDownMobileItem>
                                <DropDownMobileItem>
                                    <DropDownMobileLink onClick={() => setShowMenu(false)} to={'/request'}>Отправить
                                        запрос</DropDownMobileLink>
                                </DropDownMobileItem>
                            </DropDownMobileList>
                        </DropDownMobileWrapper>
                    </NavListMobile>
                </Wrapper>
            </Container>
        </HeaderNavWrapper>
    )
}

export default HeaderNav

const HeaderNavWrapper = styled.nav``


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

const PhoneLink = styled.a`
  color: #444 !important;
  margin-left: 5px;
`

const Contacts = styled.ul`
  display: flex;
  padding: 20px 0;
  margin-left: auto;
  @media (max-width: 1200px) {
    display: none;
  }

  li {
    display: flex;
    align-items: center;
    margin-right: 15px;

    :last-child {
      margin-right: 0;
    }

    :hover {
      opacity: 0.6;
    }
  }
`

const HeaderLogo = styled.div`
  width: 150px;

  img {
    width: 100%;
  }
`

const FixedLogo = styled.div`
  margin: auto 30px auto 0;

  img {
    width: 150px;
  }
`


const Wrapper = styled.div<{ isMenuFixed: boolean }>`
  background-color: var(--nav);
  ${props =>
          props.isMenuFixed &&
          css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 10px;
            z-index: 999999;
          `};

`

const NavList = styled.ul`
  display: flex;
  padding: 0 30px;

  @media (max-width: 730px) {
    display: none;
  }
`

const NavItem = styled.li`
  position: relative;
  margin-right: 30px;
  font-weight: bold;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid var(--main-color);
  }

  :first-child {
    border: none;
  }
  
`

const Link = styled(NavLink)`
  color: #444;

  p {
    padding: 20px 0;
    white-space: nowrap;

    :hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`

const DropDownLink = styled(NavLink)`
  border-bottom: 1px solid #f7f7f7;
  color: #777;
  font-weight: 400;
  padding: 6px 18px 6px 18px;
  position: relative;
  text-transform: none;
  letter-spacing: -0.5px;
  display: block;
  width: 100%;
`
const DropDownMenu = styled.ul`
  opacity: 0;
  transition: opacity 0.3s ease-in;
  background-color: white;
  position: absolute;
  top: 100%;
  left: -30px;
  z-index: 9999;
  box-shadow: 0 1px 0 0 #d3d9de, 0 0 0 1px #e7e8ec;
`

const DropDownItem = styled.li`
  white-space: nowrap;
  font-weight: normal;
  border-bottom: 1px solid var(--main-border);

  :hover {
    background-color: #f8f9fa;
  }
`

// MOBILE

const NavListMobile = styled.div`
  display: none;
  padding: 5px 5px;
  position: relative;

  @media (max-width: 730px) {
    display: flex;
    align-items: center;

  }
`

const DropDownMobileWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-in;
  background-color: white;
`

const DropDownMobileList = styled.ul``

const DropDownMobileItem = styled.li``

const DropDownMobileLink = styled(NavLink)`
  border-bottom: 1px solid var(--main-border);
  color: var(--main-color);
  font-weight: 500;
  padding: 6px 18px 6px 18px;
  position: relative;
  text-transform: none;
  letter-spacing: -0.5px;
  display: block;
  width: 100%;
  transition: all 0.3s ease-in;

  :hover {
    border-bottom: 1px solid var(--main-color);
    color: var(--main-hover);
  }
`
const DropDownMenuMobile = styled.ul<any>`
  height: 0;
  transition: height 0.3s ease-in;
  overflow: hidden;
  margin-top: ${(props) => (props.isShowMobileMenu ? '10px' : undefined)};
`
const DropDownMenuItemMobile = styled.li`
  :hover {
    background-color: #f8f9fa;
  }
`

const DropDownMenuLink = styled(NavLink)`
  border-bottom: 1px solid var(--main-border);
  color: #777;
  font-weight: 400;
  display: block;
  width: 100%;
  padding: 6px 18px 6px 35px;
`

const IconWrapper = styled.div`
  width: 10px;
`

const DownIcon = styled(Down)`
  fill: var(--main-color);
  width: 100%;
  height: 100%;
`
const UpIcon = styled(Up)`
  fill: var(--main-color);
  width: 100%;
  height: 100%;

`