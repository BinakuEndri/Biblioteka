const libra = [
    {
        emriLibrit: "Prilli i thyer",
        viti: 1997,
        autori: "Ismail Kadare",
    },
    {
        emriLibrit: "I huaji",
        viti: 1956,
        autori: "Albert Camys",
    },
    {
        emriLibrit: "Metamorfoza",
        viti: 2003,
        autori: "Franz Kafka",
    },
    {
        emriLibrit: "Harry Potter",
        viti: 1978,
        autori: "J.K Rowlings",
    },
    {
        emriLibrit: "A Game of Thrones",
        viti: 1899,
        autori: "Greore R.R Martin",
    },
    {
        emriLibrit: "Ferma e Kafsheve",
        viti: 1922,
        autori: "Orwell",
    },
    {
        emriLibrit: "Keshtu foli Zarthustra",
        viti: 1934,
        autori: "Niqe",
    },
    {
        emriLibrit: "Shqiperia qka qene, qeshte dhe cdo te behet",
        viti: 1912,
        autori: "Sami Frasheri",
    },
]


const emrat = libra.map(libra => {
    return libra.emriLibrit;
});


const libriautor = libra.map(libra =>{
    return [libra.emriLibrit, libra.autori]; 
});

const meIVjeter = libra.filter(libra => {
    return libra.viti >=1950;
});

const meIVjeterEmri = libra.filter(libra => {
    return libra.viti >=1950;
}).map(libra =>{
    return libra.emriLibrit;
});


const totali = libra.reduce((total,libra) => {

    return total + libra.viti;

}, 0);


console.log(emrat);

console.log(libriautor);
console.log(meIVjeter);
console.log(meIVjeterEmri);
console.log(totali);



str = new String("Hi, how are u ?");
console.log(str.match(/how/));    // match();



console.log(str);
console.log(str.replace("Hi","Hello"));   // replace();


let currentDate = new Date();
console.log(currentDate.getFullYear());      //  Date Object


console.log(Number.MAX_VALUE);           // MAX_VALUE   returns the largest 32 bit number

console.log(Number.isNaN(5));           // is a number ?   false
console.log(isNaN('Hello'));              // return true



let num = 164.123234213;
 let n = num.toExponential(3);          // toExponential



 number = new Number(19);
 console.log(number);
 console.log(number.toString());       // toString()
 console.log(number.toString(2));       // toString() kthen ne binar



