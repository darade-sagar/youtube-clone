import React from "react";
import { CgMenu } from "react-icons/cg";
import { GrSearch } from "react-icons/gr";
import { BiVideoPlus } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
	return (
		<div className="main-div flex items-center justify-between px-6">
			<div className="left flex items-center">
				<div className="menu text-2xl">
					<CgMenu />
				</div>
				<div className="logo w-32 px-2">
					<img
						alt="YouTube"
						src="https://i.gadgets360cdn.com/large/youtube_logo_new_official_1504077880072.jpg"
					/>
				</div>
			</div>
			<div className="middle">
				<div className="box flex items-center border px-5 py-1 rounded-full w-[30rem] border-gray-400">
					<div>
						<input
							type="text"
							className="w-[26rem] focus:outline-none pb-[2px]"
							placeholder="Search"
						/>
					</div>
					<div className="text-2xl pl-2 w-1/5 cursor-pointer">
						<GrSearch />
					</div>
				</div>
			</div>
			<div className="right text-3xl flex items-center gap-5">
				<div>
					<BiVideoPlus />
				</div>
				<div>
					<MdNotificationsNone />
				</div>
				<div>
					<FaUserCircle />
				</div>
			</div>
		</div>
	);
};

export default Header;
