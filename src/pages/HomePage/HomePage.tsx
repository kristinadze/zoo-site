import AboutUs from "../../components/AboutUs/AboutUs";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto">
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
    </>
  );
};

export default HomePage;
