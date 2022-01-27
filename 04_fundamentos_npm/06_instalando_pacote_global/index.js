const _ = require("lodash")

//npm install -g pacote > instala pacote que funcioonará, independente do projeto

const arr = [1, 1, 1, 2, 3, 4, 5, 5, 7, 8, 8, 8, 8]

console.log(_.sortedUniq(arr)) //tirar duplicidades próximas