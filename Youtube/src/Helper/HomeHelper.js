import { YOUTUBE_TRENDING_VIDEO } from "../Constant/constants";

export const getTrendingVideos = async () => {
	const resp = await fetch(YOUTUBE_TRENDING_VIDEO);
	const data = await resp.json();
	return data;
};
