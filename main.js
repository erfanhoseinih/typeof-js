

function type(e){

    if(typeof(e) == "number"){
        if(Number.isInteger(e)){
            return "integer";
        }else{
            return "float";
        }
    }else if(typeof(e) == "object"){
        if(Array.isArray(e)){
            return "array"
        }else if(e == null){
            return "null"
        }else if(e.constructor.name == "Map" ){
            return "map"
        }else if(e.constructor.name == "Set"){
            return "set"
        }else{
            return typeof(e);
        }
 
    }else{
        return typeof(e)
    }
 

}
 

// console.log(typeof("hi")=="string")

// null
let null1=null;
console.log(type(null1))
// undefined
let undefined1=undefined;
console.log(type(undefined1))
// int
let int1=10;
console.log(type(int1))
// float
let float1=0.5;
console.log(type(float1))
// string
let string1 = "hello world";
console.log(type(string1))
// object
let object1 = {x:20,y:44};
console.log(type(object1))
// array
let arr1=[];
console.log(type(arr1))
// map
let map1 =new Map();
console.log(type(map1))
// set
let set1 =new Set();
console.log(type(set1))
// function 
let fun1 = function() {}
console.log(type(fun1))
// class 
class class1 {
    constructor(){

    }
}
let obj = new class1();
console.log(type(obj))
