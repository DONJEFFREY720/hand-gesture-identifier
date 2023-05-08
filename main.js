Webcam.set({
     height : 350,
     width : 300,
     image_format : "png",
     png_quality : 90
})

camera = document.getElementById("camera")
Webcam.attach("#camera")

function take_snapshot(){
     Webcam.snap(
          function(data_uri){
               document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>"
          }
     )
}

console.log("ml5 version  ",ml5.version )
classifier = ("https://teachablemachine.withgoogle.com/models/G2MX_nK3d/model.json",modelLoaded)

function modelLoaded(){
     console.log("modelLoaded")
}

function speak(){
     var synth = window.speechSynthesis
     speak_data = "YOU ARE SHOWING"+prediction;
     var utter_this = new SpeechSynthesisUtterance(speak_data)
     synth.speak(utter_this)
}
