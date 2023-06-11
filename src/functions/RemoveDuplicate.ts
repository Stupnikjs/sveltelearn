export default function removeDuplicate<T>(arr:T[]){
    if (arr.length === 0) return [];  
    return arr.filter((el:T,index:number) => {
    const json = JSON.stringify(el); 
    return arr.findIndex((e) => JSON.stringify(e) === json) === index
})
}  