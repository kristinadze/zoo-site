const Hero = () => {
  const dolphinImg = {
    backgroundImage: "url('images/background_image.png')",
  };

  return (
    <header style={dolphinImg} className="h-screen relative">
      <div className="absolute bg-black opacity-40 inset-0"></div>
      <div className="container border-2 border-teal-300 text-white mx-auto flex flex-col items-center h-screen justify-center">
        <h1 className="text-6xl font-bold leading-tight">Panda Zoo</h1>
        <p className="text-2xl font-light">A place of incredible adventures</p>
      </div>
    </header>
  );
};

export default Hero;
