'use server'

import fetch from 'node-fetch';
import https from 'https';

interface VideoProps {
  video_link: string;
  internet_enable: boolean;
  keywords: string[];
  writing_style: string;
  font_style: string;
  voiceId: string
  prompt: string;
}

export async function fetchVideoUrl({
  video_link,
  internet_enable,
  keywords,
  writing_style,
  font_style,
  voiceId,
  prompt
}: VideoProps) {
  const url = 'https://server.viravid.pro/agent-executor';
 console.log('clicked')
  // Define the body of the POST request
  const requestBody = {
    video_link,
    internet_enable,
    keywords,
    writing_style,
    font_style,
    voiceId,
    prompt
  };
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  try {
    // Make the POST request to the external server
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
      agent:agent
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the JSON response
    const data = await response.json();
    // @ts-ignore
    console.log(data.url)
    // @ts-ignore
    return data.url
  } catch (error) {
    // Handle errors
    console.error('Error fetching video URL:', error);
   
  }

}