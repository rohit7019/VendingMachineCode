var VM = {

/* main.js */
/* coins object */
coins : {
    nickel: {
            weight: 5,
            size: 1,
            value: .05
    },
    dime: {
            weight: 10,
            size: 2,
            value: .10
    },
    quarter: {
            weight: 15,
            size: 3,
            value: .25
    }
},

/* products object */
products : { 
             coke: {
                    price: 1, stock: 10
                },
             chips:{
                    price:.5, stock: 10 
                }, 
             candy:{
                    price:.65, stock: 10
                } 
            },

init : function(){
this.totalAmountText = document.getElementById("total_amount");
var balanceAmountText = document.getElementById("balance_amount");
var totalAmount = parseInt(this.totalAmountText.value);
this.checkTotalAmount(totalAmount);

this.cokeButton = document.getElementById("coke");
this.chipsButton = document.getElementById("chips");
this.candyButton = document.getElementById("candy");

this.cokeStock = document.getElementById("coke_count");
this.chipsStock = document.getElementById("chips_count");
this.candyStock = document.getElementById("candy_count");

var doneButton = document.getElementById("done");
var self = this;
/* initilize stock info */
this.cokeStock.innerHTML = this.products.coke.stock;
this.chipsStock.innerHTML = this.products.chips.stock;
this.candyStock.innerHTML = this.products.candy.stock;

/* Complete the operation */
doneButton.addEventListener("click", function(){
    if(self.totalAmountText.value != 'Insert Coins'){
        balanceAmountText.value = self.totalAmountText.value;
        
        self.cokeButton.disabled = true;
        chipsButton.disabled = true;
        candyButton.disabled = true;

        self.totalAmountText.value = "Insert Coins";
    }
});

/* Manage coins */
var nickelButton = document.getElementById("nickel");
nickelButton.addEventListener("click", function(){
    totalAmount += self.coins.nickel.value;
    self.checkTotalAmount(totalAmount);
});

var dimeButton = document.getElementById("dime");
dimeButton.addEventListener("click", function(){
    totalAmount += self.coins.dime.value;
    self.checkTotalAmount(totalAmount);
});

var quarterButton = document.getElementById("quarter");
quarterButton.addEventListener("click", function(){
    totalAmount += self.coins.quarter.value;
    self.checkTotalAmount(totalAmount);
});

/* Manage products selection*/
self.cokeButton.addEventListener("click", function(){
    totalAmount -= self.products.coke.price;
    self.updateStock('coke');
    self.checkTotalAmount(totalAmount);
});

self.chipsButton.addEventListener("click", function(){
    totalAmount -= self.products.chips.price;
    self.updateStock('chips');
    self.checkTotalAmount(totalAmount);
});

self.candyButton.addEventListener("click", function(){
    totalAmount -= self.products.candy.price;
    self.updateStock('candy');
    self.checkTotalAmount(totalAmount);
});
},

/* Function to update total amount on product selection and coin insert */
checkTotalAmount : function(amount){
    amount = amount.toFixed(2);

     if((amount > 0)){
        this.totalAmountText.value = amount;

        if(amount >= 1){
            this.cokeButton.disabled = false;
            this.chipsButton.disabled = false;
            this.candyButton.disabled = false;
        } else if(amount >= .65){
            this.cokeButton.disabled = true;
            this.chipsButton.disabled = false;
            this.candyButton.disabled = false;
        } else if(amount >= .5){
            this.cokeButton.disabled = true;
            this.chipsButton.disabled = false;
            this.candyButton.disabled = true;
        }
     } else{
        this.totalAmountText.value = "Insert Coins";
     }   
},

/* update product stock */
updateStock: function(item){
    if(item == 'coke'){
        this.products.coke.stock -=1;
        if(this.products.coke.stock > 0){
            this.cokeStock.innerHTML = this.products.coke.stock;
        } else {
            this.cokeStock.innerHTML = "Out of stock";
        } 
    } else if(item == 'chips'){
        this.products.chips.stock -=1;
        if(this.products.chips.stock > 0){
            this.chipsStock.innerHTML = this.products.chips.stock;
        }  else {
            this.chipsStock.innerHTML = "Out of stock";
        }
    } else if(item == 'candy'){
        this.products.candy.stock -=1;
        if(this.products.candy.stock > 0){
            this.candyStock.innerHTML = this.products.candy.stock;
        }  else {
            this.candyStock.innerHTML = "Out of stock";
        }
    }
}
};

VM.init();

