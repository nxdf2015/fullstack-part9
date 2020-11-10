import Express,{Request,Response,NextFunction} from 'express'
import {calculateBmi} from './bmiCalculator'
import {calculateExercises , Amount  } from './exerciseCalculator'
const app = Express()
app.use(Express.json())

app.get("/hello",(_req,resp)=> {
    return resp.send("Hello fullstack !")
})

app.get('/bmi',(req,resp)=> {
    const weight: number  = parseInt(req.query.weight as string)
    const height : number = parseInt(req.query.height as string )

     if(Number.isNaN(weight) || Number.isNaN(height)){
         
       throw new TypeError('malformatted parameter')
     }
       const responseBmi = calculateBmi(height,weight)
       resp.json({weight,height,responseBmi})
    })
   
app.post('/calculator',(req,resp) => {
   
    const data : { daily_exercises : Array<number> , target : number } = req.body

    if (!(data.target  &&   data.daily_exercises)) {
        throw new TypeError('parameters missing')
    }
     
     if (Number.isNaN(data.target)   || 
     (!(data.daily_exercises instanceof Array ) ||
      !data.daily_exercises.every(d => typeof d === 'number'))){
         throw new TypeError('malformatted parameters')
     }
    
   
    const response : Amount = calculateExercises(data.daily_exercises,data.target)
    return resp.json(response)

 
    
})

app.use((err :Error, _req:Request ,resp :Response,_next:NextFunction)=> {
    resp.json({error  : err.message })
})
const PORT : number = 3000

app.listen(PORT, () => {
   console.log(`listen on port ${PORT} `)
})