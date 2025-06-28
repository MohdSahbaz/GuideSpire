const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 py-2 text-center border-t border-gray-600">
      <p className="text-[#a2abb3] text-base font-normal">
        © {new Date().getFullYear()} GuideSpire
      </p>
    </footer>
  );
};

export default Footer;
