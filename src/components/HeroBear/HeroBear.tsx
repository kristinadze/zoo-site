import { CardForBooking } from "../CardForBooking/CardForBooking";
import ContactUs from "../ContactUs/ContactUs";

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
        <CardForBooking
          imageUrl="images/giraffe.png"
          title="Family pack"
          description="perfect for families with small children"
        />
        <CardForBooking
          imageUrl="images/leo.png"
          title="Corporate pack"
          description="a quick getaway for your employees"
        />
        <CardForBooking
          imageUrl="images/parrot.png"
          title="Couple pack"
          description="a romantic sightseeing"
        />
      </div>

      <div className="bg-gray-800">
        <ContactUs
          titleLine1="CONTACT"
          titleLine2="US"
          location="av. Slice Line, NYC CA"
          phone="+11 111  111"
        />
      </div>
    </>
  );
};
