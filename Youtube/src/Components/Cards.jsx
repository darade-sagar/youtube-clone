import React from "react";

const Cards = ({ id, snippet: video_data, statistics }) => {
	return (
		<div className="rounded-sm p-3 w-[33%] cursor-pointer">
			<div className="rounded-2xl overflow-hidden">
				<img src={video_data?.thumbnails?.high?.url} alt="" />
			</div>
			<div className="flex items-start mt-2">
				<div className="w-14 rounded-full overflow-hidden m-2">
					<img
						src="https://yt3.ggpht.com/ytc/AOPolaS6yG30UXJirpLCJGTK7zg04_eEzU30SKbppM13Iw=s68-c-k-c0x00ffffff-no-rj"
						alt=""
					/>
				</div>
				<div>
					<div className="text-xl font-semibold">
						{video_data?.localized?.title}
					</div>
					<div>{video_data?.channelTitle}</div>
					<div>
						{statistics?.viewCount} views -{" "}
						{video_data?.publishedAt.split("T")[0]}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
