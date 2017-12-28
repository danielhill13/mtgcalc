//Inputs
//Rate
//Down payment
//Home Amount
//Homeowners insurance
//Tax Rate
//HOA
//term


function mtgPymt (rate, dp, homeprice, ins, tax, hoa, term){
    console.log("Given an interest rate of " + rate * 100 + "%, a down payment of "+ dp + ", purchase price of "+ homeprice + ", yearly home insurance cost of " + ins + ", yearly HOA of " + hoa + ", and a payment term of " + term / 12 + "years..." );
    principal = homeprice - dp;
    PI(rate, term, principal);
    Taxes(tax, homeprice);
    Hoa(hoa);
    Insurance(ins);
    payment = (hoaPayment + insPayment + taxPayment + piPayment) ;
    
    console.log("HOA: $" +hoaPayment);
    console.log("Total monthly payment will be: $" +payment);
    return payment;
}
function PI(rate, term, principal) {
    rate = rate / 12;
    pAndITop = rate * Math.pow(1 + rate, term);
    pAndIBottom = Math.pow(1 + rate, term) - 1;
    piPayment = principal * (pAndITop / pAndIBottom);
    console.log("Principal + Interest: $"+ piPayment);
    return piPayment;
}
function Taxes(taxrate, homeprice) {
    taxPayment = (homeprice * taxrate) / 12;
    console.log("Taxes $"+taxPayment);
    return taxPayment;
}
function Hoa (hoa){
    hoaPayment = hoa/12;
    return hoaPayment;
}
function Insurance (ins){
    insPayment = ins/12;
    return insPayment;
}
mtgPymt (.06125, 154600, 386500, 1500, 0.0225, 0, 360);
//Outputs
//P&I per month
//Taxes per month
//Insurance per month
//HOA per month
//Total monthly payment


//v2 - principal vs interest over each payment
