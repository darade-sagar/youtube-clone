import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { YOUTUBE_TRENDING_VIDEO } from "../Constant/constants";

const CardBody = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetch(YOUTUBE_TRENDING_VIDEO).then((resp) =>
			resp.json().then((data) => setVideos(data.items))
		);
	}, []);

	console.log(videos);
	return (
		<div className="flex gap-1 flex-wrap">
			{videos.map((item) => (
				<Cards key={item.etag} {...item} />
			))}
		</div>
	);
};

export default CardBody;
