import fetch from 'isomorphic-fetch'

export const getQuote = async url=>{
	const res = await fetch('https://api.kanye.rest');
	const data = await res.json();

	return{quote: data.quote};
}
