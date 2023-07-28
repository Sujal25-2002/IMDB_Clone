import React , {useState,useEffect} from 'react'
import Cards from '../Cards/Cards'
import '../movieList/movieList.css'
import { useParams } from 'react-router-dom'


const MovieList = ()=> {

    const [movieList,setMovieList] = useState([])
    const {type} = useParams()
   
    useEffect(()=>{
         getData();
    },[])

    useEffect(()=>{
         getData();
    },[type])

    const getData = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=ce5a0cfd364f2bd8419b8a75e1406ae8&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

  return (
    <>
     <div className='moive_list'>
        <h2 className='movie_title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
        <div className='list_card'>
            {
                movieList.map(movie=>(
                    <Cards movie={movie} key={movie.id}/>
                ))
            }
        </div>
    </div> 
    </>
  )
}

export default MovieList
