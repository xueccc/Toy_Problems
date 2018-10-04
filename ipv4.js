//ipv4 adress 0.0.0.0/
//string composed by numbers 0000, return boolean,
//examples: 255.255.255.255 - true; 0.0.0.256 - false
//01.02.02.03 - false 
//

//length over 12 or under 4  - f

//iterate the string, and 

let ipv4Address = (string) => {
  //num > 0 && < 255, 4 nums
  let result = false;
  
  let recurse = (count, index) => {
    if (count === 4) {
      if (index === string.length) {
        result = true;
      }
      return;
    }
    
    for (let i = index; i < index + 3; i++){
      let n = string.slice(index, i + 1);
      if (valid(n)) {
        recurse(count + 1,  i + 1);
      }
        
    }
  }
  
  recurse(0, 0);
  
  return result;
  
}

let valid = (num) => {
  if (num.length >= 2 && num[0] === '0'){
    return false;
  }
  
  if (Number(num) <= 255 && Number(num) >= 0){
    return true;
  } else {
    return false;
  }
}

// console.log(ipv4Address('255255255255')); //true
console.log(ipv4Address('1020203')); //true  [10.20.20.3, 102.0.20.3, 10.202.0.3]
// console.log(ipv4Address('000256')); //false
// console.log(ipv4Address('00000')); //false


// let ipv4Address = (string) => {
//   let result = true;
//   let arr = string.split('.');
  
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (num.length >= 2 && num[0] === '0'){
//       result = false;
//       break;
//     }
    
//     if (Number(num) > 255 || Number(num) < 0){

//       result = false;
//       break;
//     }
//   }
  
  
//   return result;
  
// }