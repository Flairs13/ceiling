import React, {useRef, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import InputMask from 'react-input-mask';
import styled from "styled-components/macro";
import ReCAPTCHA from "react-google-recaptcha";
import * as yup from "yup";
import Modal from "../../../Common/Modal";


const Request = () => {

    const captcha = useRef<any>()
    const [isShowErrorCaptcha, setShowErrorCaptcha] = useState(false)
    const [isShowMoadl, setShowModal] = useState(true)

    const validationSchema = yup.object().shape({
        name: yup.string().required('Обязательное поле'),
        mail: yup.string().email('Введите корректный email'),
        // checkbox: yup.boolean().required('Обязательное поле'),

    });

    const changeCaptcha = (values: any) => {
        if (captcha.current.getValue()){
            setShowErrorCaptcha(false)
        }
    }

    const submit =  (values: any, {resetForm}: any) => {
       if (captcha.current.getValue()) {
           console.log('запрос пошел')
           setShowModal(true)
           resetForm({})
       } else {
           setShowErrorCaptcha(true)
       }


    }

    return (
        <RequestWrapper>
            <Formik initialValues={{name: '', phone: '', personData: false, mail: '',file: '', textarea: ''}} validationSchema={validationSchema} onSubmit={submit}>
                {({values, handleChange,handleSubmit}) => (
                    <Forms onSubmit={handleSubmit}>
                        <InputsWrapper>
                            <FormItem>
                                ФИО:
                                <Input value={values.name} onChange={handleChange} placeholder='Иванов Иван Иванович' name='name' type="name"/>
                                <Error name={'name'} component={'span'}/>
                            </FormItem>
                            <FormItem>
                                Телефон:
                                <PhoneInput value={values.phone}  mask="+7(999)999-99-99" type="phone" name='phone' onChange={handleChange} placeholder='+7 (000) 000-000'  required />
                            </FormItem>
                            <FormItem>
                                Email:
                                <Input value={values.mail}  onChange={handleChange} placeholder='some@mail.ru' name='mail' type="email"/>
                                <Error name='mail' component='span'/>
                            </FormItem>
                        </InputsWrapper>
                        <TextareaWrapper>
                            <FormItem>
                                Комментарий к заказу:
                                <Textarea value={values.textarea} name='textarea'  onChange={handleChange}/>
                            </FormItem>
                        </TextareaWrapper>
                        <FileWrapper>
                            <FormItem>
                                Спецификация или результаты замеров:
                                <File type='file' name='file'/>
                            </FormItem>
                        </FileWrapper>
                        <Hr/>
                        <CheckBoxWrapper>
                            <CheckBox  type='checkbox' required name='personData'/>
                            Даю согласие на обработку персональных данных:
                        </CheckBoxWrapper>
                        <CaptchaWrapper>
                            <ReCAPTCHA  onChange={changeCaptcha} ref={captcha} sitekey="6LfCQIAaAAAAABrnGxSZqttwbELXkmgcFJWKwhap"/>
                            {isShowErrorCaptcha && <span style={{color: 'red'}}>Подтвердите что вы не робот</span>}
                        </CaptchaWrapper>
                        <Hr/>
                        <ButtonWrapper>
                            <Button type="submit">Отправить</Button>
                        </ButtonWrapper>
                    </Forms>
                )}
            </Formik>
            {isShowMoadl && <Modal closeModal={setShowModal} padding={'0'}>
                {<RequestSuccess>
                    <h1>Благодарим за запрос!</h1>
                    <p>Мы свяжемся с Вами в ближайшее время для уточнения деталей.</p>
                </RequestSuccess>}
            </Modal>}
        </RequestWrapper>
    );
};

export default Request


const Hr = styled.hr`
  background: rgba(0, 0, 0, 0.06);
  border: 0;
  height: 1px;
  margin: 22px 0;
`

const RequestWrapper = styled.section`

`

const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;

`

const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  padding: 10px;
`

const PhoneInput = styled(InputMask)`
  width: 100%;
  margin-top: 10px;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  padding: 10px;
`



const Textarea = styled.textarea`
  resize: none;
  height: 200px;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin-top: 10px;
`

const Forms = styled(Form)`
  margin-top: 20px;
`

const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
`

const TextareaWrapper = styled.div`
    margin-top: 20px;
`

const FileWrapper = styled.div`
  margin-top: 30px;
`
const File = styled.input`
 margin-top: 10px;
`

const CheckBoxWrapper = styled.div`
  margin-top: 20px;
`

const CheckBox = styled(Field)`
  margin-right: 20px;
`

const CaptchaWrapper = styled.div`
  margin-top: 20px;
`


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`

export const Button = styled.button`
    padding: 7px 16px 8px;
    margin: 0;
    cursor: pointer;
    text-align: center;
    background-color: #5181b8;
    border: 0;
    border-radius: 4px;
    color: #fff;
    &:hover {
    opacity: 0.88;
    }
    &:active {
    background-color: #4a76a8;
    padding-top: 8px;
    padding-bottom: 7px;
    }
    &:disabled{
    opacity: 0.5;
    }
`

const Error = styled(ErrorMessage)`
  color: red;
  margin-top: 10px;
`

const RequestSuccess = styled.div`
  text-align: center;
  padding: 50px;
  h1 {
    font-size: 25px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 500px){
    padding: 40px 20px;
  }
`