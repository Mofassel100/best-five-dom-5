

let allPlayerNames = [];




function display(element){
      
    
    const playerNameAdd= document.getElementById('player-names');
    playerNameAdd.textContent = '';
    
    for (let i = 0; i < element.length; i++){

const names= element[i]
const li = document.createElement('li');
li.innerText = names;
playerNameAdd.appendChild(li); 
    }

}

function playerNameAdd(text){
const playerName =text.parentNode.parentNode.children[0].innerText;
allPlayerNames.push(playerName); 
display(allPlayerNames);
const headAdd = document.getElementById('add');
headAdd.innerText = allPlayerNames.length;
caculatPlayerExp(allPlayerNames);

}

// -----------------------------------------
// -----calcolat btn start now-------
let calcNamesTotal = 1;
function caculatPlayerExp(element){
    let calcExpenBtn =1+1;
    calcExpenBtn.textContent ='';
    for (let i =0 ; i< element.length; i++){
    calcExpenBtn = `${i+1}`;
    }
    return calcExpenBtn;
}

function totalExpenses (){
const previTotalPlayer
    =caculatPlayerExp (allPlayerNames);
                       
const perPlayerFild = document.getElementById('per-player-cost');
perPlayerFild.value = '';
if(typeof perPlayerFild !=='number'){
    return alert('Please Enter your number')
}
const perPlayerSt= perPlayerFild.value;
const newPerPlayerFild = parseInt(perPlayerSt);
const totalExpent = newPerPlayerFild * previTotalPlayer;
const playerTotalExpen = document.getElementById('player-total-cost');
playerTotalExpen.innerText = totalExpent;
return playerTotalExpen;

}

document.getElementById('cal-btn').addEventListener('click',function(){

    totalExpenses ()
    
})

// ---------------calcolate btn one end-------------------
//------------ calcolate  bnt two start ----
function calcolBtnTwoExpenses ( ){

    const playerTotalExpense = totalExpenses();
    const playerTotalExpenseS= playerTotalExpense.innerText;
    const playerTotalExpenseNum = parseInt(playerTotalExpenseS)
    const managerInputFildPrice = document.getElementById('manager-cost');
    managerInputFildPrice.value ='';
    if(typeof managerInputFildPrice !=='number'){
        return alert('Please Enter your number')
    }
    const managerInputFildStringPrice= managerInputFildPrice.value;
    const newManagerTotalPric = parseInt(managerInputFildStringPrice);
    const coachPriceFild = document.getElementById('coach-cost');
    coachPriceFild.value = '';
    if(typeof coachPriceFild !=='number'){
        return alert('Please Enter your number')
    }
    const coachPriceFildDaSt= coachPriceFild.value;
    const coachTotalPrice = parseInt(coachPriceFildDaSt);
    const totalCost = playerTotalExpenseNum + newManagerTotalPric + coachTotalPrice;
    const totalCalcoCost = document.getElementById('team-all-cost');
    totalCalcoCost.innerText =totalCost;

}

document.getElementById('calcolate-btn-two').addEventListener('click',function(){

    calcolBtnTwoExpenses ( )
})




