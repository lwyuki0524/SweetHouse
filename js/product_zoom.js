
magnify("pro_pic", 3);

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);//抓到圖片元素存到img裡
  /*create magnifier glass:*/
  glass = document.createElement("DIV");//建立一個div存在glass變數(相當於<div></div>)
  glass.setAttribute("class", "pro_zoom");//設定此div的class=pro_zoom(相當於<div class="pro_zoom"></div>)
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);//將此div跟圖片元素插到圖片的父元素前
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";//設定放大鏡的背景圖
  glass.style.backgroundRepeat = "no-repeat";//設定背景圖示不重複的
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";//設定背景圖的大小(原圖的寬度乘上倍率、高度乘上倍率)
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
 // glass.addEventListener("touchmove", moveMagnifier);
 // img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);//取得滑鼠所在位置(呼叫方法)
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    //glass.style.left = (x - w) + "px";/*這裡是會讓放大鏡移動的*/
    //glass.style.top = (y - h) + "px";/*這裡是會讓放大鏡移動的*/
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

