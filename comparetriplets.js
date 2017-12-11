// original solution

function solve(a0, a1, a2, b0, b1, b2){
    var alice = 0;
    var bob = 0;
    
    if (a0 > b0 === true)  { alice = alice + 1 }
    if (b0 > a0 === true)  { bob = bob + 1 }
    if (a0 == b0 === true) { "" }
    // arr[0] ^^^
    
    if (a1 > b1 === true)  { alice = alice + 1 }
    if (b1 > a1 === true)  { bob = bob + 1 }
    if (a1 == b1 === true) { "" }
    // arr[1] ^^^
    
    if (a2 > b2 === true)  { alice = alice + 1 }
    if (b2 > a2 === true)  { bob = bob + 1 }
    if (a2 == b2 === true) { "" }
    // arr[2] ^^^
    
    console.log(alice + " " + bob)
    
}

// updated solution with es6 syntax

const solve = (a0, a1, a2, b0, b1, b2) => {
    let alice = 0;
    let bob = 0;
    if (a0 > b0 === true)  alice++
    if (b0 > a0 === true)  bob++
    if (a1 > b1 === true)  alice++
    if (b1 > a1 === true)  bob++
    if (a2 > b2 === true)  alice++
    if (b2 > a2 === true)  bob++
    console.log(`${alice} ${bob}`)
}