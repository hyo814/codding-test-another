const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
                .map(el => el.replace(/[a-zA-Z0-9. ]/gi, ''))
input.pop()

const solution = (s) => {
  const arr = ['()', '[]'];
  return s.map(el => {
      let i=0;
      while(i<arr.length){	
        if(el.indexOf(arr[i]) !== -1){	
          el = el.split(arr[i]).join("");	
          i=0;	
        }else{
          i++;	
        }
      }
      return el === "" ? 'yes' : 'no';	   
  }).join('\n')
}

console.log(solution(input))