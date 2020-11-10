
interface Amount  {
    periodLength : number;
    trainingDays:number;
    success: boolean;
    rating:number;
    ratingDescription:string,
    target: number,
    average:number

}

function calculateExercises(exercices : Array<number>,target : number) :Amount {
    let periodLength:number  = exercices.length
    const average :number = exercices.reduce((acc:number,value:number):number => acc + value , 0) / periodLength
    let success : boolean = average >= target
    let trainingDays : number = exercices.filter(exercise => exercise > 0 ).length
    let rating : number
    let ratingDescription :string
    if (average < target ) {
        rating = 1
        ratingDescription = "bad "
    }
    else if (average == target){
        rating = 2
        ratingDescription = "not too bad but could be better"
    }
    else {
        rating = 3
        ratingDescription = "good "
    }

    let response : Amount = { periodLength,success,rating,ratingDescription,target,average,trainingDays}
     

    return response
}


function main(){
    if (process.argv.length < 4){
        console.log('use: npm run  calculateExercise -- (target:number) (exercise:Array<number>)')
    }
    else {
      
    
        let response : Amount 
        let target: number
        let daily : Array<number>
    
        try {
    
           let  argv : Array<number>   = process.argv.slice(2).map(v => +v )
           target = argv[0]
           daily=argv.slice(1) 
           response = calculateExercises(daily,target)
    
           console.log(response)
        }
        catch(error){
            console.log(error.message)
        }
        
         
    }
}
if (require.main === module){
    main() 
}
 export {calculateExercises,Amount}
 