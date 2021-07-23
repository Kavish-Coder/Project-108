prediction_1="";

prediction_2="";

prediction_3="";

prediction_4="";

prediction_5="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B4GtTm0gH/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!!!!!!!!!!!!");
}


function check() {
    img = document.getElementById('captured_image');

    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name_2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        
        if (results[0].label == "High Five") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
            function speak() {
                var synth=window.speechSynthesis;
            
                speak_data_1="Yeah! High Five" + prediction_1;
            
                var utterThis=new SpeechSynthesisUtterance(speak_data_1);
                
                utterThis.rate = 0.5;
            
                synth.speak(utterThis);
            
            }
        speak();
        }

        if (results[0].label == "Thumbs Up") {
            document.getElementById("update_emoji").innerHTML = "&#12532;";
            function speak() {
                var synth=window.speechSynthesis;
            
                speak_data_2="All The Best!" + prediction_2;
            
                var utterThis=new SpeechSynthesisUtterance(speak_data_2);
                
                utterThis.rate = 0.5;
            
                synth.speak(utterThis);
            
            }
        speak();
        }

        if (results[0].label == "Thumbs Down") {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
            function speak() {
                var synth=window.speechSynthesis;
            
                speak_data_3="Loser!!" + prediction_3;
            
                var utterThis=new SpeechSynthesisUtterance(speak_data_3);
                
                utterThis.rate = 0.5;
            
                synth.speak(utterThis);
            
            }
        speak();
        }

        if (results[1].label == "Yo") {
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
            function speak() {
                var synth=window.speechSynthesis;
            
                speak_data_4="Yo Bro!" + prediction_4;
            
                var utterThis=new SpeechSynthesisUtterance(speak_data_4);
                
                utterThis.rate = 0.5;
            
                synth.speak(utterThis);
            
            }
        speak();
        }

        if (results[1].label == "Cheese") {
            document.getElementById("update_emoji2").innerHTML = "&#12532;";
            function speak() {
                var synth=window.speechSynthesis;
            
                speak_data_5="Cheeeeese" + prediction_5;
            
                var utterThis=new SpeechSynthesisUtterance(speak_data_5);
                
                utterThis.rate = 0.5;
            
                synth.speak(utterThis);
            
            }
        speak();
        }

        
    }
}