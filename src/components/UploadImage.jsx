import React from "react";
import { uploadFileHandler } from "../../utils/uploadImage";
import Spinner from "./Spinner";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineUpload } from "react-icons/ai";

const API_URL = import.meta.env.VITE_BASE_URL;

function UploadImage({
  uploadedImageLoading,
  setUploadedImage,
  setUploadedImageLoading,
  setUploadedImageError,
  uploadedImage,
  title,
}) {
  return (
    <div className="upload-image-wrapper">
      <div className="upload-input">
        <label>{title}</label>
        <input
          id="file-upload"
          name="image"
          type="file"
          accept=".png"
          onChange={(e) =>
            uploadFileHandler(
              e,
              setUploadedImage,
              setUploadedImageLoading,
              setUploadedImageError
            )
          }
        ></input>
        {/* <label htmlFor="file-upload">
          <AiOutlineUpload size="25px" color="gray" className="icon" />
        </label> */}
      </div>
      {uploadedImageLoading ? (
        <Spinner />
      ) : (
        <div className="upload-image">
          {uploadedImage ? (
            <img src={`${API_URL}/uploads${uploadedImage}`} />
          ) : (
            <div className="no-image">
              <BsCardImage size="250px" color="lightgray" />
              <p>No-image</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UploadImage;
