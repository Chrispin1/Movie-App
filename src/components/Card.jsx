import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ cardWidth, movie }) => {
  const { title, image, genres, originalLanguage, releaseDate, overview } =
    movie;
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div
      style={{ width: cardWidth }}
      className="h-[650px] relative flex justify-center items-center shrink-0 p-2 group"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showDesc ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setShowDesc(!showDesc)}
        className="w-[97%] h-[97%] absolute m-auto text-white rounded-lg flex flex-col justify-center bg-black/50 p-10 gap-y-2 cursor-pointer backdrop-blur-xl"
      >
        <h1 className="text-4xl">{title}</h1>
        <div className="flex items-center gap-x-2 ">
          <span className="text-lg">Genres: </span>
          {genres.map((genre, index) => (
            <span key={index} className="font-semibold text-red-500">
              {genre}
            </span>
          ))}
        </div>
        <span className="gap-x-2 flex">
          Original Language: <span className="mr-2 uppercase">EN</span>
        </span>
        <span className="flex gap-x-2">
          Release Date:{" "}
          <span className="mr-2 text-yellow-400">{releaseDate}</span>
        </span>
        <p className="flex flex-col gap-y-2">
          <span className="text-red-500">Summary: </span>
          <span className=" first-letter:pl-2 ">{overview}</span>
        </p>
      </motion.div>
      <img
        src={image}
        alt="Movie Image"
        className=" absolute w-[97%] h-[97%] rounded-xl opacity-50 group-hover:opacity-100 object-cover transition-opacity duration-500 -z-10"
      />
    </div>
  );
};

export default Card;
