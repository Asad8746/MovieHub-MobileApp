import {useState} from "react"
import movieDbApi from "../Api/theMoviedb";
export default () => {
    const [movies,setMovies] = useState([]);
    const [error,setError] = useState("");
    const getMovies = async(term) => {
        try {
        let response = await movieDbApi.get("/search/multi",{
            params : {
                query : term,
                api_key : "8cd514344b5f41bcbf02e17a60406817",
                page:1
            }
        });
        setMovies(response.data.results)
        setError("");
        }catch(err) {
            console.log(err.message);
            setError("Something went Wrong")
        }
    }
    return [movies,getMovies,error];
}