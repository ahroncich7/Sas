let petitionsCount = 0;

function addVisit(){
    petitionsCount ++;
  
    if (petitionsCount % 3 === 0){
        console.log("Visitors", petitionsCount / 3);
    }
}

module.exports = addVisit;