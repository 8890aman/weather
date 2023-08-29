async function getweather(){
document.getElementById("city").style.display="block";
document.getElementById("temperature").style.display="block";
document.getElementById("card").style.display="flex";

const app=document.querySelector("#text");
const titlle=document.getElementById("searching");
const change=document.getElementById("title");
let a=titlle.value;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${a}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1c04f650dmshb6442534fcc5c3ep1f68ccjsn453b912605ea',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    app.innerHTML=result.temp;
    change.innerHTML=a;
    // console.log(titlle);

} catch (error) {
	console.error(error);
}
}
let app=document.querySelector("#go");
app.addEventListener('click',getweather);