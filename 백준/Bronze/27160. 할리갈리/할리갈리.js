const filePath = process.platform === "linux" ? 0 : "./input.txt";
let [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let dict = {}
arr.forEach(item => {
    const [fruit, num] = item.split(' ')

    if (dict.hasOwnProperty(fruit)){
        // console.log(dict)
        dict[fruit] = dict[fruit] + Number(num)
    }else{
        dict[fruit] = Number(num)
    }
    
})

if (Object.values(dict).includes(5)){
    console.log("YES")
}else{
    console.log("NO")
}