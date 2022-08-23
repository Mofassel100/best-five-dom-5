

let allPlayerNames = [];

let calcNamesTotal = 1;






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
// calcolat btn start now
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
const perPlayerSt= perPlayerFild.value;
const newPerPlayerFild = parseInt(perPlayerSt);
const totalExpent = newPerPlayerFild * previTotalPlayer;
const playerTotalExpen = document.getElementById('player-total-cost');
playerTotalExpen.innerText = totalExpent;

}


// calculate btn add 
document.getElementById('cal-btn').addEventListener('click',function(){

    totalExpenses ()
    
})

// --------------------------
// calcolate total cost 

document.getElementById('').addEventListener('click',function(){

    const playerExpense = totalExpenses();
    const managerInputFildPrice = document.getElementById('');
    const managerInputFildStringPrice= managerInputFildPrice.value;
    const newManagerTotalPric = parseInt(managerInputFildStringPrice);
    const coachPriceFild = document.getElementById('');
    const coachPriceFildDaSt= coachPriceFild.value;
    const coachTotalPrice = parseInt(coachPriceFildDaSt);
    const totalCost = playerExpense + newManagerTotalPric + coachTotalPrice;
    const totalCalcoCost = document.getElementById('');
    totalCalcoCost.innerText =totalCost;
})




