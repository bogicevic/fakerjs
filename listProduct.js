var faker = require("faker");

function giveMe(){
    var productName = faker.commerce.productName();
    var price = faker.commerce.price();
    console.log(productName + ' \t- \t$' + price);
}

for(var i = 0; i < 10; i++) {
    giveMe();
}