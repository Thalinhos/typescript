class Myclass {
    
    static keepCounter(){
        let counter = 0;
        return function(){
            return counter++;
        }
    }

    static counterOnlyOne(){
        return 1
    }
}

// const counterFn = Myclass.keepCounter();
// console.log(counterFn());
// console.log(counterFn());
// console.log(counterFn());
// console.log(counterFn());
// console.log(counterFn());

let var1 = Myclass.counterOnlyOne();
console.log(var1);
console.log(var1);
console.log(var1);
console.log(var1);