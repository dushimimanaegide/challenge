function transformString(input) {
    const length = input.length;

    if (length % 15 === 0) {
        
        
        input = input.split('').reverse().join('');
        
        input = input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        
        input = input.split('').reverse().join('');
    } else if (length % 5 === 0) {
        
        input = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return input;
}


console.log(transformString("Hamburger")); 
console.log(transformString("Pizza")); 
console.log(transformString("Chocolate Chip Cookie")); 
