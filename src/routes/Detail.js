import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  //아래 useParams에 사용되는 변수는 App.js에 라우터 경로에 사용된 변수명과 일치시켜주면 된다.
  const { id } = useParams();
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      setMovie(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch movie details", error);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {
            <div>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </p>
            </div>
          }
        </div>
      )}
    </div>
  );
}
export default Detail;
