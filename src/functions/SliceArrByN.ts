export default function SliceArrayByN<T>(array:T[], n:number):T[][]{
    let newArr:T[][] = []
    
    for ( let i = 0 ; i < array.length ; i+= n){
        const subArr = array.slice(i, i + n)
        newArr.push(subArr)

    }
    return newArr
}