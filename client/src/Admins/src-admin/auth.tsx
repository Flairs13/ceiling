import TextField from '@material-ui/core/TextField';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {isAuth} from "../../redux/Admin/src/auth/auth-action";
import {Button} from "@material-ui/core";
import styleds from "styled-components/macro";
import {styled} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';


const Auth: React.FC = () => {
    const [showStatusError, setStatusError] = useState(false)
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [timeCount, setTimeCount] = useState(0)
    // const [seconds, setSeconds] = useState(0);
    // const [minuts, setMinuts] = useState(0);
    const [time, setTime] = useState({seconds: 0, minutes: 0})
    const D = new Date()

    const durationTimeMin = 2 * 60 * 1000

    useEffect(() => {
        console.log(localStorage.getItem('time'))
        const log = localStorage.getItem('login')
        const pass = localStorage.getItem('password')
        if (log === login && pass === password) {
            dispatch(isAuth(true))
            history.push(history.location.pathname + '/main/profile')
        }
    }, [])

    const history = useHistory()


    const login = 'admin'
    const password = '123qweqwe'

    const dispatch = useDispatch()

    const changeLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(e.target.value)
    }

    const changePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }

    console.log(timeCount)

    const checkAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (loginValue === login && passwordValue === password) {
            localStorage.setItem('login', login)
            localStorage.setItem('password', password)
            dispatch(isAuth(true))
            history.push(history.location.pathname + '/main/profile')
            setStatusError(false)
        } else {
            setStatusError(true)
        }
        setTimeCount(prevState => prevState + 1)
    }

    const timerCountDown = () => {
        const time = Number(localStorage.getItem('time'))
        let seconds = Math.floor((time / 1000) % 60)
        let minutes = Math.floor((time / (1000 * 60)) % 60)
        setTime({seconds: seconds,minutes: minutes})

        // hours = (hours < 10) ? 0 + hours : hours;
        // minutes = (minutes < 10) ? 0 + minutes : minutes;
        // seconds = (seconds < 10) ? 0 + seconds : seconds;
        return (
            <div>
                <div>ssssss</div>
                <span>{minutes}</span>
                <span>{seconds}</span>
            </div>
        )

    }


    const render = () => {
        if (timeCount > 3) {
            timerCountDown()
            localStorage.setItem('time', `${D.getTime()}`)
            debugger
            return (
                <div>
                    <div>ssssss</div>
                    <span>{time.minutes}</span>
                    <span>{time.seconds}</span>
                </div>
            )
        } else {
            if (Number(localStorage.getItem('time')) + durationTimeMin <= D.getTime()) {
                return (
                    <FormWrapper>
                        <h1>Вход в Админ панель </h1>
                        <FormContainer>
                            <Form>
                                <Field variant="outlined" label="Логин" value={loginValue} onChange={changeLoginInput} type="text"/>
                                <Field variant="outlined" label="Пароль" value={passwordValue} onChange={changePasswordInput}
                                       type="password"/>
                                <Btn onClick={checkAuth} variant="contained" color="primary">
                                    Войти
                                </Btn>
                                {showStatusError && <Error>Неверный логин или пароль</Error>}
                            </Form>
                        </FormContainer>

                    </FormWrapper>
                )
            } else {
                return (
                    timerCountDown()
                )
            }


        }
    }

    return (
        render()
    );
};

export default Auth


const Field = styled(TextField)({
    marginBottom: '10px',

})

const FormWrapper = styleds.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    margin-bottom: 40px;
    font-size: 40px;
  }
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

