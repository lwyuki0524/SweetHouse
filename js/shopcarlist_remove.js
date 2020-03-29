/*在清單上建立remove的button*/
var listNode = document.getElementsByTagName("LI");//取出li標籤，將它存到listNode
var i;
for (i = 0; i < listNode.length; i++) {//用迴圈將li的內容做改變
	var span = document.createElement("SPAN");//新增一個span元素(相當於<span></span>)
	var txt = document.createTextNode("\u00D7");//將\u00D7也就是x加到txt文字節點
	span.className = "remove";//設定剛剛新增的span的class名稱=remove(相當於<span class="remove"></span>)
	span.appendChild(txt);//將子元素txt加到父元素span裡(相當於<span>txt</span>)
	listNode[i].appendChild(span);//將子元素span節點加到父元素listNode中
}
/*在清單上建立remove的button*/

/*點擊button會隱藏那一列的清單內容*/
var remove = document.getElementsByClassName("remove");//取得.close的元素存在close變數中
var i;
for (i = 0; i < remove.length; i++) {
	remove[i].onclick = function() {//remove被點擊會啟動function
		var div = this.parentElement;//.remove的父元素會存在div變數中(相當於<div><span class="remove">txt</span></div>)
		div.style.display = "none";//將div的style的display屬性設為none(相當於css中: div{display:none;})
	}
}
/*點擊button會隱藏那一列的清單內容*/

