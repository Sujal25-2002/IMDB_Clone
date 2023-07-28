import React, { useEffect, useState } from 'react'
import '../home/Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link} from 'react-router-dom'
import MovieList from '../../components/movieList/MovieList';



const Home = ()=> {
 

    const [popularmovies,setpopularmovies] = useState([]);
    // useEffect is use to get the api from api key 
    useEffect(()=>{
         fetch('https://api.themoviedb.org/3/movie/popular?api_key=ce5a0cfd364f2bd8419b8a75e1406ae8&language=en-US')
         .then(res => res.json())
         .then(data => setpopularmovies(data.results))
    },[])
    return (
    <>
      <div className='poster'>
        <Carousel
            showThumbs={false}
            autoPlay={true}
            infinteLoop={true}
            transitionTime={3}
            showStatus={false}
           >
            {
                popularmovies.map(movie=>(
                   <Link style={{textdecoration:'none',color:'white'}} to={`/movie/${movie.id}`} key={movie.id}>
                    <div className='posterImage'>
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}></img>
                    </div>
                    <div className='posterImage_overlay'>
                        <div className='posterImage_title'>{movie ? movie.original_title : " "}</div>
                        <div className='posterImage_runtime'>{movie ? movie.release_date : " "}
                        <span className='posterImage_rating'>{movie ? movie.vote_average : " "}
                        <i className='fas fa-star'/>{' '}
                        </span>

                        </div>
                        <div className='posterImage_description'>{movie ? movie.overview : " "}</div>
                    </div>

                   </Link>
                ))
            }
        </Carousel>
        <MovieList />
      </div>
    </>
  )
}

export default Home
