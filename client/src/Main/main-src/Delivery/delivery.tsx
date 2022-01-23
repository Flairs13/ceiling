import React from 'react';
import {SectionWrapper, Title} from "../../../Common/CSS/src";
import styled from "styled-components/macro";
import LogoBaikal from '../../../assets/images/logo-baikal.png'
import LogoCdek from '../../../assets/images/logo-cdek.png'
import LogoJeldor from '../../../assets/images/logo-jeldor.png'

const Delivery = () => {
    return (
        <SectionWrapper>
            <Title>Доставка:</Title>
            <DeliveryWrapper>
                {/*<p>Фабрика натяжных потолков Price and Quality работает на рынке натяжных потолков с 2016 года. Мы предлагаем широкий*/}
                {/*    ассортимент*/}
                {/*    потолочных пленок и комплектующих известных производителей.</p>*/}
                {/*<p>Вся продукция имеет соответствующие сертификаты. Мы работаем всю неделю, без перерывов и выходных.</p>*/}
                {/*<p>Доставку осуществляем по Москве, всем регионам России и ближнему зарубежью.</p>*/}
                <p><strong>Доставку осуществляем по Москве и Московской области</strong></p>
                <p>Для постоянных клиентов, а также для заказов стоимостью свыше 20,000р. – доставка бесплатная.</p>
                {/*<p><strong>В регионы продукция доставляется транспортными компаниями:</strong></p>*/}
                {/*<DeliveryCompany>*/}
                {/*    <DeliveryCompanyList>*/}
                {/*        <li>*/}
                {/*            <a href="https://www.baikalsr.ru/" target='_blank'>*/}
                {/*                <img src={LogoBaikal} alt="baikal"/>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="https://www.cdek.ru/ru/" target='_blank'>*/}
                {/*                <img src={LogoCdek} alt="cdek"/>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="https://www.jde.ru/" target='_blank'>*/}
                {/*                <img src={LogoJeldor} alt="jeldor"/>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    </DeliveryCompanyList>*/}
                {/*</DeliveryCompany>*/}
            </DeliveryWrapper>
        </SectionWrapper>
    );
};

export default Delivery;

const DeliveryWrapper = styled.div`
  p {
    color: #777;
    line-height: 26px;
    margin: 0 0 20px;
  }
`

const DeliveryCompany = styled.div`
  margin-top: 35px;
`
const DeliveryCompanyList = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    width: 250px;

    a {
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 550px){
    flex-direction: column;
    justify-content: center;
    li {
      margin-bottom: 15px;
      width: 100%;
    }
  }
`