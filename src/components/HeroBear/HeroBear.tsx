import Card from "../Card/Card";

export const HeroBear = () => {
  const bearImage = {
    backgroundImage: "url('images/packages_page_background.png')",
  };
  return (
    <>
      <header
        style={bearImage}
        className="h-screen relative bg-no-repeat"
      ></header>

      <div className="container flex space-x-10 mx-auto pb-10 justify-center">
        <Card
          imageUrl="images/giraffe.png"
          title="Family pack"
          description="perfect for families with small children"
        />
        <Card
          imageUrl="images/leo.png"
          title="Corporate pack"
          description="a quick getaway for your employees"
        />
        <Card
          imageUrl="images/parrot.png"
          title="Couple pack"
          description="a romantic sightseeing"
        />
      </div>
    </>
  );
};
