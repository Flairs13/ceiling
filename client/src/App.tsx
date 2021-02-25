import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {uploadImg} from "./api";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import styled from "styled-components/macro";
import GlobalStyle from "./globalStyle";

import {Route} from "react-router-dom";
import Main from "./Main/main";
import Admin from "./Admins/admin";
import {getItems} from "./redux/Admin/src/profile/item-select";
import Item from "./Admins/src-admin/item/item";


function App() {
    const arrItem = useSelector(getItems)

//     const submit = (e:any) => {
//         uploadImg(img,inputValue)
//         e.preventDefault()
//
//     }
//
//
// const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files !== null) {
//         setImg(e.target.files[0])
//     }
//
// }
//     const test = () => {
//         dispatch(getProfile())
//     }
//
//     const changeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInputValue(e.target.value)
//     }

    return (
        <>
            <GlobalStyle/>
            <Route path='/admin' render={() => <Admin/>}/>
            <Route exact path={'/'} render={() => <Item type={'profile'}/>}/>
        </>
    );
}

export default App;




