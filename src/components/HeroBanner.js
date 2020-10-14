import React from 'react';


function BannerReact(props){
    return (
        <header className="hero-banner-container">
            <div className="hero-banner-text">
                <h2>{props.headline}</h2>
                <h3>{props.subline}</h3>
            </div>
        </header>
    );
}

export default  BannerReact;