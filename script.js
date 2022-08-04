function fib(index) {
    let finStroka = '0', fibB=1, fibA=0, xx;
    if (index===0 || typeof(index) !== "number"|| !Number.isInteger(index)) {
         return finStroka = '';
        }
    if (index===1) {
         return finStroka;
        }

        for (let i = 2; i <=index; i++) {
           
            finStroka =  finStroka+` ${fibB}`;
            xx=fibB;
            fibB=fibB+fibA;fibA=xx;
        }
          

    return finStroka;
    
}
fib(5)