<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



//use  parameter routing 
Route::get('/page/{id?}', function (string $id = null) {

    $pageStr = "page";

    try {

        if ($id) {

            // return view('page1');

            return view("$pageStr$id");

            //   return "<h1> page "  .$id.   "</h1>"   ;
//      return "<h1> page "  .$id.   "</h1>"   ;

        } else {
            return "<div> no id or page found   </div>";

        }

    } catch (\Throwable $th) {
        //throw $th;
        return "<div> no id or page found   </div>";

    }


});


//use  parameter routing 
Route::get('/about/{id?}', function (string $id = null) {

    if ($id) {

        return "<h1> post id:" . $id . "</h1>";
    } else {
        return "<div> no id found   </div>";

    }

})->whereAlphaNumeric("id");
// ->whereNumber("id");
// ->whereAlpha("id");

// // this is just the URL LINK of page 
// Route::get('/about/{id}', function (string $id) {

//     // what you page want to return is here;
//     return "<h1> post id:"  .$id.   "<h1>"   ;
// });


// contact
// route /contact  
Route::get('/contact', function (string $id) {

    return view('contact');


});