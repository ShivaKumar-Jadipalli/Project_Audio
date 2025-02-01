"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [videoId, setVideoId] = useState("");
  const [subtitles, setSubtitles] = useState("");
  const [error, setError] = useState("");

  const fetchSubtitles = async () => {
    setError("");
    setSubtitles("");

    if (!videoId) {
      setError("Please enter a video ID.");
      return;
    }

    try {
      const response = await axios.get(`/api/get-subtitles`, {
        params: {
          videoId: videoId,
          apiKey: "AIzaSyBi9xPEjtz_OvFQfkceLYrmQuXurIskfKo", // Replace with your YouTube Data API Key
        },
      });

      setSubtitles(response.data);
    } catch (err) {
      setError("Failed to fetch subtitles. Ensure the video has captions.");
    }
  };

  return (
    <div>
      <h1>YouTube Subtitles Fetcher</h1>
      <input
        type="text"
        placeholder="Enter Video ID"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
      />
      <button onClick={fetchSubtitles}>Fetch Subtitles</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {subtitles && (
        <textarea
          rows={10}
          cols={80}
          value={subtitles}
          readOnly
          style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}
        />
      )}
    </div>
  );
}
