import {Link, useNavigate, useOutletContext} from "react-router-dom";

const PaintingList = () => {
    const [paints, setPaints] = useOutletContext();
    const navigate = useNavigate();
    const removePaintById = (id) =>{
        setPaints(paints => paints.filter(paint => paint.id !== id));
    }
    return(
        <>
            <br/>
            <div className="container-newpaint"><Link to={`/paintinglist/newpaint`}>Додати нову картину</Link></div>
            <br/>
            <hr/>

            <h1>Колекція Картин</h1>
            <div className="list-container">
                <ul>
                    {paints.map((p) => (
                        <li key={p.id}>
                            <Link to={`/paintinglist/${p.id}`}>{p.title} ({p.year})</Link>
                            <button onClick={() => navigate(`edit/${p.id}`)}>Редагувати</button>
                            <button onClick={() => removePaintById(p.id)}>Вилучити</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default PaintingList;