const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-8">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} GuideSpire. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Made with ❤️ for learners and explorers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
