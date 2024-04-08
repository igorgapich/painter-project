import {Link, useOutletContext} from "react-router-dom";

const PaintingList = () => {
    const painting = useOutletContext();
    console.log(painting);
    return(
        <>
            <h1>Колекція Картин</h1>
            <div className="list-container">
            <ul>
                {painting.map((p)=>(
                    <li key={p.id}>
                        <Link to={`/paintinglist/${p.id}`}>{p.title} ({p.year})</Link>
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}
export default PaintingList;