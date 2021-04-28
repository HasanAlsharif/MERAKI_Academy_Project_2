const body = $("body");

//divz
const bodydiv = $("<div id='bodydiv'> </div>")
const maindiv = $("<div id='maindiv'> </div>")
const menudiv = $("<div id='menudiv'> </div>")
const boxesdiv = $("<div id='boxesdiv'> </div>")

//headz
const mainh = $("<h1 id= 'mainh' >Welcome to MyExpenses Tracker</h1>")
const menuh = $("<h1 id= 'menuh' >Main Menu</h1>")




//paragraphz
const moto= $("<p id='moto'> Your money's best friend </p>")


//appendz

bodydiv.appendTo(body)
maindiv.appendTo(bodydiv)
menudiv.appendTo(bodydiv)
mainh.appendTo(maindiv)
moto.appendTo(maindiv)
menuh.appendTo(menudiv)

//css
bodydiv.css({
"background-image": "url(./1.jpg)",
"position":"fixed",
"width":"100%",
"height":"100%",
"top":"0px",
"left":"0px",
"z-index":"1000",
})





/* how to add background to div
$('#divID').css("background-image", "url(/myimage.jpg)");  
Should do the trick, just hook it up in a click event on the element

$('#divID').click(function()
{
  // do my image switching logic here.
});
*/


