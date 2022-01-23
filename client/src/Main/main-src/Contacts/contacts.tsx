import React from 'react';
import styled from "styled-components/macro";
import {SectionWrapper, Title } from '../../../Common/CSS/src';

const Contacts = () => {
    return (
        <SectionWrapper>
            <Title>Контактная информация:</Title>
            <ContactsWrapper>
                <li>Телефон:<a href="tel:+7(915)346-00-07">+7(915)346-00-07</a></li>
                <li>Почта:<a href="mailto:paq-diller@yandex.ru">paq-diller@yandex.ru</a></li>
                <li>WhatsApp:<a href="https://wa.me/79153460007" target='_blank'>Консультация в WhatsApp</a></li>
                <li><p>Режим работы: 07:00-19:00, воскресенье выходной</p></li>
            </ContactsWrapper>
        </SectionWrapper>
    );
};

export default Contacts;

const ContactsWrapper = styled.ul`
  li {
    font-size: 20px;
    margin-bottom: 10px;
    a {
      margin-left: 10px;
      color: var(--main-ContactColor);
      :hover {
        color: var(--main-ContactHover);
      }
    }
    @media (max-width: 550px){
      font-size: 16px;
    }
  }
`