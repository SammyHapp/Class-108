//Heloo

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ni9oY-L0B/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results) {
    if (error) {
        console.error(error);

    } else {
        console.log(results);
        color_r = Math.floor(Math.random() * 255) + 1;
        color_g = Math.floor(Math.random() * 255) + 1;
        color_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2)+ "%";
        document.getElementById("result_label").style.color = "rgb("+ color_r +" , "+ color_g +" , "+ color_b +")";
        document.getElementById("result_confidence").style.color = "rgb("+ color_r +" , "+ color_g +" , "+ color_b +")";
        
        img = document.getElementById("alien_1");
        img_1 = document.getElementById("alien_2");
        img_2 = document.getElementById("alien_3");
        img_3 = document.getElementById("alien_4");

        if ( results[0].label == "Bell") {
            img.src= 'aliens-01.gif';
            img_1.src= 'aliens-02.png';
            img_2.src= 'aliens-03.png';
            img_3.src= 'aliens-04.png'; 
        }
        else if ( results[0].label == "Snapping") {
            img.src= 'aliens-01.png';
            img_1.src= 'aliens-02.gif';
            img_2.src= 'aliens-03.png';
            img_3.src= 'aliens-04.png'; 
        }

        else if ( results[0].label == "Clapping") {
            img.src= 'aliens-01.png';
            img_1.src= 'aliens-02.png';
            img_2.src= 'aliens-03.gif';
            img_3.src= 'aliens-04.png'; 
        }

        else {
            img.src= 'aliens-01.png';
            img_1.src= 'aliens-02.png';
            img_2.src= 'aliens-03.png';
            img_3.src= 'aliens-04.gif'; 
        }
    }
} 