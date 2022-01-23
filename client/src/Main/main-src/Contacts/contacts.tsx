import React from 'react';
import styled from "styled-components/macro";
import {Phone, Mail, Instagram, Telegram, WhatsApp, AccessTime} from "@material-ui/icons";
import {SectionWrapper, Title } from '../../../Common/CSS/src';

const Contacts = () => {
    return (
        <SectionWrapper>
            <Title>Контактная информация:</Title>
            <ContactsWrapper>
                <li>
                  <a href="tel:+7(985)993-44-60">
                    <SvgWrapper>
                      <Phone/>
                    </SvgWrapper>
                    <p>+7(985)993-44-60</p>
                  </a>
                </li>
                <li>
                  <a href="mailto:potolokmsk@list.ru">
                    <SvgWrapper>
                      <Mail/>
                    </SvgWrapper>
                  <p>potolokmsk@list.ru</p>
                </a>
                </li>
                <li>
                  <a href="https://wa.me/79859934460" target='_blank'>
                    <SvgWrapper>
                      <WhatsApp/>
                    </SvgWrapper>
                    <p>+7(985)993-44-60</p>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/potolok_msk_diler" target='_blank'>
                    <SvgWrapper>
                      <Instagram/>
                    </SvgWrapper>
                    <p>potolok_msk_diler</p>
                  </a>
                </li>
                <li>
                  <a href="tg://resolve?domain=potolok_msk_diler" target='_blank'>
                    <SvgWrapper>
                      <Telegram/>
                    </SvgWrapper>
                    <p>+7(985)993-44-60 potolok_msk_diler</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <SvgWrapper>
                      <AccessTime/>
                    </SvgWrapper>
                    <p style={{color: 'black', cursor: 'default'}}>с 07:00 до 20:00 ежедневно</p>
                  </a>
                </li>
            </ContactsWrapper>
        </SectionWrapper>
    );
};

// +7-985-993-44-60
//
// +7-985-993-44-60
//
// +7-985-993-44-60
//
// potolokmsk@list.ru
//
// potolok_msk_diler
//
// с 07:00 до 20:00 ежедневно


export default Contacts;

const SvgWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const ContactsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    font-size: 20px;
    margin-bottom: 10px;
    width: max-content;
    a {
      margin-right: 10px;
      display: flex;
      align-items: center;
      color: var(--main-ContactColor);
      :hover {
        color: var(--main-ContactHover);
      }
      p {
        margin-left: 5px;
      }
    }
    @media (max-width: 550px){
      font-size: 16px;
    }
  }
`