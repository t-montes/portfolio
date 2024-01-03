import React from "react";

function LandingPage(props) {
    return(
        <header className="header" role="banner" id="header">
            <div className="header__text-box">
                <h1 className="heading-primary"><pre>Hello, World!</pre>I'm Tony</h1>
                <p className="header__description">
                    Driven Systems and Electronic Engineering student passionate about 
                    creating cutting-edge solutions and automating processes.
                </p>
                <a href="#footer" className="btn btn__hire" id="hire">Contact Me&nbsp;&rarr;</a>
            </div>
        </header>
    );
}

export default LandingPage;