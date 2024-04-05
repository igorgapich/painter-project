import {Link} from "react-router-dom";

export function Menu(){
    return(
        <>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/biography'}>Biography</Link>
                <Link to={'/painting'}>Painting</Link>
                <Link to={'/paintinglist'}>List Painting</Link>
            </nav>
        </>
    );
}