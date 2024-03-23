<!-- assignment1  day13   php.php -->
<!-- RazmanR , DATE 16/12/2023 -->
<?php  

echo "<br /> assignment1  day13 <br /> ANSWER1:  ";
echo "<br />";

$name = "Mr RMajid";
 $age ="3n";
    $city = "kuala lumpur";

$msg = "My name is $name I am $age years old, and I live in $city.";
echo $msg;


echo "<br />";
echo "<br /> ANSWER2:  ";
echo "<br />";
$grade = 98;

 if(
    $grade  < 70)
    {echo "need improvement";  }

elseif(
$grade >=  70  &&  $grade  <= 79)
{echo "keep it up!";  } 
elseif(
$grade >=  80  && $grade  <= 89)
{echo "Good job!";  }
// "Good job!" for grades between 80 and 89.

elseif($grade >=  90  &&   $grade  <= 100)
{echo "Excellent!";  }




elseif(
  $grade  < 70)
  {echo "need improvement";  }
// "Needs improvement" for grades below 70.

 
echo "<br />";

echo "<br /> ANSWER3:  ";
echo "<br />";
echo "NUMBERS looping"; 
$nums = [0,1,2,3,4,5,6,7,8,9,10];
foreach ($nums as $key => $value) {
  echo $value;
echo "<br />";

}

echo "<br />";

echo "<br /> ANSWER3:  ";
echo "<br />";
echo "FRUITS looping== "; 
echo "<br />";

$fruits = ["mango", "rambutan", "durian"];
foreach ($fruits as $key => $value) {
  echo $value;
echo "<br />";

}

echo "<br />";

echo "<br /> ANSWER5:  ";
echo "<br />";


$num1  = 0 ; 
$num2 = 0;

function  calculateSum ($num1, $num2) 
{
$sum = $num1 + $num2  ;
echo    "Numbers $num1 + $num2";
echo "<br />";

echo   "sum is ==  "  .$sum   .";"; 
echo "<br />";

}
calculateSum(1,2);
calculateSum(4,5);
calculateSum(6,7);


?>