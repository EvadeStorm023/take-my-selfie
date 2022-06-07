var SpeechRecognition = window.webkitSpeechRecognition;
  Recog = new SpeechRecognition();
  function voice_activate(){
      document.getElementById('textbox').innerHTML = "";
      Recog.start();
  }
Recog.onresult = function(event){
    console.log(event);
    var data1 = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = data1;
    if(data1 == "take my selfie"){
      speak();
      
    }
    
}

function speak (){
synth = window.speechSynthesis;
sd = "taking your selfie in 5 seconds";
uttert = new SpeechSynthesisUtterance(sd);
synth.speak(uttert)
Webcam.attach('#camera');
setTimeout( function(){
  take_snapshot();
save();
},5000);

}

Webcam.set({
  width : 250,
  height : 250,
  image_format: "png",
  png_quality : 90
});

camera = document.getElementById('camera');

function take_snapshot(){
  Webcam.snap(function(data_uri){
  document.getElementById("photo").innerHTML = "<img src ="+data_uri+" id='display_img'>"
  });
}


function save(){
  link = document.getElementById("link");
  image = document.getElementById("display_img").src;
  link.href = image;
  link.click();
}




