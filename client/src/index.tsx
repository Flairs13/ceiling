import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

export const contactsGlobal = {
    phone: '+7(915)346-00-07',
    phoneSrc:'tel:+7(915)346-00-07',
    phoneWhatsSrc: 'https://wa.me/79153460007',
    instagram: 'https://instagram.com/potolok_msk_diler',
    tg: 'tg://resolve?domain=potolok_msk_diler',
    mail: 'potolokmsk@list.ru',
    mailTo: "mailto:potolokmsk@list.ru",

}

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);


reportWebVitals();
