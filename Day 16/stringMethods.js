const str = "jimmy jammes"
const str1 = "WOLVERINE"
const str2 = "     X-Men     "
const str3 = "logan mutant form is stronger than deadpool mutant level "
//basic methods
console.log(str.toUpperCase())
console.log(str1.toLowerCase())
console.log(str.charAt(1))
console.log(str.charCodeAt(7))
console.log(str[2])
console.log(str.slice(6,9))
console.log(str.substring(6))
console.log(str.split(""))
console.log(str.repeat(5))
console.log(str.replace("jimmy","victor"))
console.log(str1.padStart(12,"x"))
console.log(str1.padEnd(12,"xxx"))
console.log(str2.trim())
console.log(str2.trimStart())
console.log(str2.trimEnd())
//use multiple methods in one statement 
console.log(str1.concat(str3.slice(5)))
//search methods
console.log(str2.indexOf('e'))
console.log(str.lastIndexOf('m'))
console.log(str.search('e'))
console.log(str3.match("logan"))
console.log(str3.includes("deadpool"))
console.log(str3.startsWith("logan"))
console.log(str3.endsWith("deadpool"))
