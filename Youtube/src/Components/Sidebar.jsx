import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
	BiVideoRecording,
	BiSolidVideos,
	BiHistory,
	BiSolidLike,
} from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="w-60 h-screen bg-white border-[2px] border-t-0 pt-2">
				<ul>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 bg-slate-200 rounded-lg cursor-pointer">
						<AiFillHome /> <p className="px-4">Home</p>
					</li>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 rounded-lg cursor-pointer">
						<BiVideoRecording /> <p className="px-4">Shorts</p>
					</li>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 rounded-lg cursor-pointer">
						<BiSolidVideos /> <p className="px-4">Subscriptions</p>
					</li>
				</ul>
				<div className="w-[96%] border border-gray-200 mx-1"></div>
				<ul>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 rounded-lg cursor-pointer">
						<BiSolidVideos /> <p className="px-4">Library</p>
					</li>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 rounded-lg cursor-pointer">
						<BiHistory /> <p className="px-4">History</p>
					</li>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 rounded-lg cursor-pointer">
						<MdWatchLater /> <p className="px-4">Watch Later</p>
					</li>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 rounded-lg cursor-pointer">
						<BiSolidLike /> <p className="px-4">Liked</p>
					</li>
				</ul>
				<div className="w-[96%] border border-gray-200 mx-1"></div>
                <ul>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 rounded-lg cursor-pointer">
						<AiFillHome /> <p className="px-4">Home</p>
					</li>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 rounded-lg cursor-pointer">
						<BiVideoRecording /> <p className="px-4">Shorts</p>
					</li>
					<li className="flex items-center p-2 mx-3 my-1 font-semibold hover:bg-slate-200 rounded-lg cursor-pointer">
						<BiSolidVideos /> <p className="px-4">Subscriptions</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
