import { Link } from "react-router-dom";

import { easeInOut, motion } from "framer-motion";

import logo from "../assets/logo/ethereal-logo.png";

const GetInTouch = () => {
  const facebookLink = "https://web.facebook.com/profile.php?id=61576418447457";
  const instagramLink = "https://www.instagram.com/officialetherealng/";
  const twitterLink = "https://x.com/Off_Ethereal";
  const redditLink = "https://www.reddit.com/user/Officialethereal/";

  return (
    <div className="overflow-hidden" id="contact-M">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: easeInOut }}
        viewport={{ once: false }}
      >
        <div className="md:hidden flex items-center justify-between mt-10 bg-[#FAFBFB]">
          <div className="w-full flex flex-col px-[5%]">
            <h1 className="font-barlow text-[45px] font-semibold text-[#363636]">
              GET IN TOUCH
            </h1>

            <p className="text-[#808080] text-[16px] font-poppins mt-1 text-wrap ">
              We'd love to hear from you! Have questions or feedback? Reach out
              to us.
            </p>

            <div className="mt-5 flex items-center space-x-2">
              <img
                src={logo}
                alt=""
                className="shadow-lg rounded-full w-[5%]"
              />
              <Link
                to="mailto:officialetherealng@gmail.com"
                target="_blank"
                className="text-[15px] font-poppins text-[#191919]"
              >
                officialetherealng@gmail.com
              </Link>
            </div>

            <div className="grid grid-cols-3 w-[85%] gap-y-4 font-barlow text-[18px] mt-5 text-[#808080]">
              <Link to={facebookLink} target="_blank" className="underline">
                Facebook
              </Link>
              <Link to={instagramLink} target="_blank" className="underline">
                Instagram
              </Link>
              <Link to={twitterLink} target="_blank" className="underline">
                Twitter (X)
              </Link>
              <Link to={redditLink} target="_blank" className="underline">
                Reddit
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
