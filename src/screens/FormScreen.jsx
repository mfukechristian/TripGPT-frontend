import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FormScreen.css";
import axios from "axios";
import countriesData from "../data/countries.json";

function FormScreen() {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
  });
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData({ ...formData, country: selectedCountry, city: "" });

    // Find cities for the selected country
    const country = countriesData.data.find(
      (item) => item.country === selectedCountry
    );
    setCities(country ? country.cities : []);
  };

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
        <p>We are processing your request. This may take a few minutes...</p>
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
            onChange={handleCountryChange}
            required
            style={{
              cursor: formData.country ? "pointer" : "default",
            }}
          >
            <option value="">Select a country</option>
            {countriesData.data.map((country) => (
              <option key={country.iso2} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select the city you want to visit:
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            disabled={!formData.country}
            style={{
              cursor: formData.country ? "pointer" : "not-allowed",
            }}
          >
            <option value="">Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          style={{
            cursor:
              formData.country && formData.city ? "pointer" : "not-allowed",
          }}
          disabled={!formData.country || !formData.city}
        >
          Generate Trip Plan
        </button>
      </form>
    </div>
  );
}

export default FormScreen;
