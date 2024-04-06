import {Link} from "react-router-dom";

export function Menu(){
    return(
        <>
            <nav>
                <Link to={'/'}>Головна</Link>
                <Link to={'/biography'}>Біографія</Link>
                <Link to={'/painting'}>Найвідоміша картина</Link>
                <Link to={'/paintinglist'}>Колекція картин</Link>
            </nav>
        </>
    );
}