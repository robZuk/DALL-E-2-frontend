import React from "react";

function Prompt({
  handleSubmit,
  prompt,
  setPrompt,
  setSize,
  size,
  loading,
  uploadedImage,
  uploadedMap,
}) {
  function disabledButton() {
    const disabled = !prompt || !uploadedImage || !uploadedMap;
    return disabled;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {prompt !== "no-prompt" && (
          <>
            {" "}
            <label>Prompt</label>
            <textarea
              type="text"
              id="prompt"
              placeholder="Enter detailed image description"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows="3"
              maxLength="200"
            />
          </>
        )}
      </div>

      <div>
        <label>Size</label>
        <select
          name="size"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <button type="submit" disabled={disabledButton()}>
        {loading ? "Loading" : "Generate"}
      </button>
    </form>
  );
}

export default Prompt;
