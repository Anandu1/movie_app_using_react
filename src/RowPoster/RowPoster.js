import React,{useEffect,useState} from 'react'
import './RowPoster.css'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { API_KEY,imageURL } from '../Constants/Constants'
function RowPoster() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
        });  
    }, [])
    const handleMovieClick =(id)=>{

    }
    return (
        <div className="row">
           <h2>NetFlix Originals</h2> 
           <div className="posters">
               {movies.map((obj)=>
               <Router>
              <Link to={`/product/${obj.id}`}>
<img className="poster" key={obj.id} src={`${imageURL+obj.backdrop_path}`} alt="poster" />
</Link>
               </Router>
 
               )}
                
           </div>
        </div>
    )
}

export default RowPoster
