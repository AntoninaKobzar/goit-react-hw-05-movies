
import { useEffect,useState } from "react";
import fetchMovies  from "services/api";


const Home = () => {
    const [movie, setMovies] = useState(null);
    useEffect(() => {
        if (movie === ''){
            return;
        }
        fetchMovies();
    }, []);
    
    
    return (
            <div>{}</div>)
        };

export default Home;