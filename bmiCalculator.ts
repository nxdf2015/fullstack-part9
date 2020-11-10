

function calculateBmi( height : number , weigth : number ) : string {
    const  bmi = weigth * 10000/   Math.pow(height , 2)
    console.log(bmi)
    let response 
    if (bmi <= 16){
        response = 'Underweight'
    }
    else if (bmi <= 25){
        response = 'Normal (healthy weight)'
    }
    else if (bmi <= 30){
        response = 'Overweight'
    }
    else {
        response = "Obese"
    }
    return response

}

 
if (process.argv.length !=4){
    console.log('use: npm run  calculateBmi -- (height:number) (weight:number)')
}
else {
    let height:number
    let weight:number

    try {
        
          [height , weight ]   = process.argv.slice(2).map(v => +v)
    }
    catch(error){
        console.log(error.message)
    }
    console.log(`height : ${height /100 } , weight ${weight}`)
    console.log(calculateBmi(height , weight))
}
 