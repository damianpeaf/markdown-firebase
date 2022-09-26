import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type VideoProps = {
  video: string;
  height: string;
  width: string;
};

export const YoutubeVideoComponent = ({ video, height, width }: VideoProps) => {
  const opts: YouTubeProps["opts"] = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };
  return <YouTube videoId={video} opts={opts} />;
};
