import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsCardImage } from "react-icons/bs";
import Spinner from "./Spinner.jsx";
import { downloadImage } from "../../utils/downloadImage.js";

function GenerationImageResult({ loading, data, prompt }) {
  return (
    <div className="generated-image-wrapper">
      <p>Result</p>
      {loading ? (
        <Spinner />
      ) : data?.data ? (
        <>
          <div className="generated-image">
            <img src={data?.data} alt="" />

            <div className="description">
              {prompt}
              <FiDownload
                onClick={() => downloadImage(data?.data)}
                className="download"
                color="white"
                size="25px"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="no-image">
          <BsCardImage size="250px" color="lightgray" />
          <p>No-image</p>
        </div>
      )}
    </div>
  );
}

export default GenerationImageResult;
