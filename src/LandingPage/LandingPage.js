import React from "react";

function LandingPage(props) {
    return(
        <header class="header" role="banner" id="header">
            <div class="header__text-box">
                <h1 class="heading-primary"><pre>Hello, World!</pre>I'm Tony</h1>
                <p class="header__description">
                    Driven Systems and Electronic Engineering student passionate about 
                    creating cutting-edge solutions and automating processes.
                </p>
                <a href="#footer" class="btn btn__hire" id="hire">Contact Me&nbsp;&rarr;</a>
            </div>
        </header>
    );
}

export default LandingPage;