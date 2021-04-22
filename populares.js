window.onload = function(){
  fetch("https://api.giphy.com/v1/gifs/trending?api_key=btJRSainTIF9pLSn64Jkp8NQX8D43g0D")
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    for(let i = 0; i < data.data.length; i++){
      let gif = '<p>' + data.data[i].title + '</p>';
      gif += '<img src=' + data.data[i].images.original.url +'>'
      document.querySelector('ul').innerHTML += '<li>'+ gif + '</li>';
    }
  })
}