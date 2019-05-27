(function () {
    var oC = document.querySelector('canvas');
    var cxt = oC.getContext('2d');
    var w = oC.width = window.innerWidth;
    var h = oC.height = window.innerHeight;

    var stars = [],
         maxStars = 1200;
         count = 0,
         hue = 217;

    var oC2 = document.createElement('canvas');
    var cxt2 = oC2.getContext('2d');
    oC2.width = 100;
    oC2.height = 100;
    var half = oC2.width/2;
    var gradient2 = cxt2.createRadialGradient(half,half,0,half,half,half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    cxt2.fillStyle = gradient2;
    cxt2.beginPath();
    cxt2.arc(half,half,half,0,2*Math.PI,false);
    cxt2.fill();

    var Star = function () {
        this.orbitRadius = random(maxOrbit(w,h)); 
        this.radius =  random(60,this.orbitRadius)/12;
        this.orbitX = w/2;
        this.orbitY = h/2;
        this.timePassed = random(0,maxStars); 
        this.speed = random(this.orbitRadius) / 900000;
        this.alpha = random(2,10)/10;

        count ++;
        stars[count] = this; 
    };
    Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed)*this.orbitRadius+this.orbitX;
        var y = Math.cos(this.timePassed)*this.orbitRadius+this.orbitY;

        cxt.globalAlpha = this.alpha;

        var Twinkle = random(10);
        if( Twinkle ===1 && this.alpha >0 ){
            this.alpha -=0.05;
        }else if( Twinkle === 2 && this.alpha<1 ){
            this.alpha += 0.05;
        }

        cxt.drawImage(oC2,x-this.radius/2,y-this.radius/2,this.radius,this.radius);
        this.timePassed += this.speed;
    };

    play();
    function play() {

        cxt.clearRect( 0,0,w,h );
        for( var i=1;i<stars.length;i++ ){
            stars[i].draw();
        }
        requestAnimationFrame(play);
    }

    for( var i=0;i<maxStars;i++){
        new Star();
    }

    for( var i=0;i<50;i++ ){
        //console.log( random(10) );
    }
    function random(min,max) // min<=n<=max
        if( arguments.length < 2 ){
            max = min;
            min = 0;
        }
        if( min > max ){
            var h = max;
            max = min;
            min = h;
        }
        return Math.floor( Math.random()*(max-min+1) )+min;
    }
    function maxOrbit(x,y) {
        var max = Math.max(x,y);
        var diameter = Math.round( Math.sqrt( max*max + max*max ) );
        return (diameter/2);
    }
})();