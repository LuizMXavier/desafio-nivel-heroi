let nome = "Pedro"
let xp = 3500
let nivel

if (xp <= 1000){
   nivel = "Ferro"
}else if (xp >=1001 && xp<=2000) {
  nivel = "Bronze"
}else if (xp >=2001 && xp<=5000) {
  nivel = "Prata"
}else if (xp >=5001 && xp<=7000) {
  nivel = "Bronze"
}
console.log("O Herói de nome" +" "+ nome + " " + "está no nível de" + " " + nivel)