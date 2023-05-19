// Karakter bileşeniniz buraya gelecek
import React, {useEffect,useState} from "react";
import axios from "axios";
import Accordeon from "./Accordeon";

const Films = ({char, films}) => {


    return (
         <div>
            {films
            .filter((f) => char.films.includes(f.title))
            .map((film,i) => (<Accordeon key={i} title={film.title}>
                <p>{film.opening_crawl}</p>
                <p>Title: {film.title}</p>
                <p>Director: {film.director}</p>
                <p>Producer: {film.producer}</p>
                <p>Release Date: {film.release_date}</p>
            </Accordeon> ))}
            
        </div>
    )
}

export default Films;
