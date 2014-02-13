function doCollide(a , b){
   var ax = a.x();
   var ay = a.y();
   var bx = b.x();
   var by = b.y();

   return(!(
      (bx > ax + a.width()) || (bx + b.width() < ax) || (by > ay + a.height()) || (by + b.height() < ay)));
};


function scoreKeeper(){
   count++
}



    count=0;

    function scoreKeeper(){
      
      count++;

      var score = new Kinetic.Text({
        X:665,
        Y:280,
        text: count,
        fontSize:18,
        fill:'white'
    })

      waveLayer.add(score);

    };

    setInterval(function(){
        scoreKeeper();
    },100)


    function scoreKeeper(){

    var finalScore = new Kinetic.Text({
        X:665,
        Y:280,
        text: count,
        fontSize:18,
        fill:'white'
    })
 }