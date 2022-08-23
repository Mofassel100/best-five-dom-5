

let allPlayerNames = [];
function updatePlayerNames(element){
    if(allPlayerNames.length === 6){

        alert('please Maximum six playe select');
        return alert;
    }
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
 updatePlayerNames(allPlayerNames);
const headAdd = document.getElementById('add');
headAdd.innerText = allPlayerNames.length;
updatePerPlayerExp(allPlayerNames)

// select btn disable
text.disabled =true;


}

// ----------------names add end-------------------------


// -----Players cost btn one start now-------
let calcNamesTotal = 1;
function updatePerPlayerExp(calculate){
    let perPlayerRate =1+1;
    perPlayerRate.textContent ='';
    for (let i =0 ; i< calculate.length; i++){
        perPlayerRate = `${i+1}`;
    }
    return perPlayerRate;
}

function PlayerExpensesTotal (){
const previTotalPlayer
    =updatePerPlayerExp (allPlayerNames);                      
const perPlayerFild = document.getElementById('per-player-cost');
const perPlayerSt= perPlayerFild.value;
const newPerPlayerFild = parseInt(perPlayerSt);
const totalExpent = newPerPlayerFild * previTotalPlayer;
const playerTotalExpen = document.getElementById('player-total-cost');
playerTotalExpen.innerText = totalExpent;

return playerTotalExpen;

}

document.getElementById('cal-btn').addEventListener('click',function(){

    PlayerExpensesTotal ()
    
})

// ---------------Player cost total one end-------------------
//------------ Team total cost  start ----
function totalTeamCost ( ){

    const playerTotalExpense = PlayerExpensesTotal();
    const playerTotalExpenseS= playerTotalExpense.innerText;
    const playerTotalExpenseNum = parseInt(playerTotalExpenseS)
    const managerInputFildPrice = document.getElementById('manager-cost');
    const managerInputFildStringPrice= managerInputFildPrice.value;
    const newManagerTotalPric = parseInt(managerInputFildStringPrice);
    const coachPriceFild = document.getElementById('coach-cost');
    const coachPriceFildDaSt= coachPriceFild.value;
    const coachTotalPrice = parseInt(coachPriceFildDaSt);
    const totalCost = playerTotalExpenseNum + newManagerTotalPric + coachTotalPrice;
    const totalCalcoCost = document.getElementById('team-all-cost');
    totalCalcoCost.innerText =totalCost;

}

document.getElementById('calcolate-btn-two').addEventListener('click',function(){

    totalTeamCost  ( )
})
// ------  team total cost  end  ------




