var keylist="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var temp=''

function generatepass(plength){
temp=''
for (i=0; i <plength; i++)
temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
return temp
}

function populateform(enterlength){
document.pgenerate.output.value=generatepass(enterlength)
}

//function myFunction() {
    //var copyText = document.getElementByid(temp);
    //copyText.select();
    //copyText.setSelectionRange(0, 99999)
    //document.execCommand("copy");
    //alert("Copied the text: " + copyText.value);
 // }

