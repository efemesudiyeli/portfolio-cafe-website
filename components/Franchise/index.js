import VideoPlayer from "../VideoPlayer";

import { Sedgwick_Ave } from "next/font/google";
const sedgwick = Sedgwick_Ave({ subsets: ["latin"], weight: "400" });

export default function Clickables() {
  return (
    <div id="franchise" className="bg-base-100 text-white">
      <div className="p-5 flex justify-center gap-52 items-center max-lg:flex-col max-lg:gap-20 max-lg:py-20 max-lg:px-0">
        <div className="flex justify-center items-center flex-col max-lg:px-5">
          <h2
            className={`font-extrabold text-6xl self-start ${sedgwick.className}`}
          >
            Franchise!
          </h2>
          <p className="max-w-2xl ">
            It&apos;s time to start your dream business! We offer you an
            opportunity that will bring you success and profitability: &nbsp;
            <span className="text-base-100 bg-white">[Franchise Name]</span>
            &nbsp; Franchise is the most reliable way to start and grow your own
            business!
          </p>
          <button className="bg-base-100 border-2 border-white px-5 py-2 self-start mt-5">
            Details
          </button>
        </div>
        <div className="aspect-video w-[35rem] max-lg:w-full max-lg:px-0">
          <VideoPlayer url={"https://www.youtube.com/watch?v=xPPLbEFbCAo"} />
        </div>
      </div>
    </div>
  );
}
