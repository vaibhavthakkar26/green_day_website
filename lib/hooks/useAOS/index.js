import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const handleRefresh = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleRefresh);
    return () => {
      window.removeEventListener("resize", handleRefresh);
    };
  }, []);
};

export default useAOS;
