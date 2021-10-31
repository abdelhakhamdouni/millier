function millier(nbr){
  let nmbre = nbr.toString()
  let arr = []
  while (nmbre.length > 3){
    arr.push(nmbre.slice(-3))
    if(nmbre.length > 3){
      nmbre = nmbre.slice(0, nmbre.length-3)
    }
  }
  arr.push(nmbre)
  return arr.reverse().join(" ")
}

console.log(millier(8765890987))
