import "../css/MainPage.css";

function MainPage() {
  const handleDownload = () => {
    // Replace with your actual CV download logic
    const link = document.createElement("a");
    link.href = "../../public/cv_new.pdf";
    link.download = "Stoman-CV.pdf";
    link.click();
  };
  return (
    <>
      <div className="main-page">
        <div className="main-page-txt">
          <h3>HI, I AM STOMAN</h3>
          <h5>A Structural Engineer</h5>
          <button className="download-btn" onClick={handleDownload}>
            Download CV
          </button>
        </div>
        <img src="../../public/home.jpg" className="main-im" />
      </div>
    </>
  );
}

export default MainPage;
