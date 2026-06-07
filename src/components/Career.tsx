import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Edu-versity</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built 3 production-ready EDA pipelines using Python that reduced data-cleaning time by ~40%. Trained and evaluated binary classification models with Scikit-learn achieving 87%+ accuracy. Independently delivered a customer segmentation analysis (K-Means clustering) that surfaced 4 distinct buyer personas.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>AI & Data Science</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Final-year student at Sant Gadge Baba Amravati University. Specializing in AI, machine learning, and data science with hands-on projects in backend development and data analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>AWS & Full-Stack Development</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              AWS Cloud Practitioner Foundations, Python for Data Science & Machine Learning (IBM/Coursera), Full-Stack Web Development Bootcamp (DevTown).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
