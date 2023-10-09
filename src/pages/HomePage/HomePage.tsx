import AboutUs from "../../components/AboutUs/AboutUs";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import ContactUs from "../../components/ContactUs/ContactUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="">
        <Navbar />
      </div>
      <div className="container mx-auto my-12">
        <AboutUs
          title1="LOREM"
          title2="IPSUM"
          content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo,
                    urna sed efficitur commodo, turpis sapien euismod elit, vel feugiat
                    felis nunc nec purus."
          content2="Phasellus eget blandit eros. Nulla facilisi.
          Cras sed nisl a odio vehicula aliquam id eu quam. Sed et ipsum in ante
          tincidunt vulputate at ut quam. Curabitur tincidunt urna non metus
          aliquet, et varius erat fermentum. Proin consectetur orci sed tortor
          semper, et vulputate orci accumsan. Duis et mauris eu nulla cursus
          vehicula. Sed tincidunt velit vitae lectus egestas venenatis. Sed
          blandit nisl at laoreet elementum."
        />
      </div>
      <div className="container flex space-x-10 mx-auto pb-10 justify-center">
        <Card
          imageUrl="images/animals_banner.png"
          title="Over 900"
          description="unique animals"
        />
        <Card
          imageUrl="images/events_banner.png"
          title="Incredible events"
          description="every month"
        />
        <Card
          imageUrl="images/packages_banner.png"
          title="Awesome packages"
          description="for families & couples"
        ></Card>
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

export default HomePage;
