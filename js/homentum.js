
Promise.all([
    axios.get('https://api.unsplash.com/photos/random?client_id=7ea3e9557fecd65d37b6243dbce305c7f9b828d9f9bc50834f296a457d8c87cf'),
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jeddah&appid=c0fb267174951b83c92a4099ea15a58d'),
    axios.get('https://api.quotable.io/random')
]).then(([backgroundResult, weatherRuslt,qouteResult]) => {

    const bg = backgroundResult.data.urls.full;
    $('body').css('background-image', 'url(' + bg + ')'); 

    const cityName = weatherRuslt.data.name
    let temp = weatherRuslt.data.main.temp;
    temp = parseFloat(temp-273.15)
   $ ('.weather').append(`<h1>${cityName}</h1>`)
   $ ('.weather').append(`<h3>${temp}° C</h3>`) 
   let qoute = qouteResult.data.content
   $ ('.qoute').append(`<h3>${qoute}</h3>`) 

//    console.log(qouteResult);
   

  })
.catch((err) => {
    console.log(err);
    
    
});
  



setInterval(function(){
        
    $('.time').text(moment().format('LTS'))

},1000)

