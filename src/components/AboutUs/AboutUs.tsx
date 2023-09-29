interface AboutUsProps {
  title1: string;
  title2: string;
  content1: string;
  content2: string;
}

const AboutUs = (props: AboutUsProps) => {
  return (
    <>
      <div className="flex items-center mx-auto max-w-screen-lg mt-8">
        <div className="w-1/3">
          <h1 className="text-4xl font-semibold text-left pl-11">
            {props.title1}

            <br />
            <span className="border-b-4 border-teal-300 pb-3 text-center font-extralight">
              {props.title2}
            </span>
          </h1>
        </div>
        <div className="w-2/3">
          <p className="text-justify leading-relaxed text-gray-700 font-semibold">
            {props.content1}
          </p>
          <br />
          <p className="text-justify leading-relaxed font-light">
            {props.content2}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
