import React from 'react';
import logo from 'src/images/image.png';

function Logo() {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logo.src} alt="Logo" />;
}

export default Logo;