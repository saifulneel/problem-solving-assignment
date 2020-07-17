function feetToMile(feet){
    if (feet <= 0){
        return "Distance can't be negative!";
    }
    else {
        let mile = feet/5280;
        return mile;
    }
};
//let output = feetToMile(10000).toFixed(3);
//console.log(output);

function woodCalculator(chair, table, bed){
    let chairwoodNumber = chair * 1;
    let tablewoodNumber = table * 3;
    let bedwoodNumber = bed * 5;
    let totalwoodNumber = chairwoodNumber + tablewoodNumber + bedwoodNumber;

    return totalwoodNumber;
};
//let result = woodCalculator(10, 5, 5);
//console.log(result);

function brickCalculator(floorNumber){
    if (floorNumber <= 10 && floorNumber >=1){
        let brickNumber = floorNumber * 15000;

        return brickNumber;
    }
    else if (floorNumber > 10 && floorNumber <= 20){
        let brickNumber = ((floorNumber - 10) * 12000) + 150000;

        return brickNumber;
    }
    else if (floorNumber > 20){
        let brickNumber = ((floorNumber - 20) * 10000) + 270000;

        return brickNumber;
    }
    else{
        return "You Made Mistake";
    }
};
//let totalNumber = brickCalculator(15);
//console.log(totalNumber);

function tinyFriend(names){
    let smallerName = names[0];
    for (let i = 0; i < names.length; i++){
        let friendName = names[i];
        if (friendName < smallerName){
            smallerName = friendName;
        }
    }
    return smallerName;
};
//let result = tinyFriend(['Saiful', 'Safia', 'Chad', 'Tamanna']);
//console.log(result);