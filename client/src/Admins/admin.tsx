import React from 'react';
import {useSelector} from "react-redux";
import {getAuth} from "../redux/Admin/src/auth/auth-select";
import Auth from "./src-admin/auth";
import AdminMain from "./src-admin/admin-main";
import { Route } from 'react-router-dom';

const Admin = () => {
    const isAuth = useSelector(getAuth)
    return (
        <>
            {isAuth ? <AdminMain/> : <Auth/> }

        </>
    );
};

export default Admin;



