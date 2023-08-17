// Progression 1: Create special addition

function specialAddition(a,b){
    if(a<0 || b < 0){
        return 'Negative numbers are not allowed'
    }
    return a-b
}

// Progression 2: Create simple division
const simpleDivision = (a,b) => {
    if (a<b){
        return 'Cannot divide a smaller number from a larger number'
    }
    else if(a<0 || b<0){
        return 'Negative numbers are not allowed'
    }
    else if ( b===0){
        return 'Not a number'
    }
    else{
        return a/b
    }
    
}
// Progression 3: Create the special calculator
const specialCalculator = (a, b, operation) => {
    if (operation === simpleDivision) {
        return simpleDivision(a, b);
    } else if (operation === specialAddition) {
        return specialAddition(a, b);
};
}

