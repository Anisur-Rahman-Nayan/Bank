
function getInputValue(inputid){
    const inputField = document.getElementById(inputid);
    const inputAmount = inputField.value;
    
    inputField.value = ''  
    
    return inputAmount
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId)
    const totalText = totalElement.innerText
    const newTotal = parseFloat(totalText) + parseFloat(amount)
    totalElement.innerText = newTotal
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalText = balanceTotal.innerText
    return parseFloat(previousBalanceTotalText)
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = getCurrentBalance()
    
    if (isAdd == true){
        const newBalanceTotal = parseFloat(previousBalanceTotal) +  parseFloat(amount)
        balanceTotal.innerText = newBalanceTotal
    }
    else{
        const newBalanceTotal = parseFloat(previousBalanceTotal) -  parseFloat(amount)
        balanceTotal.innerText = newBalanceTotal
    }
}


document.getElementById('deposit-button').addEventListener('click', function(){
    
    const depositAmount = getInputValue('deposit-input')
    
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount)
        updateBalance(depositAmount, true);
    }   
});


document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    
    if (withdrawAmount > 0 && withdrawAmount < currentBalance ){
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false)
    }     
})