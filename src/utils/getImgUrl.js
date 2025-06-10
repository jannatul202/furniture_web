function getImgurl(name){
    return new URL(`../assets/products/${name}`,import.meta.url).href
}
 export {getImgurl}