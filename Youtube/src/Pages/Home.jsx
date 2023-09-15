import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import ButtonList from "../Components/ButtonList";
import CardBody from "../Components/CardBody";
import { getTrendingVideos } from "../Helper/HomeHelper";
import { YOUTUBE_TRENDING_VIDEO } from "../Constant/constants";

const Home = () => {
	

	return (
		<div>
			<Header />
			<div className="flex ">
				<Sidebar />
				<div className="ml-5">
					<ButtonList />
					<CardBody />
				</div>
			</div>
		</div>
	);
};

export default Home;
