<!-- assignment1  day13   php.php -->
<!-- RazmanR , DATE 16/12/2023 -->

<?php  
echo "ANSWER4

get and post method ";

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


    <title>Document</title>
</head>
<body>

ANSWER4
get and post method

<form action="/day13php/assign1day13.php" method="POST">

<!-- php code here  -->
<?php   
    $name = $age = "";


if($_SERVER ['REQUEST_METHOD'] == 'POST')
{
    $name = $_POST['name'];
    $age = $_POST['age'];
    echo  '<div class="alert alert-primary" role="alert"> 
            <strong>Congratulations!</strong>  your Name"  '.$name   .' your Age: '.$age    .'  <br /> Successfully Submitted. 
    </div>';

 
}


 
?>
 
 

 <div class="container mt-5">   

<div class="form-group">
  <label for="">Name</label>
  <input type="text" class="form-control" name="name" id="" aria-describedby="emailHelpId" placeholder="">
  <small id="emailHelpId" class="form-text text-muted">Help text</small>

  <label for="">Age</label>
  <input type="number" class="form-control" name="age" id="" aria-describedby="emailHelpId" placeholder="">
  <small id="emailHelpId" class="form-text text-muted">Help text</small>
</div>

<button type="submit">submit</button>
</form>
</div>




<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"></script>


    
</body>
</html>