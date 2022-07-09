//Fetch Api start
const getjokes = async() => {
    const abc = await fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": '3e76d9a4e2msh6353427a523c5dbp1d7fc3jsn5c2eec0d2042',
        }
    })
    .then((response) => response.json())
    .then(response => {
        document.getElementById('quote').innerHTML = response.content; 
        document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
    })
    .catch((err) => {
        console.log(err);
    });
}
//Fetch Api end


//window object || when window load getjokes() function will call
window.addEventListener("load",()=>{
    getjokes();
})