var obj = {
    "name": "LiLi",
    "age": 22,
    "sex": "F"
};

var obj2 = JSON.stringify(obj);
console.log(obj2);

function toArray(){
    return [].slice.call(arguments,0);

}
console.log(toArray(1,23,43,54,6,58,7));