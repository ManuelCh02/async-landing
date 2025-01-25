// import fetch from "node-fetch";
const API = 'https://spotify23.p.rapidapi.com/episode/?id=3oNXX70hN1CIMuduUNNwJs';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c51a967650msh0842f3095b8d4f7p13e650jsnf31713522403',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const video = await fetchData(API)
        let view = `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.data.episodeUnionV2.coverArt.sources[1].url}" alt="${video.data.episodeUnionV2.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.data.episodeUnionV2.name}
                    </h3>
                </div>
            </div>         
        `;
        content.innerHTML = view
    } catch (error) {
        console.error(error)
    }
})();