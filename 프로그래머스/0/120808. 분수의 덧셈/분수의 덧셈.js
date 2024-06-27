function gcd(a, b) {
    return a % b === 0 ? b : gcd(b, a % b)
}


function solution(numer1, denom1, numer2, denom2) {
    let x = denom1*denom2
    let y = numer1*denom2+numer2*denom1
    
    let answer = [y/gcd(x,y),x/gcd(x,y)]
    return answer
}