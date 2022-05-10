import React from 'react'


export const Header = () => {
    const info = {
        address : '820 Oakbrook PL Manhattan, KS, 66503',
        number : 7853415732,
        email: 'kirug16@gmail.com',
        age: 20,
        nationality: 'Ethiopian'
    }
    return (
        <div>
        <img src="images/Selfie.JPG" alt='' width="250" height="329"  
        align="left" hspace="10" vspace="0" border="3" />
        <h1>Hi I'm Kirubel Gebretsadik</h1>
        <h3>Computer Scientist</h3>
        <h2>Education</h2>
        <p>
                Kansas State University, Manhattan KS<br></br>
                Bachelor of Science, Computer Engineering(2024)
        </p>

        <p>
            Age: {info.age}<br></br>
            Nationality: {info.nationality}<br></br>
            Address: {info.address}<br></br>
            Phone: {info.number}<br></br>
            Email: {info.email}
        </p>
        <br></br><br></br><br></br>

        <h3>Socials</h3>
        <p>
        <a href="https://www.linkedin.com/in/kirubel-gebretsadik-35a021236/" target="blank">
        <img src="images/linkedin.png" alt='' width="30" height="30"/></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <a href="https://github.com/kirug16" target="blank">
        <img src="images/github-logo.png" alt='' width="30" height="30 "/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <a href="https://twitter.com/kirug16" target="blank">
        <img src="images/twitter.png" alt='' width="30" height="30"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <a href="https://www.instagram.com/kirug16/" target="blank">
        <img src="images/instagram.png" alt='' width="30" height="30"/></a>
<hr></hr>
        </p>



        </div>
    )
}

export default Header