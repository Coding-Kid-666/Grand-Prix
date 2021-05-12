car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_X = 10
car1_Y = 175;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_X = 10
car2_Y = 340;

canvas = document.getElementById("marsCanvas");
ctx=canvas.getContext("2d");
backgroundImg = "canvasbg.png";



function isloaded(){
    console.log("Loaded succesfuly.")
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBg();
    backgroundImgTag.src=backgroundImg;

    roverImgTag=new Image();
    roverImgTag.onload=uploadRover();
    roverImgTag.src=car1_image;

    roverImgTag2=new Image();
    roverImgTag2.onload=uploadRover2();
    roverImgTag2.src=car2_image;
}
function uploadBg(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverImgTag,car1_X,car1_Y,car1_width,car1_height);
}
function uploadRover2(){
    ctx.drawImage(roverImgTag2,car2_X,car2_Y,car2_width,car2_height);
}


window.addEventListener("keydown",my_Keydown);

function my_Keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed == 37){
        console.log("LEFT")
        Left();
    }else if(keypressed == 38){
        console.log("UP");
        Up();
    }else if(keypressed == 39){
        console.log("RIGHT");
        Right();
    }else if(keypressed == 40){
        console.log("DOWN");
        Down();
    }   
    console.log(keypressed);

}
window.addEventListener("keydown",my_Keydown2);

function my_Keydown2(e){
    keypressed2=e.keyCode;
    console.log(keypressed2);
     if(keypressed2 == 65){
        console.log("A")
        A();
    }else if(keypressed2 == 87){
        console.log("W");
        W();
    }else if(keypressed2 == 68){
        console.log("D");
        D();
    }else if(keypressed2 == 83){
        console.log("S");
        S();
    }  
    console.log(keypressed2);

}

function Left(){
    if(car1_X >= 0){
        car1_X= car1_X-10;
        console.log("When Up is pressed,X= " + car1_X + "Y = " + car1_Y);
        uploadBg();
        uploadRover();
        uploadRover2();
}
}
function Up(){
    if(car1_Y >= 0){
        car1_Y= car1_Y-10;
            console.log("When Up is pressed,X= " + car1_X + "Y = " + car1_Y);
            uploadBg();
            uploadRover();
            uploadRover2();
}
}
function Right(){
    if(car1_X <= 700){
        car1_X= car1_X+10;
            console.log("When Up is pressed,X= " + car1_X + "Y = " + car1_Y);
            uploadBg();
            uploadRover();
            uploadRover2();
}
}
function Down(){
    if(car1_Y <= 500){
        car1_Y= car1_Y+10;
        console.log("When Up is pressed,X= " + car1_X + "Y = " + car1_Y);
        uploadBg();
        uploadRover();
        uploadRover2();
    }
}

function A(){
    if(car2_X >= 0){
        car2_X= car2_X-10;
        console.log("When Up is pressed,X= " + car2_X + "Y = " + car2_Y);
        uploadBg();
        uploadRover();
        uploadRover2();
}
}
function W(){
    if(car2_Y >= 0){
        car2_Y= car2_Y-10;
            console.log("When Up is pressed,X= " + car2_X + "Y = " + car2_Y);
            uploadBg();
            uploadRover();
            uploadRover2();
}
}
function D(){
    if(car2_X <= 700){
        car2_X= car2_X+10;
            console.log("When Up is pressed,X= " + car2_X + "Y = " + car2_Y);
            uploadBg();
            uploadRover();
            uploadRover2();
}
}
function S(){
    if(car2_Y <= 500){
        car2_Y= car2_Y+10;
        console.log("When Up is pressed,X= " + car2_X + "Y = " + car2_Y);
        uploadBg();
        uploadRover();
        uploadRover2();
    }
}