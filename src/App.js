import {useEffect , useState} from 'react';
import SearchBar from './images/mag1.png';
import MovieCard from './MovieCard';
import './App.css';
//  2c6086bc

// http://www.omdbapi.com/?i=tt3896198&apikey=2c6086bc  yahan hhtps kr k dekha hai q k api respond nahi de rahi

const API_URL ='https://www.omdbapi.com/?i=tt3896198&apikey=2c6086bc';



const App=()=>{

    const [movies , setMovies] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');
    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
        console.log(setMovies)
      

    }

    useEffect(()=>{
        searchMovies('batman')
    },[]);

    return(
        <div className="app">
            <h1>Filmify</h1>
            <div className="search">
                <input className='searchfield' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search For Movies'  />
                <img className='searchbar' src={SearchBar} onClick={()=>searchMovies(searchTerm)} alt="search"  width="20px"/>
            </div>
            {
                movies?.length > 0 
                ?(
                <div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} />
                ))}
                </div>
                ):
                (
                    <div className='empty'>
                        <h1>No Movies Found</h1>
                    </div>
                )
            }
           
        </div>
    )
}



export default App;