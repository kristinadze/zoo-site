interface ContactUsProps {
  titleLine1: string;
  titleLine2: string;
  location: string;
  phone: string;
}

const ContactUs = (props: ContactUsProps) => {
  return (
    <>
      <div className="flex items-center max-w-screen-lg mx-auto text-white py-11">
        <div className="w-1/2">
          <h1 className="text-4xl text-center">
            {props.titleLine1}
            <br />
            <span className="border-b-4 border-teal-300 font-extralight px-6 py-3">
              {props.titleLine2}
            </span>
          </h1>
        </div>

        <div className="w-1/2 text-center">
          <p className="pb-4">Location: {props.location}</p>
          <p className="">Phone: {props.phone}</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
