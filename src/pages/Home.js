
import { useEffect,useState } from "react";
import { fetchTrendMovies } from "../services/api";
import Movies from "../components/Movies";


const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrendMovies();
    }, []);
    
    const getTrendMovies = () => {
        try {
            const data = fetchTrendMovies();
            setMovies(data);
        }
        catch(error) {
            console.log("No results");
        }
    }
    return (
        <>
            <h1>Trending Today</h1>
        <div>
            <Movies movies={movies} /> 
        </div >
        </>
        )
        };
        

export default Home;