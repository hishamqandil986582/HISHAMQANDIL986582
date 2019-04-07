
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test)
{
    if(Array.isArray(function2test()))
    {
        
        if(function2test().toString()==expected)
        {
            return "TEST SUCCEEDED";
        }
        else
        {
            return "TEST FAILED.  Expected " + expected + " found " + function2test();
        }

    }
    else
    {
        if (expected === function2test()) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + function2test();
        }
    }

}



/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }

}
/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

function  isVowel(x)
{
    return x === "A" || x === "E" || x === "I" || x === "O" || x === "U";
}
function sum_array(arr)
{
    let total=0;
    for (var i=0;i<arr.length;i++)
    {
        total+=arr[i];
    }
    return total;
    /*  return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e);*/
}

function multiply(arr)
{
    let result=1;
    for(let i=0;i<arr.length;i++)
    {
        result=result*arr[i];
    }
    return result;
}


function reverse(a)
{
    return a.split("").reverse().join("");
}



function findLongestWord(arr)
{
    let longestword=arr[0].length;
    for (let i=0 ;i<arr.length;i++)
    {
        if(longestword<arr[i].length)
        {
            longestword=arr[i].length;
        }
    }
    return longestword;
}


function filterLongWordsi(arr,i)
{

    let  longestword=[];
    for (let j=0 ;j<arr.length;j++)
    {
        if(i<arr[j].length)
        {
            longestword.push(arr[j]);
        }
    }
    return longestword;
}


console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));
console.log("is s character vowel " + myFunctionTest(false, function () {
    return isVowel('s');
}));
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
    return maxOfThree(55, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, function () {
    return maxOfThree(55, 4, 44);
}));
console.log("Expected output of array_sum[55,4,44] is 103  " + myFunctionTest(103, function () {
    return sum_array([55, 4, 44]);
}));
console.log("Expected output of multiply[1,4,8] is 103  " + myFunctionTest(32, function () {
    return multiply([1, 4, 8]);
}));
console.log("Expected output of reverse 'jag testar' is ratset gaj  " + myFunctionTest( "ratset gaj", function () {
    return reverse('jag testar');
}));

console.log("Expected output of findLongestWord 'is ['Hisham qandil','qandil','hello word','test hello word']j  " + myFunctionTest( 15, function () {
    return findLongestWord(["Hisham qandil","qandil","hello word","test hello word"]);
}));
console.log("Expected output of findLongestWord 'is ['Hisham qandil','qandil','hello word','test hello word']j  " + myFunctionTest( ["Hisham qandil","test hello word"], function () {
    return filterLongWordsi(["Hisham qandil","qandil","test hello word"],8);
}));

console.log(filterLongWordsi(["Hisham qandil","qail","test hello word"],8));

const a = [1,3,5,3,3];
const b = a.map(function(elem) {
    return elem * 10;
})
console.log(b);
const c = a.filter(function(elem){
    return elem === 3;});
console.log(c);
console.log(a);