// sample16/loadFile.js
function getHtmlFile() {

  $("#scriptTarget").load("articleName.html");
};

function setText() {

  $("#scriptTarget").css({
    "color": "darkorange",
    "font-weight": "bold"
  });

};

/*
fetch('URL_GOES_HERE', { 
   method: 'post', 
   headers: new Headers({
     'Authorization': 'Basic '+btoa('username:password'), 
     'Content-Type': 'application/x-www-form-urlencoded'
   }), 
   body: 'A=1&B=2'
 }); 
*/
// thanks to https://stackoverflow.com/a/35780539/307454
//let authObj = {
authObj = { 
  method: 'get',
  headers: new Headers({
  'Authorization': 'Basic ' + btoa(
	// place your token below in user:token format
      ) 
  }) 
  //body: 'A=1&B=2'

  // function encode(string) {
      //     var array = string.split("");
      //     var output = [];
      //     array.forEach(letter => {
      //         output.push(letter.charCodeAt() + 1);
      //     });
      //     string = output.join(",");
      //     return string;
      // }


      // function decode(string) {
      //     var array = string.split(",");
      //     var output = [];
      //     array.forEach(charCode => {
      //         output.push(String.fromCharCode(charCode - 1));
      //     });
      //     string = output.join("");
      //     return string;
      // }

      // usage:
      // var definitelyNotMySecretAPIKey = encode("e8e3ee385207b5df5983a572fb185dd429ef04ec");
      // var apiKey = decode(definitelyNotMySecretAPIKey);
  
}
