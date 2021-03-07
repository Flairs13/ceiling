import React, {useState} from 'react'
import styled from 'styled-components/macro'
import {Container} from '../../Common/CSS/src'
import {NavLink} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import {ReactComponent as Down} from '../../assets/images/down-chevron.svg'
import {ReactComponent as Up} from '../../assets/images/up-chevron.svg'
import GavelIcon from "@material-ui/icons/Gavel";
import PanToolIcon from "@material-ui/icons/PanTool";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import PowerIcon from "@material-ui/icons/Power";
import CategoryIcon from "@material-ui/icons/Category";
import DockIcon from "@material-ui/icons/Dock";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import BuildIcon from "@material-ui/icons/Build";
import StarIcon from "@material-ui/icons/Star";

const HeaderNav: React.FC = () => {
    const [isShowMobileMenu, setShowMobileMenu] = useState(false)
    const [isShowMenu, setShowMenu] = useState(false)


    const arrNav = [
        {name: 'Профили', route: '/profile'},
        {name: 'Вставки', route: '/tape'},
        {name: 'Комплектующие', route: '/accessories'},
        {name: 'Светильники', route: '/light'},
        {name: 'Конструкции', route: '/constructions'},
        {name: 'Ленты и пульты', route: '/led'},
        {name: 'Расходники', route: '/consumables'},
        {name: 'Инструменты', route: '/tools'},
        {name: 'Дополнительное', route: '/additional'},
    ]


    return (
        <HeaderNavWrapper>
            <Container>
                <Wrapper>
                    <NavList>
                        <NavItem
                            onMouseEnter={() => setShowMenu(true)}
                            onMouseLeave={() => setShowMenu(false)}
                        >
                            <Link to={'#'}>
                                <p>Каталог</p>
                            </Link>
                            <DropDownMenu style={isShowMenu ? {opacity: 1} : undefined}>


                                {arrNav.map(i => {
                                    return (
                                        <DropDownItem>
                                            <DropDownLink to={i.route}>{i.name}</DropDownLink>
                                        </DropDownItem>
                                    )
                                })}


                            </DropDownMenu>
                        </NavItem>
                        <NavItem>
                            <Link to={'/dostavka'}>
                                <p>Доставка</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'/contacts'}>
                                <p>Контакты</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'/zapros'}>
                                <p>Отправить запрос</p>
                            </Link>
                        </NavItem>
                    </NavList>

                    <NavListMobile>
                        <IconButton
                            onClick={() => setShowMenu((prevState) => !prevState)}
                            style={{
                                color: 'white',
                                padding: '10px',
                                marginLeft: 'auto',
                                display: 'block',
                                backgroundColor: 'var(--main-color)',
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <DropDownMobileWrapper
                            style={isShowMenu ? {height: 'auto'} : undefined}
                        >
                            <DropDownMobileList>
                                <DropDownMobileItem>
                                    <DropDownMobileLink
                                        style={{display: 'flex', justifyContent: 'space-between'}}
                                        onClick={() => setShowMobileMenu((prevState) => !prevState)}
                                        to={'#'}
                                    >
                                        Каталог
                                        <IconWrapper>
                                            {isShowMobileMenu ? <IconWrapper><UpIcon/></IconWrapper> :
                                                <IconWrapper><DownIcon/></IconWrapper>}
                                        </IconWrapper>
                                    </DropDownMobileLink>
                                    <DropDownMenuMobile
                                        isShowMobileMenu={isShowMobileMenu}
                                        style={isShowMobileMenu ? {height: '30vh'} : undefined}
                                    >

                                        {arrNav.map((i) => {
                                            return (
                                                <DropDownMenuItemMobile onClick={() => setShowMenu(false)}>
                                                    <DropDownMenuLink to={i.route}>
                                                        {i.name}
                                                    </DropDownMenuLink>
                                                </DropDownMenuItemMobile>
                                            )
                                        })}

                                    </DropDownMenuMobile>
                                </DropDownMobileItem>
                                <DropDownMobileItem>
                                    <DropDownMobileLink to={'/'}>Доставка</DropDownMobileLink>
                                </DropDownMobileItem>
                                <DropDownMobileItem>
                                    <DropDownMobileLink to={'/'}>Контакты</DropDownMobileLink>
                                </DropDownMobileItem>
                                <DropDownMobileItem>
                                    <DropDownMobileLink to={'/'}>Отправить запрос</DropDownMobileLink>
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

const Wrapper = styled.div`
  background-color: var(--nav);
`

const NavList = styled.ul`
  display: flex;
  padding: 0 30px;

  @media (max-width: 550px) {
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

  @media (max-width: 550px) {
    display: block;
  }
`

const DropDownMobileWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 15px;
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