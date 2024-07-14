import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500  ">
      <div className="w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Satya&apos;s
              </span>
              Blog
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.goggle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Dev Learning
                </Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.goggle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Satyam Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="flex flex-col items-center">
              <Footer.Title title="Follow" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram/satyam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.twitter/satyam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="flex flex-col items-center">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram/satyam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>

              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.twitter/satyam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:terms-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Satya's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 first-letter:,">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
