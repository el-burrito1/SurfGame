$(document).on('ready' , function(){

var restart = function(){    

var contentStage = new Kinetic.Stage({
                container:'content',
                width:700,
                height:300
        });


        var waveLayer = new Kinetic.Layer();

        var whiteWash = new Kinetic.Layer();

        var checkID = whiteWash.isVisible();
    

        var whiteWash2 = new Kinetic.Layer();
        whiteWash2.id('whiteWash2');



        var waveFrame = new Kinetic.Shape({
                sceneFunc: function(context){
                        context.beginPath();
                        context.moveTo(2100,50);      //////right controls top right wave height//////
                        context.lineTo(90,415);
                        context.quadraticCurveTo(25,290,420,50); ////second from right moves top left, right controls top left/////
                        context.closePath();
                        context.fillStrokeShape(this);
                },
                fill: '#00D2FF',
                stroke: 'blue',
                strokeWidth: 6
        });

                waveLayer.add(waveFrame);

/////////BACKGROUND IS REQUIRED FOR HIDING OBJECTS////////////////

                var background = new Kinetic.Shape({
                sceneFunc: function(context){
                        context.beginPath();
                        context.moveTo(0,50);      //////right controls top right wave height//////
                        context.lineTo(90,415);
                        context.quadraticCurveTo(20,290,415,50); ////second from right moves top left, right controls top left/////
                        context.closePath();
                        context.fillStrokeShape(this);
                },
                fill: 'white',
        });

                var backRect = new Kinetic.Rect({
                    x:0,
                    y:0,
                    width:75,
                    height:300,
                    fill:'white',
                    stroke:'white'
                });


        whiteWash.add(backRect);
        whiteWash2.add(backRect);
        whiteWash.add(background);
        whiteWash2.add(background);

/////////PRIMARY WHITE WASH POSITION//////////////////

                var waveSpline1 = new Kinetic.Line({
                points: [110,300,179,134,420,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1,
        });

                var waveSpline2 = new Kinetic.Line({
                points: [90,280,159,114,340,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });

                var waveSpline3 = new Kinetic.Line({
                points: [70,260,129,94,275,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });

                var waveSpline4 = new Kinetic.Line({
                points: [50,240,109,74,210,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });

                var waveSpline5 = new Kinetic.Line({
                points: [40,240,90,54,175,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });
                var waveSpline6 = new Kinetic.Line({
                points: [30,240,65,34,125,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });





        waveSpline1.move({x:0,y:50});
        waveSpline2.move({x:0,y:55});
        waveSpline3.move({x:0,y:60});
        waveSpline4.move({x:0,y:65});
        waveSpline5.move({x:0,y:65});
        waveSpline6.move({x:0,y:70});

        whiteWash.add(waveSpline1);
        whiteWash.add(waveSpline2);
        whiteWash.add(waveSpline3);
        whiteWash.add(waveSpline4);
        whiteWash.add(waveSpline5);
        whiteWash.add(waveSpline6);


        ////////////SECONDARY WHITEWASH POSITION/////////////////


        var waveSpline1 = new Kinetic.Line({
                points: [120,300,169,134,420,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1,
        });

                var waveSpline2 = new Kinetic.Line({
                points: [90,280,149,114,320,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });

                var waveSpline3 = new Kinetic.Line({
                points: [70,260,119,94,250,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });

                var waveSpline4 = new Kinetic.Line({
                points: [55,240,100,74,200,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });

                var waveSpline5 = new Kinetic.Line({
                points: [40,250,90,24,160,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });
                var waveSpline6 = new Kinetic.Line({
                points: [15,240,40,14,95,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });



        waveSpline1.move({x:0,y:50});
        waveSpline2.move({x:5,y:55});
        waveSpline3.move({x:10,y:60});
        waveSpline4.move({x:5,y:65});
        waveSpline5.move({x:0,y:65});
        waveSpline6.move({x:9,y:60});

        whiteWash2.add(waveSpline1);
        whiteWash2.add(waveSpline2);
        whiteWash2.add(waveSpline3);
        whiteWash2.add(waveSpline4);
        whiteWash2.add(waveSpline5);
        whiteWash2.add(waveSpline6);



   
    ///////////////////////////////////////////


    var startRectangle = new Kinetic.Rect({
        x: 0,
        y: 0,
        width:700,
        height:300,
        fill:'#00D2FF',
        stroke:'white',
        strokeWidth:4,
        opacity:0
    })

        var startScreen = new Kinetic.Text({
        x: 325,
        y: 150,
        text: 'CLICK TO START!',
        fontSize: 18,
        fontFamily: 'helvetica',
        fill:'white'
    });

    waveLayer.add(startRectangle);
    waveLayer.add(startScreen);

    startRectangle.on('mousedown' , function(){
        startRectangle.remove();
        startScreen.remove();

        setInterval(function(){
        newShark();
        },1000);

        animation.start();


    });

   //////////////////////////////////////


    var rectangle = new Kinetic.Rect({
        x:400,
        y:200,
        width: 20,
        height: 20,
        fill: 'green',
        stroke: 'black',
        strokeWidth:1
   });

   waveLayer.add(rectangle);

   var rectangleY = 200;
   var direction = 0;

   var animation = new Kinetic.Animation(function(){
        rectangle.setY(rectangleY);
        rectangleY+=direction*1;

        if(rectangleY > 280){
            contentStage.off('mousedown');
            gameOver.visible(true);   
        }else if(rectangleY<50){
            contentStage.off('mousedown');
            gameOver.visible(true);   
        }

        },waveLayer);


   contentStage.on('mousedown' , function(){direction=-3});
   contentStage.on('mouseleave mouseup' , function(){direction=3});


///////////////////////////////////////////


    function newShark(name){
        name = new Kinetic.Rect({
        width: 10,
        height: 10,
        x: 700,
        y: Math.floor(Math.random()*(290-50+1))+50,
        fill: 'black'
    });

    waveLayer.add(name);

    var sharkX = 700;

    var sharkAttack = new Kinetic.Animation(function(){
      name.setX(sharkX);
      sharkX-=2;

      if(doCollide(name,rectangle)){
        gameOver.visible(true);
        contentStage.off('mousedown');
      }

      },waveLayer);

    sharkAttack.start();

    };

//////////////////////////////////////////


    function doCollide(a , b){
        var ax = a.x();
        var ay = a.y();
        var bx = b.x();
        var by = b.y();
        return(!(
            (bx > ax + a.width()) || (bx + b.width() < ax) || (by > ay + a.height())
            || (by + b.height() < ay)));
    };


//////////////////////////////////////////

    contentStage.add(waveLayer);
    contentStage.add(whiteWash);
    contentStage.add(whiteWash2);


    whiteWash2.hide();


    setInterval(function(){

        if(whiteWash.isVisible() == true){
                whiteWash.hide();
        }else{
                whiteWash.show()
        };

    },500);


    setInterval(function(){

        if(whiteWash2.isVisible() == false){
                whiteWash2.show();
        }else{
                whiteWash2.hide()
        };
    },500);


   /////////////////////////////

    var gameOver = new Kinetic.Text({
        x: 525,
        y: 65,
        text: 'WIPE OUT!',
        fontSize: 20,
        fontFamily: 'helvetica',
        fill: 'white'
      });

    gameOver.visible(false);

    waveLayer.add(gameOver);

    ////////////////////////////////////////////////////////////

};

restart();

$('#restart').on('click' , function(){
    restart();
});


});


