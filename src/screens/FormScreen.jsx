import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormScreen() {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        country: formData.country,
        city: formData.city,
      };

      const response = await axios.post(
        "http://localhost:5000/api/generate",
        payload
      );
      navigate("/result", { state: { result: response.data.result } });
    } catch (err) {
      console.error("An error occurred:", err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <p>We are processing your request...</p>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="form-screen">
      <h1>Plan Your Dream Vacation with AI-Powered Itineraries</h1>
      <p>
        Discover your next destination, complete with personalized travel plans
        crafted by AI. Let us make your trip unforgettable!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Select the country you want to visit:
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select a country</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
          </select>
        </label>
        <label>
          Select the city you want to visit:
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select a city</option>
            <option value="Paris">Paris</option>
            <option value="Rome">Rome</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </label>
        <button type="submit">Generate Trip Plan</button>
      </form>
    </div>
  );
}

export default FormScreen;
