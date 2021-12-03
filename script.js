var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://thumbs.dreamstime.com/b/cartoon-father-son-icon-over-white-background-colorful-design-vector-illustration-cartoon-father-son-icon-flat-design-169226123.jpg", "https://image.freepik.com/free-vector/cute-young-boy-cartoon-character-holding-books_1308-46940.jpg", "https://image.shutterstock.com/z/stock-vector-flat-vector-character-family-animation-man-woman-child-human-451824619.jpg"];
var names = ["Mom", "Dad", "Krishiv", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
