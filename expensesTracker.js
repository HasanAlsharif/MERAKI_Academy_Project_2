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
const menuitem2 = $("<p class= 'menuitems' > Expenses </p>")
const menuitem3 = $("<p class= 'menuitems' > Savings </p>")
const menuitem4 = $("<p class= 'menuitems' > Month overview </p>")
const menuitem5 = $("<p class= 'menuitems' > Monthly expenses </p>")







//paragraphz************************************
const welcomto= $("<p class='welcometo'> Welcome to </p>")
const moto= $("<p class='moto'> ''Your money's best friend'' </p>")

//button main menu start--
const start = $("<p class='start'> Start saving now! >>> </p>")


// My Data **************************************
const mydatadiv1 = $("<div class='mydatadiv1'> </div>")
const mydatadiv2 = $("<div class='mydatadiv2'> </div>")


const lable1 = $("<p class= 'lables' > Salary: </p>")
const lable2 = $("<p class= 'lables' > Other monthly income:  </p>")
const lable3 = $("<p class= 'lables' > rent: </p>")
const lable4 = $("<p class= 'lables' > Car payment: </p>")
const lable5 = $("<p class= 'lables' > other installments: </p>")
const lable6 = $("<p class= 'lables' > House bills: </p>")
const lable7 = $("<p class= 'lables' > groceries: </p>")
const lable8 = $("<p class= 'lables' > mobile phone: </p>")
const lable9 = $("<p class= 'lables' > haircut: </p>")
const lable10 = $("<p class= 'lables' > clothes: </p>")
const lable11 = $("<p class= 'lables' > fuel: </p>")
const lable12 = $("<p class= 'lables' > miscellaneous: </p>")


const input1 = $("<input id='i1' type='number' class= 'inputs'>")
const input2 = $("<input id='i2' type='number' class= 'inputs'>")
const input3 = $("<input id='i3' type='number' class= 'inputs'>")
const input4 = $("<input id='i4' type='number' class= 'inputs'>")
const input5 = $("<input id='i5' type='number' class= 'inputs'>")
const input6 = $("<input id='i6' type='number' class= 'inputs'>")
const input7 = $("<input id='i7' type='number' class= 'inputs'>")
const input8 = $("<input id='i8' type='number' class= 'inputs'>")
const input9 = $("<input id='i9' type='number' class= 'inputs'>")
const input10 = $("<input id='i10' type='number' class= 'inputs'>")
const input11 = $("<input id='i11' type='number' class= 'inputs'>")
const input12 = $("<input id='i12' type='number' class= 'inputs'>")






const	backbutton = $("<button id='backbutton'> Back </button>")



// expenses *******************************************

const expensesdiv = $("<div class='expensesdiv'> </div>")

    const resulttext1 = $("<p class= 'results' > Total monthly income: </p>")
    const resulttext2 = $("<p class= 'results' > Total monthly expenses: </p>")
    const resulttext3 = $("<p class= 'results' > sum: </p>")
    const resulttext4 = $("<p class= 'results' > Amount for savings (20%): </p>")
    const resulttext5 = $("<p class= 'results' > Total Amount remaining: </p>")
    


    
    
    let result1 = $("<p id='r1' class= 'results' > 0 </p>")
    let result2 = $("<p id='r2' class= 'results' > 0 </p>")
    let result3 = $("<p id='r3' class= 'results' > 15 </p>")
    let result4 = $("<p id='r4' class= 'results' > 0 </p>")
    let result5 = $("<p id='r5' class= 'results' > 0 </p>")

    
    





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

mydatadiv1.appendTo(bodydiv)
mydatadiv2.appendTo(bodydiv)
    lable1.appendTo(mydatadiv1)
    lable2.appendTo(mydatadiv1)
    lable3.appendTo(mydatadiv1)
    lable4.appendTo(mydatadiv1)
    lable5.appendTo(mydatadiv1)
    lable6.appendTo(mydatadiv1)
    lable7.appendTo(mydatadiv1)
    lable8.appendTo(mydatadiv1)
    lable9.appendTo(mydatadiv1)
    lable10.appendTo(mydatadiv1)
    lable11.appendTo(mydatadiv1)
    lable12.appendTo(mydatadiv1)
    input1.appendTo(mydatadiv2)
    input2.appendTo(mydatadiv2)
    input3.appendTo(mydatadiv2)
    input4.appendTo(mydatadiv2)
    input5.appendTo(mydatadiv2)
    input6.appendTo(mydatadiv2)
    input7.appendTo(mydatadiv2)
    input8.appendTo(mydatadiv2)
    input9.appendTo(mydatadiv2)
    input10.appendTo(mydatadiv2)
    input11.appendTo(mydatadiv2)
    input12.appendTo(mydatadiv2)
backbutton.appendTo(bodydiv)


expensesdiv.appendTo(bodydiv)
    resulttext1.appendTo(expensesdiv)
    result1.appendTo(expensesdiv)
    resulttext2.appendTo(expensesdiv)
    result2.appendTo(expensesdiv)
    resulttext3.appendTo(expensesdiv)
    result3.appendTo(expensesdiv)
    resulttext4.appendTo(expensesdiv)
    result4.appendTo(expensesdiv)
    resulttext5.appendTo(expensesdiv)
    result5.appendTo(expensesdiv)
   
    
    
   
    

//css ***********************************************
// menuitem6.addClass("menuitems")

//Functionality ***********************************************

//const h = 16
//result1.html(h+1)
        
//let x = $("#i1").val()
//result1.text(x)



let income = 0
$("#i1").on("change",()=>{
 //because $("#i1").val() is a string
 income1 = Number($("#i1").val()) + Number($("#i2").val())
 
})

// $("#i2").on("change",()=>{
//    Number($("#i2").val()) 
//   income = income +  Number($("#i2").val())
//   })

  






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





//const xyz = .......
//xyz.hide() : to hide
//xyz.show()  : to show
//xyz.fadeIn(slow)
//xyz.fadeOut(slow)