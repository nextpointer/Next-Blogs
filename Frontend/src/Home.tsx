
import "./styles/Home.css";
import CatagoryButton from "./components/CatagoryButton";
import { BlogContainer } from "./components/BlogContainer";
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
        <div className="blog-selction">
            <BlogContainer date="23 March" author="@surajit" image="/assets/a.jpg" Heading="Why i writing this blog?"/>
            <BlogContainer date="23 March" author="@surajit" image="/assets/2.jpg" Heading="Why i writing this blog?"/>
            <BlogContainer date="23 March" author="@surajit" image="/assets/3.jpg" Heading="Why i writing this blog?"/>
            <BlogContainer date="23 March" author="@surajit" image="/assets/4.jpg" Heading="Why i writing this blog?"/>
            <BlogContainer date="23 March" author="@surajit" image="/assets/5.jpg" Heading="Why i writing this blog?"/>
            <BlogContainer date="23 March" author="@surajit" image="/assets/6.jpg" Heading="Why i writing this blog?"/>
            <BlogContainer date="23 March" author="@surajit" image="/assets/2.jpg" Heading="Why i writing this blog?"/>
            <BlogContainer date="23 March" author="@surajit" image="/assets/3.jpg" Heading="Why i writing this blog?"/>
            <BlogContainer date="23 March" author="@surajit" image="/assets/6.jpg" Heading="Can eevjif fjiojfiojijf jfjfj fhujfohuf jfoijoifj?"/>
        </div>
      </div>
    </>
  );
};
 