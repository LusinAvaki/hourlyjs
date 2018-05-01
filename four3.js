let capitals = {
    Armenia: 'Yerevan',
    Iceland: 'Reykjavik',
    Finland: 'Helsinki',
    Germany: 'Berlin',
}

let newData = Object.keys(capitals).reduce(function(obj,key){
    obj[ capitals[key] ] = key;
    return obj;
},{});
console.log(newData);