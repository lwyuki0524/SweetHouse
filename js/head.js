﻿document.writeln("	<div class=\"gotop\" onclick=\"window.scrollTo(0,0);return false;\" title=\"回頂部\"></div>");
document.writeln("	<nav>");
document.writeln("		<div class=\"navbar\">");
document.writeln("			<!--分隔-->");
document.writeln("			<div class=\"navbar-logo\">");
document.writeln("				<a href=\"index.html\"><img src=\"img/logo.png\" alt=\"\"></a>");
document.writeln("			</div>");
document.writeln("			<!--分隔-->");
document.writeln("			<a href=\"index.html\">");
document.writeln("				<div class=\"navbar-a\" id=\"navbar-index\">首頁</div>");
document.writeln("			</a>");
document.writeln("			<!--分隔-->");
document.writeln("			<a href=\"about.html\">");
document.writeln("				<div class=\"navbar-a\" id=\"navbar-about\">關於我們</div>");
document.writeln("			</a>");
document.writeln("			<!--分隔-->");
document.writeln("			<a href=\"Flow_Chart.html\">");
document.writeln("				<div class=\"navbar-a\" id=\"navbar-Flow_Chart\">購物流程</div>");
document.writeln("			</a>");
document.writeln("			<!--分隔-->");
document.writeln("			<div class=\"dropdown\">");
document.writeln("				<a href=\"#\">");
document.writeln("					<div class=\"dropbtn\">");
document.writeln("						<div class=\"dropbtn-style\">分類<div class=\"dropbtn-icon\"></div>");
document.writeln("						</div>");
document.writeln("					</div>");
document.writeln("				</a>");
document.writeln("				<div class=\"dropdown-content\">");
document.writeln("					<div class=\"triangle\"></div>");
document.writeln("					<div class=\"body\">");
document.writeln("						<div class=\"dropdown-row\">");
document.writeln("							<!--小分隔-->");
document.writeln("							<div class=\"dropdown-cell\">");
document.writeln("								<div class=\"dropdown-title\">糖果</div>");
document.writeln("								<a href=\"ProductList.html#糖果\">");
document.writeln("									<div class=\"dropdown-a\">全部</div>");
document.writeln("								</a>");
document.writeln("								<a href=\"ProductList.html#糖果_巧克力\">");
document.writeln("									<div class=\"dropdown-a\">巧克力</div>");
document.writeln("								</a>");
document.writeln("								<a href=\"ProductList.html#糖果_軟糖\">");
document.writeln("									<div class=\"dropdown-a\">軟糖</div>");
document.writeln("								</a>");
document.writeln("								<a href=\"ProductList.html#糖果_口香糖\">");
document.writeln("									<div class=\"dropdown-a\">口香糖</div>");
document.writeln("								</a>");
document.writeln("							</div>");
document.writeln("							<!--小分隔-->");
document.writeln("							<div class=\"dropdown-cell\">");
document.writeln("								<div class=\"dropdown-title\">餅乾</div>");
document.writeln("								<a href=\"ProductList.html#餅乾\">");
document.writeln("									<div class=\"dropdown-a\">全部</div>");
document.writeln("								</a>");
document.writeln("								<a href=\"ProductList.html#餅乾_巧克力\">");
document.writeln("									<div class=\"dropdown-a\">巧克力</div>");
document.writeln("								</a>");
document.writeln("								<a href=\"ProductList.html#餅乾_草莓\">");
document.writeln("									<div class=\"dropdown-a\">草莓</div>");
document.writeln("								</a>");
document.writeln("							</div>");
document.writeln("							<!--小分隔-->");
document.writeln("							<div class=\"dropdown-cell\">");
document.writeln("								<div class=\"dropdown-title\">布丁</div>");
document.writeln("								<a href=\"ProductList.html#布丁\">");
document.writeln("									<div class=\"dropdown-a\">全部</div>");
document.writeln("								</a>");
document.writeln("								<a href=\"ProductList.html#布丁_雞蛋口味\">");
document.writeln("									<div class=\"dropdown-a\">雞蛋</div>");
document.writeln("								</a>");
document.writeln("								<a href=\"ProductList.html#布丁_果凍類\">");
document.writeln("									<div class=\"dropdown-a\">果凍</div>");
document.writeln("								</a>");
document.writeln("							</div>");
document.writeln("							<!--小分隔-->");
document.writeln("						</div>");
document.writeln("					</div>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("			<!--分隔，這邊是登入前的按鈕-->");
document.writeln("			<div class=\"navbar-right\">");
document.writeln("				<a href=\"login.html\" title=\"登入／註冊\"><img src=\"img/enter.svg\" alt=\"\"></a>");
document.writeln("			</div>");
document.writeln("			<!--分隔，登入後將改用這個部分的按鈕XD「style=\"display: none;\"」用來隱藏按鈕用。-->");
document.writeln("			<div class=\"navbar-right\" style=\"display: none;\">");
document.writeln("				<a href=\"#\" title=\"登出\"><img src=\"img/exit.svg\" alt=\"\"></a>");
document.writeln("			</div>");
document.writeln("			<!--分隔，登入後將改用這個部分的按鈕XD「style=\"display: none;\"」用來隱藏按鈕用。-->");
document.writeln("			<div class=\"navbar-right\" style=\"display: none;\">");
document.writeln("				<a href=\"member.html\" title=\"會員中心\"><img src=\"img/round-account.svg\" alt=\"\"></a>");
document.writeln("			</div>");
document.writeln("			<!--分隔-->");
document.writeln("			<div class=\"navbar-right\">");
document.writeln("				<a href=\"ShoppingCarList.html\" title=\"購物車\" style=\"position: relative;\"><img src=\"img/shopping-cart.svg\" alt=\"\"><span class=\"navbar-right-num\">0");
document.writeln("						<!--已加入購物車的商品數量-->");
document.writeln("					</span></a>");
document.writeln("			</div>");
document.writeln("			<!--分隔-->");
document.writeln("		</div>");
document.writeln("	</nav>");