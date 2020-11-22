
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

    if(Content == "take my selfie"|| Content == "take my picture" || Content == "take my photo" || Content == "take my pic"){
        console.log("Taking selfie, please wait");

        speak();

        setTimeout(function(){
            take_snapshot();
            save();
        }, 5000);
    }   
}



function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    console.log(pngqualityinput);

    Webcam.attach(camara);  
}

pngqualityinput = document.getElementById("pngquality").value;

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_image_taken' src='"+data_uri+"'>"
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image_taken").src;
    link.href = image;
    link.click();
}

Webcam.set({
    width:360,
    height:360,
    image_format:'jpeg',
    jpeg_quality:100
});

camara = document.getElementById("camera")