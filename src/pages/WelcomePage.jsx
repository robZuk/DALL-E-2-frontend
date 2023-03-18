import React from "react";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-page-wrapper">
        <p>
          <span> DALL·E 2 </span> is an AI system that can create realistic
          images and art from a description in natural language.
        </p>
        <a
          href="https://openai.com/product/dall-e-2"
          target="_blank"
          rel="noreferrer"
        >
          OFFICIAL WEBSITE
        </a>
      </div>
    </div>
  );
}

export default WelcomePage;
