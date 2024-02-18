const load = document.querySelector(".load")
const txt = document.querySelector(".txt")
const zero =document.querySelector(".zero")
const kamateli = document.querySelector(".kamateli")



kamateli.addEventListener("click", () =>{
   midiaba()
})

async function midiaba(){

    txt.innerHTML = ""
    load.classList.add("kiki");
    zero.innerHTML = "gechqareba?"


    let res = await fetch("https://api.adviceslip.com/advice")
    let dato = await res.json()
    load.classList.remove("kiki");
    txt.innerHTML = dato.slip.advice
    zero.innerHTML = dato.slip.id
}

txt.innerHTML = midiaba()
zero.innerHTML = midiaba()