import React from 'react';

function CompCabecera() {
    return (
        <nav className='encabezado container'>
            <input type="checkbox" id="check"></input>
            <label for = "check" class ='checkbtn'>
                <i className='fas fa-bars'></i>
            </label>
            <label className='titulo'>Qatar 2022</label>
            <ul>
                <li> <a href='https://www.instagram.com/saiyan2003/'> <img className='img-fb' src='https://www.facebook.com/images/fb_icon_325x325.png'></img> </a> <strong>Facebook</strong> </li>
                <li> <a href='https://www.instagram.com/saiyan2003/'> <img className='img-fb' src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png'></img> </a> <strong>Instagram</strong> </li>
            </ul>
        </nav>
    )
}

export default CompCabecera;
