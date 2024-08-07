import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
import {contact} from "../../../resources/contact.js"
import MessageMe from "../../components/MessageMe.jsx";
function Contact() {

  const { loading, portfoliodata } = useSelector((state) => state.root);

  return (
    <div className="mt-10">
      <SectionTitle title={"Say Hello"} />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiery ">{"{"}</p>
          {Object.keys(contact).map((key) => (
            key !=="_id" && <p key={key} className="ml-5">
              <span className="text-tertiery">{key} : </span>
              <span className="text-tertiery">{contact[key]}</span>
            </p>
          ))}

          <p className="text-tertiery">{"}"}</p>
       
      </div>
      <div className="h-[500px] flex justify-center items-center   mr-80">
        {/* <dotlottie-player
          src="https://lottie.host/bf2c0921-1df9-496f-bb4b-4dd9af14a53a/OqYFm73u4D.json"
          background="transparent"
          speed="1"
          autoplay
          loop
          
        ></dotlottie-player> */}
        <MessageMe/>
      </div>
      </div>
    </div>
  );
}

export default Contact;
