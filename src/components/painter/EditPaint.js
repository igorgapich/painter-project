import { useForm } from "react-hook-form";
import {useNavigate, useOutletContext, useParams} from "react-router-dom";

const EditPaint = () => {
    const {id} = useParams();
    const [paints,setPaints] = useOutletContext();
    const paint = paints.find(p => p.id === parseInt(id));
    const navigate = useNavigate();
    let newPaint= {
        id: 4,
        title: "",
        pages: 0
    }
    const {register,handleSubmit}=useForm(paint);
    const onSubmit=(updatePaint)=>{
        updatePaint.id = paint.id
        const updatePaints = paints.map(paint => {
            if(updatePaint.id === paint.id) return updatePaint;
            return paint;
        })
        setPaints(updatePaints);
        console.log(updatePaints);
        navigate('/paintinglist');
    };

    return (
        <>
            <div className="form-newbook">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-input">
                        <label> Id: </label>
                        <input {...register("id")} type="text" name="id" defaultValue={paint.id} disabled/>
                    </div>
                    <div className="container-input">
                        <label> Title: </label>
                        <input {...register("title")} type="text" name="title" defaultValue={paint.title} required/>
                    </div>
                    <div className="container-input">
                        <label> Year: </label>
                        <input {...register("year")} type="number" name="year" defaultValue={paint.year} required/>
                    </div>
                    <div className="container-input">
                        <label> Image: </label>
                        <input {...register("image")} type="text" name="image" defaultValue={paint.image} required/>
                    </div>
                    <div className="containar-button">
                        <input type="submit" value="Update Book"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditPaint;