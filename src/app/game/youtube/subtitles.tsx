import axios from "axios";

export default async function handler(req, res) {
  const { videoId, apiKey } = req.query;

  if (!videoId || !apiKey) {
    return res.status(400).json({ error: "Video ID and API Key are required" });
  }

  try {
    // Step 1: Get available captions for the video
    const captionsResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${apiKey}`
    );

    const captions = captionsResponse.data.items;

    if (!captions || captions.length === 0) {
      return res
        .status(404)
        .json({ error: "No captions available for this video." });
    }

    // Step 2: Get the first caption ID
    const captionId = captions[0].id;

    // Step 3: Download the caption in SRT format
    const srtResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/captions/${captionId}?tfmt=srt&key=${apiKey}`,
      { responseType: "text" }
    );

    // Step 4: Return the SRT file content
    res.setHeader("Content-Type", "text/plain");
    res.send(srtResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch subtitles." });
  }
}
