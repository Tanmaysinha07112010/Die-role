onEvent("button1", "click", function( ) {
  setNumber("label1", randomNumber(1, 6));
  if (getNumber("label1") == 1) {
    setImageURL("image1", "assets/1.PNG");
  } else if ((getNumber("label1") == 2)) {
    setImageURL("image1", "assets/2.PNG");
  } else if ((getNumber("label1") == 3)) {
    setImageURL("image1", "assets/3.PNG");
  } else if ((getNumber("label1") == 4)) {
    setImageURL("image1", "assets/4.PNG");
  } else if ((getNumber("label1") == 5)) {
    setImageURL("image1", "assets/5.PNG");
  } else if ((getNumber("label1") == 6)) {
    setImageURL("image1", "assets/6.PNG");
  }
});
