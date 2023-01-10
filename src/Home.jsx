import { useEffect } from "react";
import { useState } from "react";
import Movieslist from "./Movieslist";

function Home()
{
    let[movies, setMovies] = useState(null)
    let [error , setError] = useState(null)
    let[pending , setPending] = useState(true)

    useEffect(()=>{

        setTimeout(()=>{fetch("http://localhost:4000/movies")
        .then((res)=>{
            if(res.ok==false){
                throw Error("data you are searching is not available");
            }
            return res.json()
        
        })
        .then((data)=>{setMovies(data); setPending(false)})
        .catch((err)=>{setError(err.message); setPending(false)})
        },2000)

    },[])
    return (
        <>
        {error && <h1>{error}</h1>}
        {pending && <div className="loader"></div>}
        {movies!=null && <Movieslist movies={movies} title="All Movies"/>}
        {movies!=null && <Movieslist movies={movies.filter((movie)=>{return(movie.gener.includes("action"))})} title="ActionMovies"/>}
        {movies!=null && <Movieslist movies={movies.filter((movie)=>{return(movie.rating<=4.8)})} title="Top Rated movies"/>}
        </>
    )
}

export default Home;