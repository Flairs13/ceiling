import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Container } from '../../Common/CSS/src'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as Down } from '../../assets/images/down-chevron.svg'

const HeaderNav: React.FC = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false)
  const [isShowMenu, setShowMenu] = useState(false)

  return (
    <HeaderNavWrapper>
      <Container>
        <Wrapper>
          <NavList>
            <NavItem
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <Link to={'/catalog'}>
                <p>Каталог</p>
              </Link>
              <DropDownMenu style={isShowMenu ? { opacity: 1 } : undefined}>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>Полотна</DropDownLink>
                </DropDownItem>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>
                    <span>Профили</span>
                  </DropDownLink>
                </DropDownItem>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>
                    <span>Вставки</span>
                  </DropDownLink>
                </DropDownItem>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>
                    <span>Комплектующие</span>
                  </DropDownLink>
                </DropDownItem>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>
                    <span>Расходные Материалы</span>
                  </DropDownLink>
                </DropDownItem>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>
                    <span>Конструкции</span>
                  </DropDownLink>
                </DropDownItem>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>
                    <span>Светильники-лампы</span>
                  </DropDownLink>
                </DropDownItem>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>
                    <span>Ленты-пульты</span>
                  </DropDownLink>
                </DropDownItem>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>
                    <span>Дополнительное</span>
                  </DropDownLink>
                </DropDownItem>
                <DropDownItem>
                  <DropDownLink to={'/polotna'}>
                    <span>Инструменты</span>
                  </DropDownLink>
                </DropDownItem>
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
              <MenuIcon />
            </IconButton>
            <DropDownMobileWrapper
              style={isShowMenu ? { height: '60vh' } : undefined}
            >
              <DropDownMobileList>
                <DropDownMobileItem>
                  <DropDownMobileLink
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    onClick={() => setShowMobileMenu((prevState) => !prevState)}
                    to={'/'}
                  >
                    Каталог
                    <IconWrapper>
                      <DownIcon />
                    </IconWrapper>
                  </DropDownMobileLink>
                  <DropDownMenuMobile
                    isShowMobileMenu={isShowMobileMenu}
                    style={isShowMobileMenu ? { height: '40vh' } : undefined}
                  >
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Полотна
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Профили
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Вставки
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Комплектующие
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Расходные материалы
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Конструкции
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Светильники лампы
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Ленты и пульты
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Дополнительное
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                    <DropDownMenuItemMobile>
                      <DropDownMenuLink to={'/polotna'}>
                        Инструменты
                      </DropDownMenuLink>
                    </DropDownMenuItemMobile>
                  </DropDownMenuMobile>
                </DropDownMobileItem>
                <DropDownMobileItem>
                  <DropDownMobileLink to={'/'}>Доставка</DropDownMobileLink>
                </DropDownMobileItem>
                <DropDownMobileItem>
                  <DropDownMobileLink to={'/'}>Контакты</DropDownMobileLink>
                </DropDownMobileItem>
                <DropDownMobileItem>
                  <DropDownMobileLink to={'/'}>
                    Отправить запрос
                  </DropDownMobileLink>
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
  padding: 0 30px;
`

const NavList = styled.ul`
  display: flex;

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
  position: absolute;
  top: 100%;
  left: -30px;
  z-index: 999;
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
  padding: 5px 0;
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
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-in;
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
