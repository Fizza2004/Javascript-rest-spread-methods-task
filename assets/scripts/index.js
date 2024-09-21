//**--Task1--**
// Tapşırıq: Rest operatorundan (...) istifadə edərək istənilən sayda arqument qəbul edən və onların cəmini qaytaran sumAll funksiyasını yazın.
//-----------------------------------------------------------------------
// const sumAll = (...rest)=> [...rest].reduce((sum,item)=>sum+=item,0);
// const subjects = [1,2,3,4,5,6,8,10];
// [,,...arguments]=subjects;
// console.log(sumAll(...arguments)); //36
//-----------------------------------------------------------------------


//**--Task2--**
// Tapşırıq: [1, 2, 3, 4, 5] array-i verildikdə, array destructuring və rest operatoru istifadə edərək ilk iki elementi dəyişənlərə təyin edin, qalanları isə üçüncü bir dəyişənə yığın.
//-----------------------------------------------------------------------
// const array = [1,2,3,4,5];
// const [firstElement,secondElement,...rest] = array;
// console.log(firstElement);
// console.log(secondElement);
// console.log([...rest]);
//-----------------------------------------------------------------------


//**--Task3--**
//Tapşırıq: { name: 'John', age: 30, city: 'New York', profession: 'Engineer' } obyektini nəzərə alaraq, rest operatorundan istifadə edərək name və age məlumatlarını çıxarın, qalan xassələri isə başqa bir obyektə yığın.
//-----------------------------------------------------------------------
// const user = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   profession: 'Engineer'
// }

// const {name, age, ...rest} = user;
// const newData = {...rest};
// console.log(newData);
//-----------------------------------------------------------------------

//**--Task4--**
//Tapşırıq: İki array qəbul edən və spread operatorundan istifadə edərək onları birləşdirən yeni bir array qaytaran combineArrays funksiyasını yazın.
//-----------------------------------------------------------------------
// function combineArrays(firstArray,secondArray){
//   let resultArr = [...firstArray,...secondArray]; //spread operator
//  console.log(resultArr); //Output:[1,2,3,'apple','banana','pear'];
// }

// combineArrays([1,2,3],['apple','banana','pear']);
//-----------------------------------------------------------------------


//**--Task5--**
//Tapşırıq: name və age xassələri olan person adlı bir obyekt yaradın. Spread operatorundan istifadə edərək bu obyekti klonlayan və city adlı yeni bir xassə əlavə edən bir funksiyanı yazın.
//-----------------------------------------------------------------------
// const person = {
//   name: 'Fizza',
//   age: '20'
// }
// let newData = {...person, surname:"Sultanova"};
// console.log(newData);
//-----------------------------------------------------------------------


//**--Task6--**
//Tapşırıq: İki obyekt verilmişdir: { name: 'Alice' } və { age: 25 }. Onları spread operatorundan istifadə edərək tək bir obyektə birləşdirin.
//-----------------------------------------------------------------------
// const obj1= {name: 'Alice'};
// const obj2= {age: 25};
// const userData = {...obj1,...obj2};
// console.log(userData);
//-----------------------------------------------------------------------


//**--Task7--**
// Tapşırıq: İstənilən sayda array qəbul edən və onları spread və rest operatorları ilə bir array-ə birləşdirən mergeAndMultiply funksiyasını yazın. Sonra həmin birləşdirilmiş array-dəki bütün ədədlərin hasilini qaytarın.
//-----------------------------------------------------------------------
//Below, ...arguments=[1,2,3],[4,5,6]
// function mergeAndMultiply(...arguments){
//  //array in array= [...arguments]
//   let product;
//   const result = [...arguments].flat().reduce((product,item)=>product*=item,1);
//   console.log(result);
// }

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// mergeAndMultiply(arr1,arr2);
//-----------------------------------------------------------------------


//**--Task8--**
// Tapşırıq: name və age xassələri olan obyektlərdən ibarət bir array qəbul edən funksiyanı yazın. Rest və spread operatorları ilə hər bir obyektə əlavə sahə əlavə edin və dəyişdirilmiş array-i qaytarın.
//-----------------------------------------------------------------------
// function convertToNewArr(arr){
//   const {...rest1} = arr[0];
//   const {...rest2} = arr[1];
//   const newArr = [{...rest1,surname:"Habibova"},{...rest2,readBooks:true}];
//   console.log(newArr);
// }
// const arr = [{name:'Fizza'},{age:'21'}];
// convertToNewArr(arr);
//-----------------------------------------------------------------------


//**--Task9--**
//Tapşırıq: Birinci arqument olaraq vurğu qəbul edən və istənilən sayda əlavə arqument qəbul edən multiplyBy funksiyasını yazın. Spread və rest operatorları istifadə edərək, hər bir arqumenti (vurğudan sonra) vurğu ilə vurub array qaytarın.Real Dünyada İstifadə Tapşırığı
// function multiplyBy(multiplier,...arguments){
//   return[...arguments].map((item)=>item*multiplier);
// }

// const firstNum=2;
// const secondNum=3;
// const thirdNum=4;
// console.log(multiplyBy(3,firstNum,secondNum,thirdNum))