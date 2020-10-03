import axios from 'axios';

export const fetchShow = () => {
	return axios
		.get(
			'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error('error fetching data from server', err.message);
			return err;
		});
};
