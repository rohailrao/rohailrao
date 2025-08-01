import React, { useEffect, useState } from "react";
import "./SummaryView.css";

const SummaryView = () => {
  const [project, setProject] = useState({
    id: "",
    title: "",
    videoSrc: "",
    summaryPdf: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const title = params.get("title");
    const videoSrc = params.get("videoSrc");
    const summaryPdf = params.get("summaryPdf");

    setProject({
      id,
      title,
      videoSrc,
      summaryPdf,
    });

    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="summary-view-container">
      <div className="summary-header">
        <h1>{project.title}</h1>
        <button onClick={() => window.close()} className="close-button">
          Close
        </button>
      </div>

      <div className="summary-content">
        <div className="video-container">
          <video controls autoPlay className="summary-video">
            <source src={project.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="pdf-container">
          <h2>Project Summary</h2>
          <iframe
            src={`${project.summaryPdf}#toolbar=0`}
            className="pdf-frame"
            title="Project Summary"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SummaryView;
