
import Banner from "./Banner/Banner";

import Categorias from "./Categorias/Categorias";
import data from "data/db.json";

const {videos } = data;

function Home(){    
    //Lista de categorias
    const categorias =[
        {
            titulo:"front-end",
            colorCategoria:"#6BD1FF"
        },
        {
            titulo:"back-end",
            colorCategoria:"#00C86F"
        },
        {
            titulo:"innovacion y gestion",
            colorCategoria:"#FFBA05"
        }
    ];

    return(
        <>            
            <Banner color="#001233"/>
            {
                categorias.map((categoria)=><Categorias datos={categoria} key={categoria.titulo} videos={videos.filter(video=>video.categoria===categoria.titulo)}/>)
            }            
        </>
    )    
}

export default Home;