// import styled from "styled-components";
import "./styles/Home.css";
import CatagoryButton from "./components/CatagoryButton";

export const Home = () => {
  return (
    <>
      <div className="blog-container">
        <div className="blog-logo-greet-visit">
            <div className="blog-inside-header">
                <div className="blog-logo">

                </div>
                <div className="blog-greet">
                    <p>Good <span>Morning</span></p>
                </div>
                <div className="blog-visit-profile-btn">
                    <p>Visit my Profile</p>
                </div>
            </div>
        </div>
        <div className="blog-catagories">
            <CatagoryButton innerTxt="ALL"/>
            <CatagoryButton innerTxt="Devlopement"/>
            <CatagoryButton innerTxt="Psychology"/>
            <CatagoryButton innerTxt="Others"/>
        </div>
        {/* <div className="blog-selction">
            
        </div> */}
      </div>
    </>
  );
};
