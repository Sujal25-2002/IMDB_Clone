import React, { useEffect, useState } from 'react'
import Skeleton , {SkeletonTheme} from 'react-loading-skeleton'
import '../Cards/Cards.css'
import { Link } from 'react-router-dom'

export default function Cards ({movie}) {
  const[isLoading , setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false)
    },1500)
  },[]);

  return (
<>

    {
        // if our isLoading is gonna fail then we have been showing this skleteon loading another wise we have seen our cards

        isLoading
        ?
        <div className='Cards'>
            <SkeletonTheme color='#202020' highlightColor='#444'>
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>

       :
      
       <Link to={`/movie/${movie.id}`} style={{textDecoration:'none' , color: 'white'}} key={movie.id}>
        <div className='Cards'>
            <img className= "Cards_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path: ' '}`}/>
            <div className= 'Cards_overlay '>
                <div className='Cards_title'>{movie?movie.original_title:""}</div>
                <div className='Cards_runtime'>
                    {movie?movie.release_date:''}
                    <span className='Cards_rating'>{movie?movie.vote_average : " "}<i className='fas fa-star'/>{' '}</span>
                </div>
                <div className='Cards_description'>{movie?movie.overview.slice(0,118)+"...":" "}</div>
            </div>
        </div>
      </Link>
    }
    </>
  )
}
// export default Cards