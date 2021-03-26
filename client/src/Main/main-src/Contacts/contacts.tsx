import React from 'react';
import styled from "styled-components/macro";
import {SectionWrapper, Title } from '../../../Common/CSS/src';

const Contacts = () => {
    return (
        <SectionWrapper>
            <Title>Контактная информация:</Title>
            <ContactsWrapper>
                <li>Телефон:<a href="tel:+7(999)977-93-19">+7(999)977-93-19</a></li>
                <li>Почта<a href="mailto:flairs13@gmail.com">flairs13@gmail.com</a></li>
                <li>WhatsApp<a href="tel:+7(999)977-93-19">Консультация в WhatsApp</a></li>
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
      color: var(--main-color);
      :hover {
        color: var(--main-hover);
      }
    }
    @media (max-width: 550px){
      font-size: 16px;
    }
  }
`