"use client";


import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "998ddd880ebbd3f0a598d860443c5d7f";

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Хотын нэр оруулна уу.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();
      console.log("API RESPONSE:", data);

      if (data.cod === "404") {
        setError("City not found");
      } else if (data.cod === 401) {
        setError("Invalid API Key");
      } else {
        setWeather(data);
      }
    } catch {
      setError("API-тай холбогдож чадсангүй.");
    } finally {
      setLoading(false);
    }
  };

  return (
 
    <div className="flex flex-col items-center p-6 bg-white-200">
      <h1 className="text-3xl font-bold mb-4">Цаг агаар</h1>

      <form onSubmit={fetchWeather} className="flex gap-2 mb-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Хотын нэр..."
          className="border px-3 py-1 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Хайх
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {weather && weather.main && (
        <div className="p-4 border rounded bg-white text-center shadow-md">
          <h2 className="text-xl font-semibold">{weather.name}</h2>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
            alt="weather icon"
            className="mx-auto"
          />

          <p className="text-2xl">{Math.round(weather.main.temp)}°C</p>
          <p className="capitalize">{weather.weather?.[0].description}</p>
        </div>
      )}
    </div>
  );
}
