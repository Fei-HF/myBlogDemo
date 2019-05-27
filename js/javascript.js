(function () {
    if(!!window.ActiveXObject || "ActiveXObject" in window) {
        alert("123");
    }
    window.onload = function () {
        var oUl = document.getElementById("list").children[0],
             oList = oUl.children,
             oBtn = document.getElementById("btn").getElementsByTagName("li");
        var num = 5;
        var listNum = num*num*num,
             timer = null;
        (function () {
            for (var i = 0; i< listNum; i++) {
                var oLi = document.createElement("li");
                oLi.index = i;
                var data1 = data[i];
                var x = Math.random() * 3000 - 1500;
                var y = Math.random() * 3000 - 1500;
                var z = Math.random() * 3000 - 1500;
                if (data1) {
//                  oLi.style.background = "url('" + ../img/下载.png + "') center/cover";
                    oLi.innerHTML = data1.content;
                }
                oLi.style.transform = "translate3D(" + x + "px," + y + "px," + z + "px)";
                oUl.appendChild(oLi);
            }
            setTimeout(table,300);
        })();
//      表格
        function table() {
            if (!table.isClick) {
                table.str = [];
                var midy = Math.ceil(listNum / 18) / 2,
                    midx = 18 / 2 - 0.5,
                    left = 200,
                    top = 200;
                var arr = [
                    {x : 0 , y : 0},
                    {x : 17 , y : 0},
                    {x : 0 , y : 1},
                    {x : 1 , y : 1},
                    {x : 2 , y : 1},
                    {x : 13 , y : 1},
                    {x : 14 , y : 1},
                    {x : 15 , y : 1},
                    {x : 16 , y : 1},
                    {x : 17 , y : 1},
                    {x : 0 , y : 2},
                    {x : 1 , y : 2},
                    {x : 2 , y : 2},
                    {x : 13 , y : 2},
                    {x : 14 , y : 2},
                    {x : 15 , y : 2},
                    {x : 16 , y : 2},
                    {x : 17 , y : 2}
                ];
                var x = 0 , y = 0;
                for (var i = 0; i < listNum; i++) {
                    var oLi = oList[i];
                    if (i < 18) {
                        x = arr[i].x;
                        y = arr[i].y;
                    }else {
                        x = i % 18;
                        y = Math.floor(i / 18) + 2;
                    }
                    var str = "translate3D(" + (x - midx) * left + "px," + (y - midy) * top + "px,0px)";
                    table.str[i] = str;
                    oLi.style.transform = str;
                    table.isClick = true;
                }
            }else {
                for (var i = 0; i < listNum; i++) {
                    var oLi = oList[i];
                    oLi.style.transform = table.str[i];
                }
            }
        }
        
//      圆球形
        function sphere() {
            if (!sphere.isClick) {
                sphere.str = [];
                var arr = [1,3,7,9,11,14,21,16,12,10,9,7,4,1],
                    length = arr.length,
                    rotX = 180 / (length - 1); 
                for (var j = 0; j < listNum; j++) {
                    var num = 0;
                    for (var i = 0; i < length; i++) {
                        num += arr[i];
                        if (num > j) {
                            var floor = i;
                            var floorNum = arr[i] - (num - j);
                            break;
                        }
                    }
                    var rotY = Math.floor(360 / arr[floor]);
                    var str =  "rotateY("+(floorNum+1.3)*rotY+"deg) rotateX(" + (90 - floor * rotX) + "deg)  translateZ(800px)"
                    sphere.str[j] = str;
                    oList[j].style.transform = str;
                    sphere.isClick = true;
                }
            }else {
                for (var i = 0; i < listNum; i++) {
                    var oLi = oList[i];
                    oLi.style.transform = sphere.str[i];
                }
            }
        }
        function helix() {
            if (!helix.isClick) {
                helix.str = [];
//              定义球的圈数
                var floor = 4,
//              每层个数
                    num = Math.round(listNum / floor),
//                  旋转角度
                    deg = 360 / num,
//                  偏移量
                    height = 7,
//                  偏移到偏中间的位置
                    mid = listNum / 2;
                for (var i = 0; i < listNum; i++) {
                    var str = "rotateY(" + i * deg + "deg) translateY(" + (i - mid)*height + "px) translateZ(800px)"
                    helix.str[i] = str;
                    oList[i].style.transform = str;
                    helix.isClick = true;
                }
            }else {
                for (var i = 0; i < listNum; i++) {
                    var oLi = oList[i];
                    oLi.style.transform = helix.str[i];
                }
            }
        }
//      网格
        function grid() {
            if (!grid.isClick) {
                grid.str = [];
                var mid = Math.floor(num / 2);
                var intervalX = 300,
                    intervalY = 300,
                    intervalZ = 600;
                for (var i = 0; i< listNum; i++) {
                    var oLi = oList[i];
                    oLi.x = Math.floor(i % 5);
                    oLi.y = Math.floor(i % 25 / 5);
                    oLi.z = Math.floor(i / 25);
                    var x = (oLi.x- mid) * intervalX,
                        y = (oLi.y - mid) * intervalY,
                        z = (oLi.z - mid) * intervalZ;
                    var str = "translate3D(" + x + "px," + y + "px," + z + "px)";
                    grid.str[i] = str;
                    oLi.style.transform = str;
                    grid.isClick = true;
                }
            }else {
                for (var i = 0; i < listNum; i++) {
                    var oLi = oList[i];
                    oLi.style.transform = grid.str[i];
                }
            }
        }
        ~function () {
            var oAlert = document.getElementById("alert"),
                 oTitle = oAlert.getElementsByTagName("span")[0],
                 oA = oAlert.getElementsByTagName("a")[0],
                 oImg = oAlert.getElementsByClassName("pic")[0],
                 oAnnotation = oAlert.getElementsByClassName("annotation")[0],
                 oContent = oAlert.getElementsByClassName("content")[0];
            var This = oAlert;
            var animationOff = false;
            document.onclick = function () {
                if (This && This.style.display === "block" && !animationOff) {
                        hide();
                }
            };
            oAlert.onclick = function (e) {
                e.cancelBubble = true;
            };
            oAlert.onmousedown = function (e) {
                e.cancelBubble = true;
            };
            oUl.onclick = function (e) {
                var listClick = e.target;
                e.cancelBubble = true;
                if (/li/i.test(listClick.nodeName)) {
                    if (!animationOff) {
                       var data1 = data[listClick.index];
                       if (data1) {
                           oTitle.innerHTML = data1.title;
                           oA.href = data1.href;
                           oImg.src = data1.pic;
                           oAnnotation.innerHTML = data1.annotation;
                           oContent.innerHTML = "这是一个属于你自己的相册，点击进入欣赏属于自己的一份回忆吧。点击右侧图片,进入你的世界.";
                       }else {
                           oTitle.innerHTML = "";
                           oA.href = "";
                           oImg.src = "";
                           oAnnotation.innerHTML = "";
                           oContent.innerHTML = "";
                       }

                        show();
                    }
                }
            };
            function show() {
                var time = 300,
                     timer = new Date();
                animationOff = true;
                function fn() {
                    var scal = (new Date() - timer) / time;
                    if (scal >= 1) {
                        scal = 1;
                    }
                    oAlert.style.display = "block";
                    oAlert.style.transform = "rotateY(0deg) scale(" + (2 - scal) + ")";
                    oAlert.style.opacity = scal;
                    if (scal === 1) {
                        animationOff = false;
                        return;
                    }
                    requestAnimationFrame(fn);
                }
                requestAnimationFrame(fn);
            }
            function hide() {
                var time = 1000,
                     reg = 360,
                    timer = new Date();
                function fn() {
                    animationOff = true;
                    var scal = (new Date() - timer) / time;
                    if (scal >= 1) {
                        scal = 1;
                    }
                    oAlert.style.transform = "rotateY(" + (reg * scal) + "deg) scale(" + (1 - scal) + ")";
                    oAlert.style.opacity = 1 - scal;
                    if (scal === 1) {
                        oAlert.style.display = "none";
                        animationOff = false;
                        return;
                    }
                    requestAnimationFrame(fn);
                }
                requestAnimationFrame(fn);
            }
        }();
        ~function () {
            var translateZ = -1800,
                rotateX = 0,
                rotateY = 0;
            document.onselectstart = function () {
                return false;
            };
            document.onmousedown = function (e) {
                var lastX = e.clientX;
                var lastY = e.clientY;
                var moveX = 0,
                    moveY = 0;
                cancelAnimationFrame(timer);
                this.onmousemove = function (e) {
                    moveX = e.clientX - lastX;
                    moveY = e.clientY - lastY;
                    rotateX -=  moveY * 0.15;
                    rotateY +=  moveX * 0.15;
                    lastX = e.clientX;
                    lastY = e.clientY;
                    oUl.style.transform = "translateZ("+translateZ+"px) rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)";
                };
                this.onmouseup = function () {
                    timer = requestAnimationFrame(inertia);
                    function inertia() {
                        moveY *= 0.9;
                        moveX *= 0.9;
                        rotateX -= moveY * 0.15;
                        rotateY += moveX * 0.15;
                        oUl.style.transform = "translateZ("+translateZ+"px) rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)";
                        if (Math.abs(moveX) < 0.1 && Math.abs(moveY) < 0.1) {
                            return;
                        }
                        timer = requestAnimationFrame(inertia);
                    }
                    this.onmousemove = null;
                };
            };
            !function (fn) {
                if (document.onmousewheel === null) {
                    document.onmousewheel = function (e) {
                        var transZ = e.wheelDelta / 120;
                        fn.call(this,transZ);
                    }
                }else {
                    document.addEventListener("DOMMouseScroll" , function (e) {
                        var transZ = -e.detail / 3;
                        fn.call(this , transZ);
                    } , false)
                }
            }(function (transZ) {
                translateZ += transZ * 100;
                oUl.style.transform = "translateZ("+translateZ+"px) rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)";
            });
        }();
        (function () {
            var arr = [table , sphere , helix , grid];
            for (var i = 0,length = oBtn.length; i < length; i++) {
                (function (i) {
                    arr[i].isClick = false;
                    oBtn[i].onclick = function () {
                        arr[i]();
                        for (var j = 0; j < length; j++) {
                            oBtn[j].className = "";
                        }
                        oBtn[i].className = "click";
                    };
                })(i)
            }
        })();
        (function () {
            var oReadme = document.querySelector("#frame .readme"),
                 oHide = document.querySelector("#frame .readme .hide");
            var bool = true;
            oReadme.onclick = function () {
                if (!bool) {
                    oHide.style.display = "block";
                    bool = !bool;
                }else{
                    oHide.style.display = "none";
                    bool = !bool;
                }
            }

        })();
    }
})();



