/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var name1 = window.document.getElementById("name1").innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following:

Project Manager*/
var position2 = document.getElementById("position2").innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var alias3 = document.getElementById("alias3").innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

// const profileName = document.getElementsByClassName("profile");
// for(var i = 0; i<profileName.length; i++){
// if
// }

var profile = document.getElementsByClassName('profile');
profile[0].innerHTML = "1999";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var profile2 = document.getElementsByClassName('profile');
profile[1].innerHTML = "moo";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var alias = document.getElementsByClassName('alias'); alias[2].innerHTML = "sammy";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var innerDiv = document.createElement('div');
innerDiv.id = 'name7';

nameParent.appendChild(innerDiv);
innerDiv.innerHTML ="Peter Griffin";


/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var tim = document.createElement('div');
tim.id = 'alias8';
aliasParent.appendChild(tim);
tim.innerHTML = "Old Man Riverwalk";



//Final Boss
/*9. Create your own profile.*/

var orange = document.getElementsByClassName("block3");
console.log(orange);
var imgBox = document.getElementsByTagName("img");
console.log(img);
imgBox[8].src = "http://cdn3-www.comingsoon.net/assets/uploads/2016/07/totalrecall.jpg";

var nameBox = document.createElement("div");
nameBox.id = "name9";
nameBox.innerHTML = "Arnie";
orange[2].appendChild(nameBox);
// var currentDiv = document.getElementsByClassName("block3 col-sm-4")[2];
// var currentImg = document.getElementsByTagName("img")[8];
// var newImg = document.createElement('img');
// currentImg.src="http://r.fod4.com/c=sq/s=w1000,pd1/o=80/http://a.fod4.com/images/user_photos/1208619/7baa6dfd4f761ad84e0c7aad13c62c46_square_fullsize.jpg";
// currentImg.appendChild(newImg);
// var newDiv = document.createElement('div');
// newDiv.id="name9";
// newDiv.innerHTML="test";
// currentImg.appendChild(newDiv);
// var newDiv = document.createElement('div');
//      newDiv.id ='name9';
//      newDiv.innerHTML="test";
// currentDiv.appendChild(newDiv);



// var newContent= document.createElement("img");
// newContent.src="http://r.fod4.com/c=sq/s=w1000,pd1/o=80/http://a.fod4.com/images/user_photos/1208619/7baa6dfd4f761ad84e0c7aad13c62c46_square_fullsize.jpg";
// currentDiv.appendChild(newContent);

// document.body.insertBefore(newDiv, currentDiv);
