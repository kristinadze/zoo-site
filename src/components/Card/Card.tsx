interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card = (props: CardProps) => {
  return (
    <>
      <div className="relative">
        <img className="" src={props.imageUrl} />
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

export default Card;
