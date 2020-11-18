
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function selfie(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run (event){
    console.log(event);

    var Content = event.results[0][0].transcript;

    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    speak();
}



function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    console.log(pngqualityinput);

    Webcam.attach(camara)
}

pngqualityinput = document.getElementById("pngquality").value;

Webcam.set({
    width:360,
    height:360,
    image_format:'jpeg',
    jpeg_quality:pngqualityinput
});

camara = document.getElementById("camera")