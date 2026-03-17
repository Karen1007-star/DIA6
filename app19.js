// 🧪 Problema 1 — Two Sum
function twoSum(arr, numero){
    let arr2 =[]
    for(let j=0; j<arr.length; j++){
        let num1=arr[j]
        for(let i=0; i<arr.length; i++){
            if(num1+arr[i]==numero){
                arr2.push(j)
            }
        }
    }
    return arr2
}

//🧪 Problema 2 — Anagram
function isAnagram(a, b){
  let palabra1 = a.toLowerCase().split("").sort().join("")
  let palabra2 = b.toLowerCase().split("").sort().join("")
  return palabra1 == palabra2
}

// 🧪 Problema 3 — Palindrome
function isPalindrome(str){
  let letras = str.replaceAll(" ","").toLowerCase().split("")
  let palabra2 = []
  for(let i=0; i<letras.length; i++){
    palabra2.push(letras[letras.length-(i+1)])
  }
  return letras.join("") == palabra2.join("")
}

//🧪 Problema 4 — Flatten array (CLAVE)
function flatenando(arr){
    let arr2=[]
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            arr2=arr2.concat(flatenando(arr[i]))
        }else{
            arr2.push(arr[i])
        }
    }
    return arr2
}