import React from 'react';
export default function Header({children, subtitle}){
    return(
    <header>  
        <h2>{subtitle}</h2>
        <h1>{children}</h1>
    </header>
    );
}