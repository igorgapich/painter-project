import {useNavigate, useOutletContext} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";

const NewPaint = () => {
    const[paints, setPaints] = useOutletContext();
    const navigate = useNavigate();
    let newPaint={
        id:4,
        title: "",
        year: 0,
        image: ""
    }
    const {register, handleSubmit} = useForm();
    const onSubmit = (newPaint)=> {
        newPaint.id = paints.length+1;
        setPaints([...paints, newPaint]);
        navigate('/paintinglist');
    }
    return (
        <>
            <div className="form-newpaint">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-input">
                        <label> Назва: </label>
                        <input {...register("title")} type="text" name="title" required/>
                    </div>
                    <div className="container-input">
                        <label> Рік: </label>
                        <input {...register("year")} type="number" name="year" required/>
                    </div>
                    <div className="container-input">
                        <label> Зображення картини: </label>
                        <input {...register("image")} type="text" name="image" required/>
                    </div>
                    <div className="containar-button">
                        <input type="submit" value="Додати картину"/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default NewPaint;