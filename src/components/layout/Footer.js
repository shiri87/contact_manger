import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className='bg-danger text-light'>
      <p className='py-2 ml-5 mr-auto text-white'>
        copyright {String.fromCharCode(169)}
        {" " + date.getFullYear()} Websites 'r' us | Shiri (∗❛⌄❛∗){" "}
        <span>💻</span>
      </p>
    </div>
  );
};

export default Footer;
