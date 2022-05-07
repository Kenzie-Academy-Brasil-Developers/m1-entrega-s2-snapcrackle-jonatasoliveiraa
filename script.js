function snapCrackle(maxValue){

    let retornaString = ""
    for(let i = 1; i <= maxValue; i++){

        if(i % 2 == 1 && i % 5 !== 0){
            retornaString += "Snap, " 
        }
        if(i % 5 == 0 && i % 2 == 0){
            retornaString += "Crackle, "
        }
        if(i % 2 == 1 && i % 5 == 0){
            retornaString += "SnapCrackle, "
        }
        else if(i % 2 == 0 && i % 5 !== 0){
            retornaString += `${(i)}, `
        }
    }

    return retornaString

}console.log(snapCrackle(15))