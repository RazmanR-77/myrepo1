// MathNums.JS



import React from 'react'
let a;
let b;
let sum;

// let str;  
// let subStr =  "";

function setMathNums() {
    b = 111;
    a = 22;
    sum = a + b;

}


// SubstringMod
 

// function setSubstringMod() {
    
    
//     str = "abcdEFG";  

//     subStr =   str.substring(3);
// }

export default function MathNums() {
    return (
        <div>
            <h1>  
                MathNums mod   </h1>
            {setMathNums()}

            <div class="w3-code">
                <p   >     b =         {b}        </p>
                <p   >      a = {a}    </p>
                sum = a + b
                <p   >      sum = {sum}  </p>
            </div>


            {/* <p>
{setSubstringMod()}
string is {str} </p>
<p   >
substring is
{subStr}</p> */}


        </div>
    )
}
;