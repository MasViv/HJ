function startClassification()
{navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qp14RD_wq/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results)
        random_color_r=Math.floor(Math.random()*255)+1;
        random_color_g=Math.floor(Math.random()*255)+1;
        random_color_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='What UOs are Dancing to:'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Rating of Their Dancing:'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_confidence").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        document.getElementById("result_label").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";      
        img=document.getElementById('alien1');
        img1=document.getElementById('alien2');
        img2=document.getElementById('alien3');
        img3=document.getElementById('alien4');

        if (results[0].label=="NANI")
        {
            img.src='aliens-01.gif';
            img1.src='aliens-02.png';
            img2.src='aliens-03.png';
            img3.src='aliens-04.png';
        }
        else if (results[0].label=="Laughing")
        {
            img.src='aliens-01.png';
            img1.src='aliens-02.gif';
            img2.src='aliens-03.png';
            img3.src='aliens-04.png';
        }
        else if (results[0].label=="Jumpscaring")
        {
            img.src='aliens-01.png';
            img1.src='aliens-02.png';
            img2.src='aliens-03.gif';
            img3.src='aliens-04.png';
        }
        else
        {
            img.src='aliens-01.png';
            img1.src='aliens-02.png';
            img2.src='aliens-03.png';
            img3.src='aliens-04.gif';
        }
    }
}