let printText = (text)=>{
  return new Promise((resolve, reject)=>{
    let random = Math.floor(Math.random()*3000+1000)
    setTimeout(()=>{
      document.body.innerHTML += `<h5>`
      for (let i = 0; i < text.length; i++) {
         document.body.innerHTML += `${text[i]}`
      }
      document.body.innerHTML += `</h5><br>`
      resolve("I am resolved")
    },random)
})}
let printIt = async ()=> {
   let txt1 = await printText("Executing Hack code ................................................")
   let txt2 = await printText("Fenching Hack code ................................................")
  let txt3 = await printText("Found locations")
  let txt4 = await printText("Country: India")
  let txt5 = await printText("State : Bihar")
  let txt6 = await printText("city : Patna")
  let txt7 = await printText("Social Media Fenching ................................................")
  let txt8 = await printText("Social Media handles found")
  let txt9 = await printText("Cracking Social Media passwords ................................................")
  let txt10 = await printText("All passwords cracked")
  let txt11 = await printText("Sending all details to Hacker....................")
  let txt12 = await printText("Hacking Completed")
}
printIt()
