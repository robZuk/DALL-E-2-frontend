import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { variationImage } from "../../utils/api";
import Prompt from "../components/Prompt";
import GenerationImageResult from "../components/GenerationImageResult";
import UploadImage from "../components/UploadImage";

function VariationImage() {
  //image
  const [uploadedImage, setUploadedImage] = useState("");
  const [uploadedImageError, setUploadedImageError] = useState(null);
  const [uploadedImageLoading, setUploadedImageLoading] = useState(false);

  //size
  const [size, setSize] = useState("medium");

  //prompt
  const prompt = "no-prompt";

  //generatedImage
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const showError = useCallback(() => {
    error &&
      toast.error(error, {
        toastId: "error1",
        position: "bottom-center",
        theme: "colored",
      });
  }, [error]);

  const showImageError = useCallback(() => {
    uploadedImageError &&
      toast.error(uploadedImageError, {
        toastId: "error2",
        position: "bottom-center",
        theme: "colored",
      });
  }, [uploadedImageError]);

  useEffect(() => {
    showImageError();
    showError();
  }, [showImageError, showError]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    variationImage(size, setLoading, setError, setData, uploadedImage);
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }

  return (
    <div className="variation-image">
      <div className="variation-image-header">
        <h2>Variation image</h2>
        <p>
          The image variations endpoint allows you to generate a variation of a
          given image. Similar to the edits endpoint, the input image must be a
          square PNG image less than 4MB in size.
        </p>
      </div>
      <div className="variation-image-upload-images">
        <UploadImage
          uploadedImage={uploadedImage}
          uploadedImageLoading={uploadedImageLoading}
          setUploadedImage={setUploadedImage}
          setUploadedImageLoading={setUploadedImageLoading}
          setUploadedImageError={setUploadedImageError}
          title="Image"
        />
        <Prompt
          prompt={prompt}
          handleSubmit={handleSubmit}
          size={size}
          setSize={setSize}
          loading={loading}
          uploadedImage={uploadedImage} //prop to disabled generate button
          uploadedMap={true} //prop to disabled generate button
        />
      </div>

      <div className="variation-image-generated-image">
        <GenerationImageResult loading={loading} data={data} prompt={prompt} />
      </div>
    </div>
  );
}

export default VariationImage;
