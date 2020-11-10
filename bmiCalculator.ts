

    function calculateBmi( height : number , weight : number ) : string {
    // if (Number.isNaN(height) || Number.isNaN(weight)){

    // }

    console.log(weight)
    const  bmi = weight * 10000/   Math.pow(height , 2)
    
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
function main(){
    if (process.argv.length !=4){
        console.log('use: npm run  calculateBmi -- (height:number) (weight:number)')
    }
    else {
        let height:number
        let weight:number
    
        try {
            
              [height , weight ]   = process.argv.slice(2).map(v => +v)
              console.log(`height : ${height /100 } , weight ${weight}`)
              console.log(calculateBmi(height , weight))
        }
        catch(error){
            console.log(error.message)
        }
    }
}
if (require.main === module){
    main()
}


export {calculateBmi}