import React, {useRef, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import InputMask from 'react-input-mask';
import styled from "styled-components/macro";
import ReCAPTCHA from "react-google-recaptcha";
import * as yup from "yup";
import Modal from "../../../Common/Modal";
import Dropzone from 'react-dropzone';
import {uploadMail} from "../../../api";
import {CircularProgress} from "@material-ui/core";
import {SectionWrapper, Title } from '../../../Common/CSS/src';


const Request = () => {

    const captcha = useRef<any>()
    const [update,setUpdate] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorModal, setErrorModal] = useState(false)
    const [isShowErrorCaptcha, setShowErrorCaptcha] = useState(false)
    const [isShowModal, setShowModal] = useState(false)

    const validationSchema = yup.object().shape({
        name: yup.string().required('Обязательное поле'),
        mail: yup.string().email('Введите корректный email'),
    });


    const changeCaptcha = () => {
        if (captcha.current.getValue()) {
            setShowErrorCaptcha(false)
        }
    }

    interface FormikValues {
        name: string,
        phone: string,
        personData: boolean,
        mail: string,
        files: never[],
        textarea: string
    }
    const submit = async (values: FormikValues, {resetForm}:any) => {
        if (captcha.current.getValue()) {
            setLoading(true)
           const {response,error} = await uploadMail(values)
            if (response){
                setLoading(false)
                setShowModal(true)
            } else if (error){
                setLoading(false)
                setErrorModal(true)
            }
            resetForm({})
        } else {
            setShowErrorCaptcha(true)
        }


    }



    return (
        <SectionWrapper>
            <Title>Отправить Запрос</Title>
            <Formik initialValues={{name: '', phone: '', personData: false, mail: '', files: [], textarea: ''}}
                    validationSchema={validationSchema} onSubmit={submit}>
                {({values, handleChange,setFieldValue}) => (
                    <Forms>
                        <InputsWrapper>
                            <FormItem>
                                ФИО:
                                <Input value={values.name} onChange={handleChange} placeholder='Иванов Иван Иванович' name='name'
                                       type="name"/>
                                <Error name={'name'} component={'span'}/>
                            </FormItem>
                            <FormItem>
                                Телефон:
                                <PhoneInput value={values.phone} mask="+7(999)999-99-99" type="phone" name='phone'
                                            onChange={handleChange} placeholder='+7 (000) 000-000' required/>
                            </FormItem>
                            <FormItem>
                                Email:
                                <Input value={values.mail} onChange={handleChange} placeholder='some@mail.ru' name='mail'
                                       type="email"/>
                                <Error name='mail' component='span'/>
                            </FormItem>
                        </InputsWrapper>
                        <TextareaWrapper>
                            <FormItem>
                                Комментарий к заказу:
                                <Textarea value={values.textarea} name='textarea' onChange={handleChange}/>
                            </FormItem>
                        </TextareaWrapper>
                        <FileWrapper>
                            <FormItem>Спецификация или результаты замеров:</FormItem>
                                <Dropzone onDrop={(acceptedFiles: any) => setFieldValue('files', values.files.concat(acceptedFiles))}>
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                            <div style={{
                                                border: '1px dashed #ced4da',
                                                padding: '20px',
                                                textAlign: 'center',
                                                marginTop: '15px'
                                            }} {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p>Кликните или перенесите файлы</p>
                                            </div>
                                            {values.files.length !== 0 ? <i style={{ color: 'gray', display: 'block',textAlign: "center", marginTop: '10px'}}>Кликните на файл чтобы удалить</i> : null}
                                            <UploadImgList>
                                                {values.files.map((fileWrapper, index) => {
                                                    return (
                                                        <ImgWrapper onClick={() => {
                                                            values.files.splice(index,1)
                                                            setUpdate(prevState => !prevState)
                                                        }} key={index}>
                                                            <img src={URL.createObjectURL(fileWrapper)} alt="#"/>
                                                        </ImgWrapper>
                                                    )
                                                })}
                                            </UploadImgList>
                                        </section>
                                    )}
                                </Dropzone>
                        </FileWrapper>
                        <Hr/>
                        <CheckBoxWrapper>
                            <CheckBox type='checkbox' required name='personData'/>
                            Даю согласие на обработку персональных данных:
                        </CheckBoxWrapper>
                        <CaptchaWrapper>
                            <ReCAPTCHA onChange={changeCaptcha} ref={captcha} sitekey="6LfCQIAaAAAAABrnGxSZqttwbELXkmgcFJWKwhap"/>
                            {isShowErrorCaptcha && <span style={{color: 'red'}}>Подтвердите что вы не робот</span>}
                        </CaptchaWrapper>
                        <Hr/>
                        <ButtonWrapper>
                            <Button type="submit">Отправить</Button>
                        </ButtonWrapper>
                    </Forms>
                )}
            </Formik>
            {
                isShowModal && <Modal closeModal={setShowModal} padding={'0'}>
                {<RequestSuccess>
                    <h1>Благодарим за запрос!</h1>
                    <p>Мы свяжемся с Вами в ближайшее время для уточнения деталей.</p>
                </RequestSuccess>}
            </Modal>
            }
            {
                errorModal && <Modal closeModal={setErrorModal} padding={'0'}>
                    {<RequestSuccess>
                        <h1>Извините но сообщение не отправилось!</h1>
                        <p>Попробуйте снова или позвоните нам, спасибо за понимание.</p>
                    </RequestSuccess>}
                </Modal>
            }
            {
                loading && <LoadingWrapper>
                        <CircularProgress style={{width: '200px', height: '200px'}}/>
                    </LoadingWrapper>

            }

        </SectionWrapper>
    );
}

export default Request



const Hr = styled.hr`
  background: rgba(0, 0, 0, 0.06);
  border: 0;
  height: 1px;
  margin: 22px 0;
`


const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;

`

const Input = styled(Field)`
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

const TextareaWrapper = styled.div`
  margin-top: 20px;
`

const FileWrapper = styled.div`
  margin-top: 30px;
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

  &:disabled {
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

  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`

const ImgWrapper = styled.li`
  margin-right: 10px;
  width: 150px;
  height: 120px;
  :hover {
    opacity: 0.6
  }
 
  img {
    width: 100%;
    height: 100%;
    
  }

  @media (max-width: 738px) {
    width: 90px;
    height: 90px;
  }
`

const UploadImgList = styled.ul`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 520px) {
    justify-content: center;
  }
`

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
  height: 100vh;
  width: 100%;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;

`