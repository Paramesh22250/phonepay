let c=0
let k=document.getElementById("c")
let t=0
function increment(){
    c=c+1
    t=t+1
    k.textContent=c
}
function tot(){
    document.getElementById("s").textContent="Total Sum :" +t
}
function save(){
    c=c+" - "
    document.getElementById("pre").textContent+= c
    c=0
}