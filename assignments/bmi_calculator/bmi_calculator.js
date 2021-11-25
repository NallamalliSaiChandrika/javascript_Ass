// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    var BMI;
    if(mass!=0){
        if(height!=0){
            BMI = mass / (height * height)
            return(parseInt(BMI))
        }else{
            return("INVALID INPUT")
        }
    }
    else{
        return("INVALID INPUT")
    }
}

module.exports = BMICalculator;
