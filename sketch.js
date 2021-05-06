//COMPUTATION AND MEDIA II / Project title: "Oh the Way we Grow, is so Lovely."
//Final Project - Syann Engelhard

//Instructions: This is intended to read like a children's storybook, in order to progress you have to type the word in red on the screen to continue to the 'next page'. Enjoy! :-) 

//I had a lot of fun with this.

let img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18;
let state = 0;
let typed = "";

function preload() {
  img0 = loadImage("one.jpg");
  img1 = loadImage("two.jpg");
  img2 = loadImage("three.jpg");
  img3 = loadImage("four.jpg");
  img4 = loadImage("five.jpg");
  img5 = loadImage("six.jpg");
  img6 = loadImage("seven.jpg");
  img7 = loadImage("eight.jpg");
  img8 = loadImage("nine.jpg");
  img9 = loadImage("ten.jpg");
  img10 = loadImage("eleven.jpg");
  img11 = loadImage("twelve.jpg");
  img12 = loadImage("thirteen.jpg");
  img13 = loadImage("fourteen.jpg");
  img14 = loadImage("fifteen.jpg");
  img15 = loadImage("sixteen.jpg");
  img16 = loadImage("seventeen.jpg");
  img17 = loadImage("eighteen.jpg");
  img18 = loadImage("nineteen.jpg");
  mont = loadFont ('mont.otf');
}

function setup() {
  createCanvas(600, 600);
  textSize(24);
  textFont(mont);
}

function draw() {
  background(220);
  image(img0,0,0);

  if (state == 0) {
    image(img0, 0, 0);
  } else if (state == 1) {
    image(img1, 0, 0);
    img1.resize(width, 0);
  } else if (state == 2) {
    image(img2, 0, 0);
    img2.resize(width, 0);
  } else if (state == 3) {
    image(img3, 0, 0);
    img3.resize(width, 0);
  } else if (state == 4) {
    image(img4, 0, 0);
    img4.resize(width, 0);
  } else if (state == 5) {
    image(img5, 0, 0);
    img5.resize(width, 0);
  } else if (state == 6) {
    image(img6, 0, 0);
    img6.resize(width, 0);
  } else if (state == 7) {
    image(img7, 0, 0);
    img7.resize(width, 0);
  } else if (state == 8) {
    image(img8, 0, 0);
    img8.resize(width, 0);
  } else if (state == 9) {
    image(img9, 0, 0);
    img9.resize(width, 0);
  } else if (state == 10) {
    image(img10, 0, 0);
    img10.resize(width, 0);
  } else if (state == 11) {
    image(img11, 0, 0);
    img11.resize(width, 0);
  } else if (state == 12) {
    image(img12, 0, 0);
    img12.resize(width, 0);
  } else if (state == 13) {
    image(img13, 0, 0);
    img13.resize(width, 0);
  } else if (state == 14) {
    image(img14, 0, 0);
    img14.resize(width, 0);
  } else if (state == 15) {
    image(img15, 0, 0);
    img15.resize(width, 0);
  } else if (state == 16) {
    image(img16, 0, 0);
    img16.resize(width, 0);
  } else if (state == 17) {
    image(img17, 0, 0);
    img17.resize(width, 0);
  } else if (state == 18) {
    image(img18, 0, 0);
    img18.resize(width, 0);
  }

  text(typed, 20, 580);
}

function keyTyped() {
  if (key == '0') {
    state = 0;
  } else if (key == '1') {
    state = 1;
  } else if (key == '2') {
    state = 2;
  } else if (key == '3') {
    state = 3;
  } else if (key == '4') {
    state = 4;
  } else if (key == '5') {
    state = 5;
  } else if (keyCode == RETURN) {
    if (typed == 'start') {
      state = 1;
      typed = "";
    } else if (typed == 'lovely') {
      state = 1;
      typed = "";
    } else if (typed == 'tough') {
      state = 2;
      typed = "";
    } else if (typed == 'alone') {
      state = 3;
      typed = "";
    } else if (typed == 'path') {
      state = 4;
      typed = "";
    } else if (typed == 'something') {
      state = 5;
      typed = "";
    } else if (typed == 'somebody') {
      state = 6;
      typed = "";
    } else if (typed == 'cares') {
      state = 7;
      typed = "";
    } else if (typed == 'hard') {
      state = 8;
      typed = "";
    } else if (typed == 'back') {
      state = 9;
      typed = "";
    } else if (typed == 'that') {
      state = 10;
      typed = "";
    } else if (typed == 'okay') {
      state = 11;
      typed = "";
    } else if (typed == 'need') {
      state = 12;
      typed = "";
    } else if (typed == 'exist') {
      state = 13;
      typed = "";
    } else if (typed == 'nothing') {
      state = 14;
      typed = "";
    } else if (typed == 'bigger') {
      state = 15;
      typed = "";
    } else if (typed == 'flowers') {
      state = 16;
      typed = "";
    } else if (typed == 'me') {
      state = 17;
      typed = "";
    } else if (typed == 'together') {
      state = 18;
      typed = "";
    } else if (typed == 'end') {
      state = 0;
      typed = "";
    }
  } else {
    typed += key;
  }
}

function keyPressed() {
  if(keyCode == BACKSPACE) {
    typed = "";
  }
}