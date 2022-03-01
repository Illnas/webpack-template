import add from "./modules/add"
import { calculateSomething } from "./modules/polygonArea"
import calculateCircle from "./modules/circleArea"
import oHello from "./modules/o"

/* const numberAdd = add(2,3)
document.body.innerText = `${numberAdd}`
console.log(numberAdd) */
const polygonArr = [4, 3, 6, 8]
let circleRadius = 5;
let polygonAreas = calculateSomething(polygonArr)
let circleAreas = calculateCircle(circleRadius)
let stringed = oHello("Gotcha")
console.log(polygonAreas)
console.log(circleAreas.toFixed(2))
console.log(stringed)

