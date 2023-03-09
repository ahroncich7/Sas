let petitionsCount = 0;

function addVisit(req, res, next){
    petitionsCount ++;
  
    if (petitionsCount % 3 === 0){
        console.log("Visitors", petitionsCount / 3);
    }

    next();
}

module.exports = addVisit;