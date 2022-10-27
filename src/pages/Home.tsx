import useLanguages from "../hooks/useLanguages";
import React from "react";
import {useParams} from "react-router-dom";


const Home = () => {
    const {id} = useParams();
    const {languages, setLanguages} = useLanguages();
    // console.log(id)
    return (
        <div className="w-full h-[200px] h-full flex-col">
            {
                <div>
                    <p>main main main</p>
                </div>
            }
        </div>
    );
}

export default Home;