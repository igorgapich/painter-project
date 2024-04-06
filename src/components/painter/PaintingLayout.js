import {Outlet} from "react-router-dom";

const PaintingLayout = () => {
    const paintings =[
        {
            id:1,
            title: "Таємна вечеря",
            year: 1498,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg/525px-Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg"
        },
        {
            id:2,
            title: "Мадонна Літта",
            year: 1491,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Leonardo_da_Vinci_attributed_-_Madonna_Litta.jpg/480px-Leonardo_da_Vinci_attributed_-_Madonna_Litta.jpg"
        },
        {
            id:3,
            title: "Леда і лебідь",
            year: 1508,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Leda_col_Signo_%28Copy_Of_Leonardo_da_Vinci%29_September_2015-1.jpg/390px-Leda_col_Signo_%28Copy_Of_Leonardo_da_Vinci%29_September_2015-1.jpg"
        },
        {
            id:4,
            title: "Автопортрет (Леонардо)",
            year: 1512,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Possible_Self-Portrait_of_Leonardo_da_Vinci.jpg"
        }
    ];
    return(
        <>
            <Outlet context={paintings}/>
        </>
    );
}

export default PaintingLayout;