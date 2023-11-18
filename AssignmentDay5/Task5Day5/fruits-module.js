// fruits-module.js


// BY RazmanR, date 18112023  
 

// MAIN()

// initialise
let params = {};
params = {
    output: "",
    typeOutput: typeof output
}
let htmlOutput = "";

let listFruits = ["manggo", "banana", "apple", "durian",
"red apple", "manggis", "rambutan", "pear", "melon"
];

getHtml(); // Headings section 

  // call list of fruits
htmlOutput = getFruits();

// print to HTML web page
console.log(htmlOutput);
params.output = htmlOutput;
getOutputHtml("", params);

//////END OF MAIN


function getFruits() {
    // call list of fruits
     

    let htmlOutput = "";
    let fibString = "";

// append HTML tagging of fruits
    for (const fruit of listFruits) {
        console.log(fruit);
        
        fibString = "<br>Fruits (" + fruit + "): " ;
        htmlOutput = htmlOutput + fibString;
        
    }
    console.log(fibString);
    console.log(htmlOutput);

    return htmlOutput;
}
 
 
function getOutputHtml(outputText, params) {
    // print or get html

    document.write("<br>");
    document.write(params.output);

    console.log("paramssss JSON{}");
    console.log(params);
}


function getHtml() {
    // Headings section 
    document.write("<br>");
    document.write("TEAM DAY5 Assignment - TASK5 .js");
    document.write("<br>"); 
    // document.write("<h2> <u>  FRUITS LIST    </u></h2>");

    document.write("<br>")

    // call Calculations shown below...   
    document.write(
        "STARTING, call Calculations and List shown below...   "

    );


}


