let macBookpro ={
    Brand : "Apple",
    Price (mrp,discount){
         this.mrp = mrp
         discount = mrp - (discount/100*160000)
        return discount
    },
    RAM : "16 GB",
    Cpu :"12-core Cpu",
    Gpu : "19-Core Cpu",
    Processor : "Apple M2 pro",
    SSD : "1TB"
}

console.log(macBookpro.Brand)
console.log(macBookpro.Processor)
console.group(macBookpro.RAM)
let Mac = macBookpro
console.log(Mac)
console.log(Mac.Price(160000,10))
console.log(Mac["Cpu"])
console.log(Mac["Gpu"])
console.log(Mac["SSD"])
