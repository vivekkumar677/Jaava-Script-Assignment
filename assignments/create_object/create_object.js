function CreateObject(arr) {
    // Write your code here
    let obj = {};
    for(var i=0; i<arr.length; i+=2){
        obj[arr[i]]=arr[i+1]
    }
    return obj
}

module.exports = CreateObject;
