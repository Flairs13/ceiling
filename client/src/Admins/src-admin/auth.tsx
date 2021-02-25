import TextField from '@material-ui/core/TextField';
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {isAuth} from "../../redux/Admin/src/auth/auth-action";
import {Button} from "@material-ui/core";
import styleds from "styled-components/macro";
import { styled } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const Auth: React.FC = (props) => {
    const [showStatusAuth, setStatusAuth] = useState(false)
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const history = useHistory()


    const login = 'adminpotolki'
    const password = '123qweqwe'

    const dispatch = useDispatch()

    const changeLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(e.target.value)
    }

    const changePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }

    const checkAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (loginValue === login && passwordValue === password) {
            dispatch(isAuth(true))
            history.push(history.location.pathname + '/main/profile')
            setStatusAuth(false)
        } else {
            setStatusAuth(true)
        }
    }

    return (
        <FormWrapper>
            <FormContainer>
                <Form>
                    <Field variant="outlined" label="Логин" value={loginValue} onChange={changeLoginInput} type="text"/>
                    <Field variant="outlined" label="Пароль" value={passwordValue} onChange={changePasswordInput} type="password"/>
                    <Btn onClick={checkAuth} variant="contained" color="primary">
                        Войти
                    </Btn>
                    {showStatusAuth && <Error>Неверный логин или пароль</Error>}
                </Form>
            </FormContainer>

        </FormWrapper>
    );
};

export default Auth;


const Field = styled(TextField)({
    marginBottom: '10px',

})

const FormWrapper = styleds.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const FormContainer = styleds.div`
  background-color: white;
  box-shadow: 0 1px 0 0 #d3d9de,0 0 0 1px #e7e8ec;
  border-radius: 4px;
`

const Form = styleds.div`
    display: flex;
    flex-direction: column;
    padding: 20px 25px;
    width: 400px;
`
const Error = styleds.span`
  margin-top: 10px;
  color: red;
  text-align: center;
`

const Btn = styled(Button)({
    marginTop: '15px',
})

