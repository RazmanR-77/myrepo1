//  SubstringMod.js


import React from 'react'

let str;
let subStr = "";

function setSubstringMod() {


    str = "abcdEFG";

    subStr = str.substring(3);
}


export default function SubstringMod() {


    return (
        <div>
                 <h1>   
            <b> SubstringMod </b>
</h1>
            <p>
                {setSubstringMod()}
                string is {str} </p>
            <p   >
                substring is
                {subStr}</p>


        </div>
    )
}
