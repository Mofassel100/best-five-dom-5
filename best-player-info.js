// player name add total 5 player information

let allPlayerNames = []




// create elment and text 


function createTExtAdd (){
    const createAllName = document.getElementById('player-names-added');
    createAllName.innerText = allPlayerNames.length;
    createAllName.textContent ='';

    for (let x=0; x<allPlayerNames.length; x++){

        const list = document.createElement('li');
        list.innerHTML=`       <li>${x+1} </li>
        <li>
 ${allPlayerNames[x].playerName}

        </li>`;
        createAllName.appendChild(list);
      

    }
}


// -------------------


function playerNameAdd(text){
    const playerName =text.parentNode.parentNode.children[0].innerText;
    allPlayerNames.push(playerName);
    createTExtAdd ()

    

}


// --------------------------------------------




function calculate (){
    let totallPlayeaName =1;
    const totallPlayeaNameString =  totallPlayeaName.innerText;
    const totallPlayeaNameNumber = parseInt(totallPlayeaNameString);

    for(let y = 0 ; y <allPlayerNames.length; y++){

totallPlayeaName +=allPlayerNames[y]



    }
    return totallPlayeaNameNumber;
}

// calculate btn add 
document.getElementById('cal-btn').addEventListener('click',function(){

const totalPlayer  = calculate()
console.log(totalPlayer);

})