//const arrayOfNumbers = [1, '2', 3, '4', 5, 'qsd',0,0,0,0,0];

//const squared = a => a * a;
//const add2 = a => a + 2;

//const isOdd = a => a % 2;
//const isEven = x => !(isOdd(x));

//const ensureNumberOrZero = a => {
   // const x = Number(a);
   // return (Number.isNaN(x)) ? 0 : x;
//};

//const isNotZero = item => item !== 0; // (a => a) marche aussi

//const addOnlyEvenNumber = (acc, a) => (isEven(a)) ? a + acc : acc;
//const sum = (acc, number) => acc + number;
//const multiply = (acc, a) => acc * a;

//console.log(
  //  arrayOfNumbers
     //   .map(ensureNumberOrZero)
     //   .filter(isNotZero)
     //   .map(add2)
    //    .reduce(multiply, 1)
    // .reduce(addOnlyEvenNumber, 0)
//);

 const wordList = ['test', 'coucou', 'Having', 'System', 'requirements', 'Linux'];

 const hasMoreThan5Letters = word => word.length > 5;

console.log(wordList.filter(hasMoreThan5Letters));
 console.log(hasMoreThan5Letters('aaaa')); //false
 console.log(hasMoreThan5Letters('aaaaa')); //false
 console.log(hasMoreThan5Letters('aaaaaa')); //true
 console.log(hasMoreThan5Letters('aaaaaaaaaaaaaaaaaaaaaa')); //true