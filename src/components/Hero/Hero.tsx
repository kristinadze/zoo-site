const Hero = () => {
  const dolphinImg = {
    backgroundImage: "url('images/background_image.png')",
  };

  return (
    <header style={dolphinImg} className="h-screen relative">
      <div className="absolute bg-black opacity-40 inset-0"></div>
      <div className="container  text-white mx-auto flex flex-col items-center h-screen justify-center">
        <div className="border-2 border-teal-300 p-4 text-center absolute">
          <h1 className="text-6xl font-semibold leading-tight">Panda Zoo</h1>
          <p className="text-2xl font-light">
            A place of incredible adventures
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
