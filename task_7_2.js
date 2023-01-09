function check (str,obj){
    if (obj.hasOwnProperty(str)) {

    return true;
    }   
    return false;
}
let man={
    name: 'Oleg'
}

let result= check('animal', man);

console.log(result);
