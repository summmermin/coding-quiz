function solution(array) {
array.sort(function(a,b){
        return a - b;
    });
    let center = Math.floor(array.length / 2);
    return array[center];
}