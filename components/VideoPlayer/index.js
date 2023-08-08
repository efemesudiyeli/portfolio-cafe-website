"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function VideoPlayer({ url }) {
  return (
    <ReactPlayer
      width={"100%"}
      height={"100%"}
      volume={0.2}
      url={url}
      controls={true}
    />
  );
}
