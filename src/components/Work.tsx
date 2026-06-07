import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>E-Commerce Backend API</h4>
                  <p>Backend Development</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Django, DRF, PostgreSQL, Docker, JWT, GitHub Actions</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="E-Commerce Backend" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>E-Commerce Data Analysis</h4>
                  <p>Data Science</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Pandas, Scikit-learn, Matplotlib, Seaborn</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Data Analysis" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Netflix Content Trend Analysis</h4>
                  <p>EDA & Visualization</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Pandas, Matplotlib, Seaborn, Feature Engineering</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Netflix Analysis" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
