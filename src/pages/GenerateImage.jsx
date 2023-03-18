import React, { useState, useEffect, useCallback } from "react";
import { generateImage } from "../../utils/api";
import { toast } from "react-toastify";
import Prompt from "../components/Prompt";
import GenerationImageResult from "../components/GenerationImageResult";

function GenerateImage() {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("medium");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [data, setData] = useState(null);

  const showError = useCallback(() => {
    error &&
      toast.error(error, {
        position: "bottom-center",
        theme: "colored",
      });
  }, [error]);

  useEffect(() => {
    showError();
  }, [showError]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    generateImage(prompt, size, setLoading, setError, setData);
    e.target.reset();
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }

  return (
    <section className="generate-image">
      <div className="generate-image-header">
        <h2>Generate Image</h2>
        <p>
          The image generations endpoint allows you to create an original image
          given a text prompt.
        </p>
      </div>
      <div className="generate-image inner-wrapper">
        <Prompt
          handleSubmit={handleSubmit}
          prompt={prompt}
          setPrompt={setPrompt}
          size={size}
          setSize={setSize}
          loading={loading}
          uploadedImage={true} //prop to disabled generate button
          uploadedMap={true} //prop to disabled generate button
        />

        <GenerationImageResult loading={loading} data={data} prompt={prompt} />
      </div>
    </section>
  );
}
export default GenerateImage;
