from youtube_transcript_api import YouTubeTranscriptApi

# Fetch subtitles for a specific video
video_id = "YVkUvmDQ3HY"  # Replace with the actual video ID
transcript = YouTubeTranscriptApi.get_transcript(video_id)

# Print subtitles
for entry in transcript:
    print(f"{entry['start']} - {entry['text']}")