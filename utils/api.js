import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

export async function generateImage(
  prompt,
  size,
  setLoading,
  setError,
  setData
) {
  setLoading(true);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${API_URL}/openai/generateimage`,
      { prompt, size },
      config
    );
    if (!response.status === 200) {
      throw new Error("That image could not be generated");
    }
    setData(response.data);
    setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
}

export async function editImage(
  prompt,
  size,
  setLoading,
  setError,
  setData,
  uploadedImage,
  uploadedMap
) {
  setLoading(true);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${API_URL}/openai/editimage`,
      { image: uploadedImage, mask: uploadedMap, prompt, size },
      config
    );
    if (!response.status === 200) {
      throw new Error("That image could not be generated");
    }
    setData(response.data);
    setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
}
export async function variationImage(
  size,
  setLoading,
  setError,
  setData,
  uploadedImage
) {
  setLoading(true);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${API_URL}/openai/variationimage`,
      { image: uploadedImage, size },
      config
    );
    if (!response.status === 200) {
      throw new Error("That image could not be generated");
    }
    setData(response.data);
    setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
}
