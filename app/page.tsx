import FontSelector from "@/components/font-selector";
import StorySelector from "@/components/story-selector";
import VideoBackgrounds from "@/components/video-backgrounds";
import VoiceSelector from "@/components/voice-selector";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Select Story Type */}
      <StorySelector />

      {/* Video Backgrounds */}
      <VideoBackgrounds />

      {/* Fonts */}
      <FontSelector />

      {/* Preview Series */}
      <VoiceSelector />
    </div>
  );
}
