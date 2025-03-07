function solution(places) {
    var answer = [];
    answer = places.map((room) => {
        let person = [];
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(room[i][j] === 'P') person.push([i,j])
            }
        }

        for(let i = 0; i < person.length; i++){
            if(!manhattan(person[i], room)) return 0
        }
        return 1
    })
    return answer;
}

const isValid = (x, y) => (0 <= x && x < 5 && 0 <= y && y < 5);

function manhattan (arr, room) {
    let [a, b] = arr
    const up = isValid(a-1,b) ? room[a-1][b] : false
    const up2 = isValid(a-2,b) ? room[a-2][b] : false
    const down = isValid(a+1,b) ? room[a+1][b] : false
    const down2 = isValid(a+2,b) ? room[a+2][b] : false
    const left = isValid(a,b-1) ? room[a][b-1] : false
    const left2 = isValid(a,b-2) ? room[a][b-2] : false
    const right = isValid(a,b+1) ? room[a][b+1] : false
    const right2 = isValid(a,b+2) ? room[a][b+2] : false
    const upRight = isValid(a-1,b+1) ? room[a-1][b+1] : false
    const downRight = isValid(a+1,b+1) ? room[a+1][b+1] : false
    const upLeft = isValid(a-1,b-1) ? room[a-1][b-1] : false
    const downLeft = isValid(a+1,b-1) ? room[a+1][b-1] : false

    if(up && up === 'P') return false
    if(down && down === 'P') return false
    if(left && left === 'P') return false
    if(right && right === 'P') return false

    if(upRight && upRight === 'P'){
        if(up === 'O' || right === 'O') return false
    }
    if(downRight && downRight === 'P'){
        if(down === 'O' || right === 'O') return false
    }
    if(upLeft && upLeft === 'P') {
        if(up === 'O' || left === 'O') return false
    }
    if(downLeft && downLeft === 'P'){
        if(down === 'O' || left === 'O') return false
    }

    if(up2 && up2 === 'P'){
        if(up === 'O') return false
    }
    if(down2 && down2 === 'P'){
        if(down === 'O') return false
    }
    if(left2 && left2 === 'P') {
        if(left === 'O') return false
    }
    if(right2 && right2 === 'P') {
        if(right === 'O') return false
    }

    return true;
}