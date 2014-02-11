$(document).on('ready' , function(){

var stage = new Kinetic.Stage({
		container:'container',
		width:700,
		height:300
	});


	var layer = new Kinetic.Layer();
	var waveLayer = new Kinetic.Layer();

	var background = new Kinetic.Shape({
		sceneFunc: function(context){
			context.beginPath();
			context.moveTo(90,50);      //////right controls top right wave height//////
			context.lineTo(90,415);
			context.quadraticCurveTo(25,290,420,50); ////second from right moves top left, right controls top left/////
			context.closePath();
			context.fillStrokeShape(this);
		},
		fill: 'white',
	});

	layer.add(background);


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

	layer.add(waveSpline1);
	layer.add(waveSpline2);
	layer.add(waveSpline3);
	layer.add(waveSpline4);
	layer.add(waveSpline5);
	layer.add(waveSpline6);


		///////////////WHITE WASH SEQUENCE ABOVE/////////////////////


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

      //////////////RIDEABLE WAVE AREA///////////////////////

 

    var circle = new Kinetic.Circle({
    	x: 800,
    	y: 155,
    	radius: 10,
    	fill: 'red',
    	stroke:'black',
    	strokeWidth: 4
    });

      waveLayer.add(circle);



    ////////TEST OBJECT-- WILL BE CONVERTED TO SHARK////////////////


   	var sharkAnimate = new Kinetic.Tween({
   		node: circle,
   		duration:2,
   		x:200,
   		y:155,
   	});


   	setTimeout(function(){
   		sharkAnimate.play();
   	},2000);


    /////////SHARK ANIMATION IS ABOVE//////////////

    var triangle = new Kinetic.RegularPolygon({
        x: 350,
        y: 200,
        sides: 3,
        radius: 10,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
      });

    waveLayer.add(triangle);


    var num = 10;
    
    $(document).on('click' , function(){
    	triangle.y += num;
    	console.log(triangle.y);
    });



    stage.add(layer);
    layer.moveToTop();
    stage.add(waveLayer);
    waveLayer.moveToBottom();




















})