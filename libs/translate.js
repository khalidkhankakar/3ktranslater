export const  translate = async (para, target, source) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('q', para);
    encodedParams.set('target', target || 'ur');
    encodedParams.set('source', source || 'en');
    console.log(target, " ---- ", source)

    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key':'188f914a41msh1173a21487141aap17c814jsnb145380aef56',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  body: encodedParams
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    return result
} catch (error) {
	console.error(error);
}



}



