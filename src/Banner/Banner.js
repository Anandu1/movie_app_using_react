import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { API_KEY,imageURL } from '../Constants/Constants'
import "./Banner.css"
function Banner() {
const [movie, setMovie] = useState()
 useEffect(() => {
     axios.get(
         `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
     ).then((response)=>{
         setMovie(response.data.results[0])
     })
     },
  [])
    return (
        <div
        style={{backgroundImage: `url(${movie ? imageURL+movie.backdrop_path  :""})`}}
        className="banner">
        <div className="content"></div>  
        <h1 className="title">{  movie ? movie.title  :""}</h1>
        <div className="banner_buttons">
        <button className="button" >Play</button>
        <button className="button">My List</button>
        </div>
        <h1 className="desc">{  movie ? movie.overview  :""}</h1>
        </div>
    )
}

export default Banner
