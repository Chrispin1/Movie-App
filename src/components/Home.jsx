import { useState } from "react";
import Card from "./Card";

const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardInRow);
  return (
    <div
      className="flex justify-center items-center "
      style={{ width: wrapperWidth }}
    >
      <div className="flex flex-wrap">
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
