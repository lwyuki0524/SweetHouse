function newElement() {
  var li = document.createElement("li");
  var inputImg = document.getElementsByClassName("pro_img_to_car").src;
  var inputName = document.getElementsByClassName("pro_name_to_car").innerHTML;
  var inputPrice = document.getElementsByClassName("pro_price_to_car").innerHTML;
  var amount;
  /*var I = document.createTextNode(inputImg);*/
  var N = document.createTextNode(inputName);
  var P = document.createTextNode(inputPrice);

  for(var i=0;i<inputImg.length;i++){
    element[i].onclick = function(){

    }
  }

  
  var div = document.createElement("DIV");
  li.appendChild(div);
  div.style.display="flex";

  var div1 = document.createElement("DIV");
  div.appendChild(div1);
  var img = document.createElement("IMG");
  div1.appendChild(img);
  div1.className=".shop_list img";
  img.src=inputImg;

  var div2 = document.createElement("DIV");
  div2.className="list_pro_name";
  div.appendChild(div2);


  var div3 = document.createElement("DIV");
  div3.className="list_pro_amount_price";
  div.appendChild(div3);

  /*div1.appendChild(I);*/
  div2.appendChild(N);
  div3.appendChild(P);
/*
  var countN=document.getElementsByClassName("pro_name_to_car");
  for(var i=0;i<countN.length;i++){
    if(inputName==)
  }
  */
  
  document.getElementById("ul_shopcar").appendChild(li);


  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
/*
document.write("<script src=\"js/shopcarlist_remove.js\"></script>")


function add_pro_tocar(){
  document.write("<li>");
  document.write("<div style=\"display: flex;\">");
  document.write("<div><img src=\"img/kinder_chocolate.png\" alt=\"產品照片\"></div>");
  document.write("<div class=\"list_pro_name\">商品名稱</div>");
  document.write("<div class=\"list_pro_amount_price\">數量:2個 X $:35元</div>");
  document.write("</div>");
  document.write("</li>");
}
*/