function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Z9N2k5ARI/model.json', sound);
}
function sound()
{ 
 classifier.classify( gotResults); }

 function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
 }
   
