interface CardForBookingProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const CardForBooking = (props: CardForBookingProps) => {
  return (
    <>
      <div className="relative">
        <img className="" src={props.imageUrl} />
        <button className="bg-yellow-500 absolute right-2 top-2 p-3 rounded-md font-light">
          Book now!
        </button>
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
