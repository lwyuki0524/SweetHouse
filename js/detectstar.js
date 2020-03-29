function Starat(num){//方法:num是幾，就會有幾顆星變色
	for(var i=0;i<num;i++){
		document.write("<span class='checked'>★</span>");
	}
	for(var i=0;i<(5-num);i++){
		document.write("<span>★</span>");
	}
}

Starat(4);//這是給四顆星的意思