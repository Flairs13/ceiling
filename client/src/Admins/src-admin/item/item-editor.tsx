import React, {useRef} from 'react';
import styled from "styled-components/macro";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {updateItemAction} from '../../../redux/Admin/src/profile/item-action';
import {useDispatch} from "react-redux";

type Props = {
    image: string
    req: string
    _id: string
    getItem: (req: string) => void
}

const ItemEditor: React.FC<Props> = (props) => {
    const srcImg = useRef(props.image)
    const dispatch = useDispatch()
    const exceptions = ['_id', 'image', '__v', 'req', 'getItem']
    const inputsArray = Object.entries({...props})
        .filter((item) => {
                let flag = false
                for (let i = 0; i < exceptions.length; i++) {
                    if (item[0] === exceptions[i]) {
                        flag = false
                        break
                    } else {
                        flag = true
                    }

                }
                return flag
            }
        )

    console.log(inputsArray)
    const submit = (values: any) => {
        dispatch(updateItemAction(values, props.req, props._id))
        dispatch(props.getItem(props.req))
    }


    return (
        <EditorWrapper>
            <Header>Редактировать</Header>
            <Forms>
                <Formik initialValues={Object.fromEntries(inputsArray)} onSubmit={submit}>
                    {({values, setFieldValue, handleChange, handleBlur, dirty}) => (
                        <Form>
                            <ImgWrapper>
                                <img src={srcImg.current} alt="#"/>
                            </ImgWrapper>
                            <FormsItem>
                                <Label>Images</Label>
                                <input id="file" name="file" type="file" onChange={(event: any) => {
                                    setFieldValue("file", event.currentTarget.files[0])
                                    srcImg.current = URL.createObjectURL(event.currentTarget.files[0])

                                }}/>
                            </FormsItem>

                            {inputsArray.map((i, index) => {

                                return (
                                    <FormsItem key={index}>
                                        <Label>{i[0]}</Label>
                                        <Input onChange={handleChange} onBlur={handleBlur} type='text' name={i[0]}/>
                                    </FormsItem>
                                )
                            })}
                            <ButtonWrapper>
                                <Button disabled={!dirty} type="submit">Сохранить</Button>
                            </ButtonWrapper>
                        </Form>
                    )}
                </Formik>
            </Forms>
        </EditorWrapper>
    );
};

export default ItemEditor;


const EditorWrapper = styled.div`
   width: 500px;
`

const Header = styled.div`
    padding: 0 20px;
    border-bottom: 1px solid #e7e8ec;
    display: block;
    height: 54px;
    line-height: 54px;
    font-size: 16px;
    outline: 0;
    color: black;
`


const Forms = styled.section`
  padding: 30px 10px;
`

const ImgWrapper = styled.div`
  width: 180px;
  margin: 0 auto 15px;
  
  img {
    width: 100%;
  }
`

const FormsItem = styled.div`
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: [labels] 30% [controls] 1fr;
  column-gap: 10px;
  align-items: center;
 
`
const Label = styled.label`
  color: #656565;
  justify-self: end;
  grid-column: labels;
`

const Input = styled(Field)`
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #d3d9de;
  color: black;
  font-size: 14px;
  line-height: 16px;
  max-width: 300px;
  height: 25px;
  grid-column: controls;
`

const Error = styled(ErrorMessage)`
  color: red;
  grid-column: controls;
  margin-top: 5px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
