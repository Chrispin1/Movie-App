import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardInRow);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const url =
        "https://tvshow.p.rapidapi.com/Movie/NowPlaying?Page=1&Language=en-US&Adult=true";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
          "x-rapidapi-host": "tvshow.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getMovies();
  }, []);

  return (
    <div
      className="flex justify-center items-center"
      style={{ width: wrapperWidth }}
    >
      <div className="flex flex-wrap">
        {movies.map((movie, index) => (
          <div key={index}>
            <Card movie={movie} cardWidth={cardWidth} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
