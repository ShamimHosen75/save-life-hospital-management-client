// here we will add all of our home page components file if you cannot understand please read our componennts text.txt file
import React from "react";
import AvailableFeatures from "../../components/Home components/AvailableFeatures/AvailableFeatures";
import Banner from "../../components/Home components/Banner";
import Doctor from "../../components/Home components/Book Our Doctors/Doctor";
import { NewsLetter } from "../../components/Home components/newsletter/NewsLetter";
import { Use } from "../../components/Home components/use/Use";
import Services from "../../components/Home components/What are u looking fr/Services";
import HomeLogin from "../../components/homelogin/HomeLogin";
import News from "../../components/news/News";
import { UseWebsite } from "../../components/usewebsite/UseWebsite";
import { Footer } from "../../shared/Footer/Footer";
import { NavigationBar } from "../../shared/NavigationBar/NavigationBar";
import Speciality from "../Speciality/Speciality";

const Homepage = () => {
  return (
    <div id='home'>
      {/* navbar added by ovilash */}
      <NavigationBar isHome={true} />

      {/* banner added by forhad & anik */}
      <Banner />

      {/* what are you looking added by forhad */}
      <div className="mt-[100px]">
        <Services></Services>
      </div>

      {/*Specialties added by arshad  */}
      <div className="mt-[100px]">
      <Speciality></Speciality>
      </div>

       {/* Use added by anik*/}
      <div className="mt-[100px]">
        <Use></Use>
      </div>

      {/* homelogin added by anik */}
      <HomeLogin></HomeLogin>

      {/*Booking  Doctors added by anik*/}
      <div className="mt-[100px]">
        <Doctor></Doctor>
      </div>

  {/* AvailableFeatures added by anik*/}
 <div className="mt-[100px]">
        <AvailableFeatures></AvailableFeatures>
      </div>

      {/* UseWebsite added by anik*/}
      <div className="mt-[100px]">
        <UseWebsite></UseWebsite>
      </div>

      {/* Newsletter added by anik*/}
      <div className="mt-[100px]">
        <NewsLetter></NewsLetter>
      </div>

       {/* Blogs added by anik*/}
      <div className="mt-[100px]">
        <News></News>
      </div>

      {/* footer added by ovilash */}
      <Footer />
      
    </div>
  );
};

export default Homepage;
