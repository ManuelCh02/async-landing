const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=9jb2QB7d-Io&part=id%2Csnippet&type=video&maxResults=1';
const contentYt = null || document.getElementById('content');

const optionsYt = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c51a967650msh0842f3095b8d4f7p13e650jsnf31713522403',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, optionsYt)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const video = await fetchData(url)
        const view = `
            ${video.items.map(element =>  `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${element.snippet.thumbnails.medium.url}" alt="${element.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${element.snippet.title}
                        </h3>
                    </div>
                </div>  
            `).slice(0, 4).join('')}
        `;
        contentYt.innerHTML = view
    } catch (error) {
        console.error(error)
    }
})();