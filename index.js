const flavors = window.prompt ("Enter a list of froyo flavors", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
console.log(flavors)
const flavorsArr = flavors.split(',')
console.log(flavorsArr)

function countFlavors(arr) {
    const output = []
    for(i = 0; i < arr.length; i++) {
        const flavor = arr[i] 
        if (output[flavor] === undefined){ 
            return output
        } else {
            return output++
        }
    } 
}

const numFlavors = countFlavors(flavorsArr)

console.log(numFlavors)

/* I'm still a little confused on this one. I'm not sure what 
it is but for some reason it looks like the if statement is 
not looping through the array. */

    
