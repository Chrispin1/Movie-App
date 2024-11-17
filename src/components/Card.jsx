import godfather from "../assets/img.png";

const Card = () => {
  return (
    <div className="h-[650px] relative flex justify-center items-center shrink-0 p-2 bg-[#403D39] group">
      <div className="w-[97%] h-[97%] absolute m-auto text-white rounded-lg flex flex-col justify-center bg-black/50 p-10 gap-y-2 cursor-pointer">
        <h1 className="text-4xl">The GodFather</h1>
        <div className="flex items-center gap-x-2 ">
          <span className="text-lg">Genres: </span>
          <span className="font-semibold text-red-500">Crime Drama</span>
        </div>
        <span className="gap-x-2 flex">
          Original Language: <span className="mr-2 uppercase">EN</span>
        </span>
        <span className="flex gap-x-2">
          Release Date: <span className="mr-2 text-yellow-400">1972-03-04</span>
        </span>
        <p className="flex flex-col gap-y-2">
          <span className="text-red-500">Summary: </span>
          <span className=" first-letter:pl-2">Summary Text</span>
        </p>
      </div>
      <img
        src={godfather}
        alt="Movie Image"
        className="rounded-xl object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  );
};

export default Card;
