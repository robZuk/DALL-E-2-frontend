import axios from "axios";
const API_URL = import.meta.env.VITE_BASE_URL;

export const uploadFileHandler = async (e, setImage, setLoading, setError) => {
  setError("");
  setLoading(true);
  const files = e.target.files[0];
  const formData = new FormData();
  formData.append("image", files);

  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(`${API_URL}/upload`, formData, config);
    setImage(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setError("Invalid file format. The correct file format is: .png");
    setLoading(false);
  }
};
