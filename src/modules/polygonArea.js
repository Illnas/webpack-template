

const calculateSomething = (polygonArray) => {
    const reducer = (accumulator, curr) => accumulator + curr;
    return polygonArray.reduce(reducer)

}


export { calculateSomething }