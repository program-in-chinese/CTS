// ==ORIGINAL==

/*[#|*/let x = 1;/*|]*/
x;

// ==SCOPE::Extract to function in global scope==

let x = /*RENAME*/newFunction();
x;

function newFunction() {
    let x = 1;
    return x;
}
