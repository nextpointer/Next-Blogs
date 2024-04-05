// import styled from "styled-components";
import "./styles/Home.css";

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
        <div className="blog-catagories"></div>
      </div>
    </>
  );
};
