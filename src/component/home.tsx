import React from "react";
import imga from "./../image/cocalno2.png";
import './home.css'

const HomePage = () => {

    return (
        <div className="home-container">
            <div className="grid-container">
                <div className="grid-item">
                    {/* <Image></Image> */}
                    <img className="image-item" src={imga} />
                </div>
                <div className="grid-item">
                    {/* <Image></Image> */}
                    <img className="image-item" src={imga} />
                </div>
                <div className="grid-item">
                    {/* <Image></Image> */}
                    <img className="image-item" src={imga} />
                </div>
                <div className="grid-item">
                    {/* <Image></Image> */}
                    <img className="image-item" src={imga} />
                </div>
                <div className="grid-item">
                    {/* <Image></Image> */}
                    <img className="image-item" src={imga} />
                </div>
                <div className="grid-item">
                    {/* <Image></Image> */}
                    <img className="image-item" src={imga} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;