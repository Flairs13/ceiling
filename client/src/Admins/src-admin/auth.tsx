import TextField from '@material-ui/core/TextField';
import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isAuth, isError} from "../../redux/common/src/auth/auth-action";
import {Button} from "@material-ui/core";
import styleds from "styled-components/macro";
import {styled} from '@material-ui/core/styles';
import {Redirect, useHistory} from 'react-router-dom';
import {getIsError, getIsErrorDuration, getLogin, getPassword} from "../../redux/common/src/auth/auth-select";



const Auth: React.FC = () => {
    const D = new Date()
    const errorStatus = useSelector(getIsError)
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [timeCount, setTimeCount] = useState(0)
    const dispatch = useDispatch()
    const history = useHistory()
    const login = useSelector(getLogin)
    const password = useSelector(getPassword)
    const log = localStorage.getItem('login')
    const pass = localStorage.getItem('password')

    const durationTimeMin = useSelector(getIsErrorDuration)

    const timeDownSeconds = Math.floor(((Number(localStorage.getItem('time')) + durationTimeMin - D.getTime()) / 1000))


    useEffect(() => {
        if (log === login && pass === password) {
            dispatch(isAuth(true))
        }
    }, [])


    if (log === login && pass === password) return <Redirect to={'/admin/main/profile'}/>



    const changeLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(e.target.value)
    }

    const changePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }


    const checkTimeCount = () => {
        dispatch(isError(true))
        if (timeCount >= 2) {
            localStorage.setItem('time', `${D.getTime()}`)
            setTimeCount(0)
        } else {
            setTimeCount(prevState => prevState + 1)
        }
    }

    const checkAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (loginValue === login && passwordValue === password) {
            localStorage.setItem('login', login)
            localStorage.setItem('password', password)
            dispatch(isAuth(true))
            history.push(history.location.pathname + '/main/profile')
        }
        checkTimeCount()


    }
    const render = () => {
        const Dates = new Date()

        if (Number(localStorage.getItem('time')) + durationTimeMin <= Dates.getTime()) {
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
                            {errorStatus && <Error>Неверный логин или пароль</Error>}
                        </Form>
                    </FormContainer>

                </FormWrapper>
            )
        } else {
           dispatch(isError(true))
            return <TimeDown  time={timeDownSeconds}/>
        }


    }


    return (
        render()
    );
};

export default Auth


type TimeDownProps = {
    time: number
}
const TimeDown: React.FC<TimeDownProps> = (props) => {
    const [timeSeconds, setTime] = useState(props.time)
    const dispatch = useDispatch()
    useEffect(() => {
        if (timeSeconds < 1) {
            localStorage.clear()
            dispatch(isError(false))
        } else {
            setTimeout(() => {
                setTime(prevState => prevState - 1)
            }, 1000)
        }

    }, [timeSeconds])

    return (
        <ErrorDuration>
            <h1>Дружище покури пока :)</h1>
            <span>{timeSeconds} секунд</span>
            <p style={{marginTop:'10px'}}>может пароль вспомнишь))</p>
        </ErrorDuration>
    );
};


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

const ErrorDuration = styleds.section`
  color: red;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: black;
    display: block;
    font-size: 60px;
    @media (max-width: 550px) {
        font-size:20px
    }
  }
   @media (max-width: 550px) {
        font-size:13px
    }
`

const Btn = styled(Button)({
    marginTop: '15px',
})

