import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="text-center py-2">
      <h6>CopyRight &copy; {today.getFullYear()}</h6>
    </footer>
  );
};

export default Footer;
