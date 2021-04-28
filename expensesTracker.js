const body = $("body");

const maindiv = $("<div id='maindiv'> </div>")


const mainh = $("<h1 id= 'mainh' >Welcome to MyExpenses Tracker</h1>")



const moto= $("<p id='moto'> Your money's best friend </p>")



maindiv.appendTo(body)
mainh.appendTo(maindiv)
moto.appendTo(maindiv)


