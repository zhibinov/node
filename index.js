const colors = require('colors');

let n = +(process.argv[2]);

if (n>=2) {

    let arr = [];
    nextPrime:
    for (let i = 2; i <= n; i++) { 

        for (let j = 2; j < i; j++) { 
            if (i % j == 0) continue nextPrime;
        }
        
        arr.push(i);
    
    }
    console.log(colors.red(arr[0]),colors.yellow(arr[1]),colors.green(arr[2]));
}
else{
    console.log(colors.red('Ошибка!'))
}
