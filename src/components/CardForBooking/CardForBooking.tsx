import { useState } from "react";
import { Ticket } from "../Ticket/Ticket";

interface CardForBookingProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const CardForBooking = (props: CardForBookingProps) => {
  const [seen, setSeen] = useState(false);

  function togglePop(): void {
    setSeen(!seen);
  }

  return (
    <>
      <div className="relative">
        <img className="" src={props.imageUrl} />
        <div>
          <button
            className="bg-yellow-500 absolute right-2 top-2 p-3 rounded-md font-light "
            onClick={togglePop}
          >
            Book now!
          </button>{" "}
          {seen ? <Ticket toggle={togglePop} /> : null}
        </div>

        <h1 className="absolute text-white left-8 bottom-8 font-bold mb-3">
          {props.title}
        </h1>

        <p className="absolute text-white left-8 bottom-5 font-extralight">
          {props.description}
        </p>
      </div>
    </>
  );
};
