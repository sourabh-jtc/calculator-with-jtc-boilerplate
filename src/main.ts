/* eslint-disable no-console */

function calculator(num1:number, num2:number, operation:string){
  if(!num1 && !num2 && !operation){
      console.log('Please provide all required fields..')
  }
  if(!num1 || !num2 ){
    console.log('Please provide desired numbers..')
}
  if(!operation){
    console.log('Please provide operation to do...')
}
  if(operation==='+'){
      console.log(num1+num2)
  }
  if(operation==='-'){
      if(num1>num2){
          console.log(num1-num2)
      }else{
          console.log(num2-num1)
      }
  }
  if(operation==='*'){
      console.log(num1*num2)
  }
  if(operation==='/'){
      console.log(num1/num2)
  }
  if(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'){
      console.log('Please provide valid arithmetical operation..')
  }
  
}

module.exports.calculator = calculator
