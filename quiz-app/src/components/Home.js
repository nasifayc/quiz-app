import { useState } from "react";
import data from "../data";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleIndex = (index) => {
    setIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item, i) => (
        <Card
          key={item.id}
          data={data[i]}
          cardIndex={i + 1}
          currentIndex={index}
          onShowAnswer={handleIndex}
        />
      ))}
    </div>
  );
}

function Card({ data, cardIndex, currentIndex, onShowAnswer }) {
  const getCardContent = () => {
    if (cardIndex === currentIndex) {
      return {
        text: data.answer,
        textColorClass: "text-white",
      };
    }
    return {
      text: data.question,
      textColorClass: "text-black",
    };
  };

  const { text, textColorClass } = getCardContent();
  return (
    <div
      onClick={() => onShowAnswer(cardIndex)}
      className={`${
        cardIndex === currentIndex && "bg-red-600"
      } border-2 h-40 border-gray-200 hover:cursor-pointer  shadow-sm p-6 flex flex-col justify-center items-center text-center transform transition-all duration-500 ease-in-out ${
        cardIndex === currentIndex ? "translate-y-0" : "translate-y-8"
      }`}
    >
      <p className={`${textColorClass} text-md mb-4`}>{text}</p>
    </div>
  );
}
