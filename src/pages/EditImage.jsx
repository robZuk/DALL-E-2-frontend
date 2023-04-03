import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { editImage } from "../../utils/api";

import Prompt from "../components/Prompt";
import GenerationImageResult from "../components/GenerationImageResult";
import UploadImage from "../components/UploadImage";

function EditImage() {
  //image
  const [uploadedImage, setUploadedImage] = useState("");
  const [uploadedImageError, setUploadedImageError] = useState(null);
  const [uploadedImageLoading, setUploadedImageLoading] = useState(false);

  //map image
  const [uploadedMap, setUploadedMap] = useState(null);
  const [uploadedMapError, setUploadedMapError] = useState(null);
  const [uploadedMapLoading, setUploadedMapLoading] = useState(null);

  //prompt
  const [prompt, setPrompt] = useState("");

  //size
  const [size, setSize] = useState("medium");

  //generatedImage
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const useCallback

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

  const showMapError = useCallback(() => {
    uploadedMapError &&
      toast.error(uploadedMapError, {
        toastId: "error3",
        position: "bottom-center",
        theme: "colored",
      });
  }, [uploadedMapError]);

  useEffect(() => {
    showError();
    showImageError();
    showMapError();
  }, [showImageError, showMapError, showError]);

  useEffect(() => {
    !uploadedImageError &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    editImage(
      prompt,
      size,
      setLoading,
      setError,
      setData,
      uploadedImage,
      uploadedMap
    );
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  }

  return (
    <div className="edit-image">
      <div className="edit-image-header">
        <h2>Edit image</h2>
        <p>
          The uploaded image and mask must both be square PNG images less than
          4MB in size, and also must have the same dimensions as each other. The
          non-transparent areas of the mask are not used when generating the
          output, so they don’t necessarily need to match the original image. To
          create non-transparent area you can use{" "}
          <a href="https://labs.openai.com/editor" target="_blank">
            DALL-E-2 app
          </a>{" "}
          or another tools.
        </p>
      </div>
      <div className="edit-image-upload-images">
        <UploadImage
          uploadedImage={uploadedImage}
          uploadedImageLoading={uploadedImageLoading}
          setUploadedImage={setUploadedImage}
          setUploadedImageLoading={setUploadedImageLoading}
          setUploadedImageError={setUploadedImageError}
          title="Image"
        />
        <UploadImage
          uploadedImage={uploadedMap}
          uploadedImageLoading={uploadedMapLoading}
          setUploadedImage={setUploadedMap}
          setUploadedImageLoading={setUploadedMapLoading}
          setUploadedImageError={setUploadedMapError}
          title="Image Map"
        />
      </div>
      <div className="edit-image-prompt">
        <Prompt
          handleSubmit={handleSubmit}
          prompt={prompt}
          setPrompt={setPrompt}
          size={size}
          setSize={setSize}
          loading={loading}
          uploadedImage={uploadedImage}
          uploadedMap={uploadedMap}
        />
      </div>
      <div className="edit-image-generated-image">
        <GenerationImageResult loading={loading} data={data} prompt={prompt} />
      </div>
    </div>
  );
}

export default EditImage;
