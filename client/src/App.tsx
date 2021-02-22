import React, {useState} from 'react'
import {getProfile} from "./redux/Catalog/catalog-action";
import {useDispatch, useSelector} from "react-redux";
import {getImgObj} from "./redux/Catalog/catalog-select";
import {uploadImg} from "./api";


function App() {
    const dispatch = useDispatch()
    const obj: any = useSelector(getImgObj)
    const [img,setImg] = useState(null) as any
    const [inputValue,setInputValue]  = useState('')


    const submit = () => {
        uploadImg(img,inputValue)
    }


const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
        setImg(e.target.files[0])
    }

}
    const test = () => {
        dispatch(getProfile())
    }

    const changeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            {obj ? obj.map((i: any) => {
                return (
                    <>
                        <div>{i.name}</div>
                        <div>{i.material}</div>
                        <div style={{width: '250px'}}>
                            <img style={{width: '100%'}} src={i.image} alt="#"/>
                        </div>
                    </>

                )

            }) : "Loading"}
            <button onClick={test}>click</button>

            <img src={img} alt="#"/>
            <form onSubmit={submit}>
                <div>
                    <input onChange={changeInput} type="file" name="file" id="input-files"/>
                    <input value={inputValue} onChange={changeInputText} type="text"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default App;
