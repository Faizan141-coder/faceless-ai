import axios from "axios";

export async function getAgentExecutor() {
    try {
        const response = await axios.post(
          "https://server.viravid.pro/agent-executor",
          {
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              video_link:
                "https://res.cloudinary.com/dahjaauna/video/upload/v1723055976/4_edited_gzk1qa.mp4",
              internet_enable: true,
              keywords: ["Steve Jobs", "Apple"],
              writing_style: "Motivation",
              font_style: "Arial",
              voiceId: "29vD33N1CtxCmqQRPOHJ",
              prompt: "",
            }),
          }
        );
  
        const data = await response.data
        console.log(data)
        console.log(data.url)
        return data.url // Set the video URL here
      } catch (error) {
        console.error("Error creating series:", error);
      }
}