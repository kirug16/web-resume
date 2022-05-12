import React from "react";

export const Header = () => {
  const info = {
    address: "7941 Bemis Cir, Littleton, CO 80120",
    number: 7853415732,
    email: "kirug16@gmail.com",
    age: 20,
  };
  return (
    <div>
      <img
        src="images/Selfie.JPG"
        alt=""
        width="250"
        height="329"
        align="left"
        hspace="3"
        vspace="0"
        border="3"
      />
      <h1>Hi I'm Kirubel Gebretsadik</h1>
      <h3>Computer Scientist</h3>
      <h2>Education</h2>
      <p>
        Kansas State University, Manhattan KS<br></br>
        Bachelor of Science, Computer Engineering(2024)
      </p>

      <p>
        Age: {info.age}
        <br></br>
        Address: {info.address}
        <br></br>
        Phone: {info.number}
        <br></br>
        Email: {info.email}
      </p>
      <br></br>
      <br></br>
      <br></br>

      <h3>Public Profiles</h3>
      <p id="socials">
        <a
          id="links"
          href="https://www.linkedin.com/in/kirubel-gebretsadik-35a021236/"
          target="blank"
        >
          <img src="images/linkedin.png" alt="" width="30" height="30" />
        </a>

        <a href="https://github.com/kirug16" target="blank">
          <img src="images/github-logo.png" alt="" width="30" height="30 " />
        </a>

        <a href="https://twitter.com/kirug16" target="blank">
          <img src="images/twitter.png" alt="" width="30" height="30" />
        </a>
        <hr></hr>
      </p>
    </div>
  );
};

export default Header;
