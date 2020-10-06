module.exports =function toReadable(number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    let tenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

     let dozens= ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
     let hundreds=['hundred','thousand']

     number = number.toString();

     let result = '';
     
     if(number.length === 1){  
       result = `${units[number]}`
         //console.log(result)        
          }
       

     if(number.length === 2){  
       if(Math.trunc(number/10) === 1){
        result = `${tenNineteen[number%10]}`
         // console.log(result) 
       }

        if(Math.trunc(number/10) > 1 && number%10 === 0){
          result = `${dozens[Math.trunc(number/10) -2]}`
          //console.log(result)
       }  else if(Math.trunc(number/10) > 1 && number%10 > 0){
          result = `${dozens[Math.trunc(number/10) -2]} ${units[number%10]}`
         // console.log(result)
       }

         
    }
        
  if(number.length === 3){  
       if( number % 100 === 0){
           result = `${units[Math.trunc(number/100)]} ${hundreds[0]}`
         // console.log(result) 
       } else  if( number%100 > 0 && number%100 < 10){
          result = `${units[Math.trunc(number/100)]} ${hundreds[0]} ${units[number%100]}`
          //console.log(result)
       } else if((number % 100) % 10 === 0 && number%100 > 19){
         result = `${units[Math.trunc(number/100)]} ${hundreds[0]} ${dozens[Math.trunc(number%100/10) -2]}`
          //console.log(result)
       }  else if(number%100 >= 10 && number%100 < 20){
          result = `${units[Math.trunc(number/100)]} ${hundreds[0]} ${tenNineteen[number%10]}`
          //console.log(result)
       } else if (number%100 > 20 && number%100 <= 99){
         result = `${units[Math.trunc(number/100)]} ${hundreds[0]} ${dozens[Math.trunc(number%100/10) - 2]} ${units[number%10]}`
          //console.log(result)
       }

  }   

         
  return result
  
}