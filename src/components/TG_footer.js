import { Instagram, Whatsapp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-3">
      <div className="flex items-center justify-center text-center space-x-3">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/YOUR_INSTAGRAM_PROFILE"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Instagram className="w-5 h-5 lg:w-8 lg:h-8 text-pink-500" />
        </a>

        {/* Footer Text */}
        <p className="text-sm lg:text-xl">ITSA, Techgyanathon 2025 ©</p>

        {/* WhatsApp Icon (Uncomment if needed) */}
        {/* <a
          href="https://chat.whatsapp.com/YOUR_WHATSAPP_GROUP_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Whatsapp className="w-5 h-5 lg:w-8 lg:h-8 text-green-500" />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
