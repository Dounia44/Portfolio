import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import gmail from "../assets/icons/gmail.svg";

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-2">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Dounia Huber
        </p>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/dounia-huber-b3388a334"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-7 h-7 hover:opacity-75 hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://github.com/Dounia44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-7 h-7 hover:opacity-75 hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="mailto:huber.dounia@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gmail}
              alt="Gmail"
              className="w-7 h-7 hover:opacity-75 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
