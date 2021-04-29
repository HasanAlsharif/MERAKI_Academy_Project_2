/* how to add background to div
$('#divID').css("background-image", "url(/myimage.jpg)");  
Should do the trick, just hook it up in a click event on the element

$('#divID').click(function()
{
  // do my image switching logic here.
});
*/


/* how to creat ul and li

const menulist = $("<ul id='menulist'> </ul>");

menulist.append("<li> MyData </li>");
menulist.append("<li> month </li>");
menulist.append("<li> anything </li>");
menulist.append("<li> anything </li>");
menulist.append("<li> anything </li>");
menulist.append("<li> anything </li>");

menulist.appendTo(menudiv)

*/


const body = $("body");

//divz**************************************
const bodydiv = $("<div class='background'> </div>")
const maindiv = $("<div id='maindiv'> </div>")
const menudiv = $("<div class='menudiv'> </div>")


//headz**************************************
const mainh = $("<h1 class= 'myexpenses' > MyExpenses Tracker</h1>")
const button = $("<button> dsfjsdkf </button>")




//Main Menu***************************************
const menuheader = $("<h1 id= 'menuheader' > ≡ Main Menu</h1>")
const menuitem1 = $("<p class= 'menuitems' > My Data </p>")
const menuitem2 = $("<p class= 'menuitems' > Monthly expenses </p>")
const menuitem3 = $("<p class= 'menuitems' > Monthly expenses </p>")
const menuitem4 = $("<p class= 'menuitems' > Monthly expenses </p>")
const menuitem5 = $("<p class= 'menuitems' > Monthly expenses </p>")







//paragraphz************************************
const welcomto= $("<p class='welcometo'> Welcome to </p>")
const moto= $("<p class='moto'> ''Your money's best friend'' </p>")

//button main menu start--
const start = $("<p class='start'> Start saving now! >>> </p>")




//appendz***************************************

bodydiv.appendTo(body)
maindiv.appendTo(bodydiv)
menudiv.appendTo(bodydiv)
mainh.appendTo(maindiv)
moto.appendTo(maindiv)
welcomto.appendTo(maindiv)
start.appendTo(maindiv)

menuheader.appendTo(bodydiv)
menuitem1.appendTo(menudiv)
menuitem2.appendTo(menudiv)
menuitem3.appendTo(menudiv)
menuitem4.appendTo(menudiv)


//css ***********************************************
// menuitem6.addClass("menuitems")





//Dynamic********************************************

//main menu
//start button
$(start).on("mouseover", function(){
  $(start).addClass("overstartbutton")
})
$(start).on("mouseout", function(){
  $(start).removeClass("overstartbutton")
})

//------


$(".menuitems").on("mouseover", function(){
    $(this).addClass("overmenuitems")
})

$(".menuitems").on("mouseout", function(){
  $(this).removeClass("overmenuitems")
})






