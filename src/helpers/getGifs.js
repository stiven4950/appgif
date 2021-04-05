export const getGifs = async (category)=>{
    const apiKey = 'B5X3LyiMeo52AiPngAhm25E8VitPE6vU';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=`+apiKey;

    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });
    
    return gifs;
}