/* how to add background to div
$('#divID').css("background-image", "url(/myimage.jpg)");  
Should do the trick, just hook it up in a click event on the element

$('#divID').click(function()
{
  // do my image switching logic here.
});
*/


const body = $("body");

//divz
const bodydiv = $("<div id='bodydiv'> </div>")
const maindiv = $("<div id='maindiv'> </div>")
const menudiv = $("<div id='menudiv'> </div>")
const boxesdiv = $("<div id='boxesdiv'> </div>")

//headz
const mainh = $("<h1 id= 'mainh' > MyExpenses Tracker</h1>")
const menuh = $("<h1 id= 'menuh' >Main Menu</h1>")




//ul
const menulist = $("<ul id='menulist'> </ul>");

menulist.append("<li> anything </li>");
menulist.append("<li> anything </li>");
menulist.append("<li> anything </li>");
menulist.append("<li> anything </li>");
menulist.append("<li> anything </li>");
menulist.append("<li> anything </li>");






//paragraphz
const welcomto= $("<p id='welcometo'> Welcome to </p>")
const moto= $("<p id='moto'> Your money's best friend </p>")
//button main menu start
const start = $("<p id='start'> Start saving now! >>> </p>")

//appendz

bodydiv.appendTo(body)
maindiv.appendTo(bodydiv)
menudiv.appendTo(bodydiv)
mainh.appendTo(maindiv)
moto.appendTo(maindiv)
welcomto.appendTo(maindiv)
start.appendTo(maindiv)

menuh.appendTo(menudiv)
menulist.appendTo(bodydiv)


//css
bodydiv.addClass("backgroundclass")
mainh.addClass("myexpensesclass")
welcomto.addClass("welcometoclass")
moto.addClass("motoclass")
start.addClass("start")



//Dynamic

//main menu

$(start).on("mouseover", function(){
  $(start).addClass("mouseover")
})

$(start).on("mouseout", function(){
  $(start).removeClass("mouseover")
})







