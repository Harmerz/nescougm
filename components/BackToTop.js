import React, { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed bottom-10 right-10">
      <button type="button" onClick={backToTop} className={`${isVisible ? "opacity-100" : "opacity-0"} text-[#8758ff] hover:text-[#6f38c5] text-[42px] transition-all`}>
        <BsFillArrowUpSquareFill />
      </button>
    </div>
  );
};

export default BackToTop;
