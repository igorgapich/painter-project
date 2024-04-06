import {useOutletContext, useParams} from "react-router-dom";

const Paint =()=>{
    const {id} = useParams();
    const painting = useOutletContext();
    const paint = painting.find(p => p.id === parseInt(id));
    console.log("search",paint);
    if(paint===undefined){
        return(
            <p> Not find paint by id => {id}</p>
        );
    }
    else {
        return (
            <>
                <div className="card-paint">
                    <h4>Назва картини: {paint.title}</h4>
                    <h4>Рік: {paint.year}</h4>
                    <img src={paint.image} alt="Фото"></img>
                </div>
            </>
        );
    }
}
export default Paint;