import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative lg:h-100 lg:w-100 w-full bg-no-repeat flex justify-end items-center ${styles.noramlFlex}`} // min-h-[70vh] 800px:min-h-[80vh]
      style={{
        backgroundImage:
        "url('https://th.bing.com/th/id/R.ce048ca1e6d94df38ed4dc269a79412c?rik=I9wAkzpErhQ3Bw&pid=ImgRaw&r=0')",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`800px:text-[60px] capitalize font-[600] leading-[1.2] text-[35px] text-white`}
        >
          Best Collection for <br /> Shoes 
        </h1>
        <Link to="/products" className="inline-block">
            <div className={`${styles.banner_button} mt-5`}>
                 <span className="font-[Poppins] font-bold text-[#000] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
