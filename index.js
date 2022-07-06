var initialPrice = document.querySelector('#initial-price');


var stocksQuantity = document.querySelector('#stocks-quantity');

var currentPrice = document.querySelector('#current-price');

var submitBtn = document.querySelector('#submit-btn');

var outputBox = document.querySelector('#outputbox');

//Till her  e we have selected all elements

submitBtn.addEventListener('click', submiHandler);

function submiHandler() {
    var ip = "";
    if (initialPrice) {
        ip = initialPrice.value;
    }
    var qty = "";
    if (stocksQuantity) {
        qty = stocksQuantity.value;
    }
    var curr = "";
    if (currentPrice) {
        curr = currentPrice.value;
    }
    
    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial> current){
        //Loss 
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;
        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    }
    else if(current> initial){
        //Profit 
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        showOutput(`Hey the Profit is ${profit} and the percent is ${profitPercentage}%`);        
    }
    else{
        //Constant
        showOutput('No pain no gain and no gain no pain');
    }
}

function showOutput(msg){   
    document.getElementById('output-box').innerHTML = msg;
}
