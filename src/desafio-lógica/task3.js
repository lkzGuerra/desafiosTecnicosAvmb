
var json = '{"age": "28"}';

function JsonConvert(json){
    var myObj = JSON.parse(json);
    return myObj;    
}

console.log(JsonConvert(json));

