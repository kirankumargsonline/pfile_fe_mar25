let input_number = 100
console.log(`User given number is ${input_number}`)

root_number = parseInt(Math.sqrt(input_number))
if(root_number * root_number == input_number)
    console.log(`${input_number} is a Perfect Square`)
else
    console.log(`${input_number} is not a Perfect Square`)