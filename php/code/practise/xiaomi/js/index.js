			var cwdata=990;
			/*ie6兼容*/
			if(!window.innerHeight){
				var iewidth = document.documentElement.clientWidth;
			}else{
				var iewidth = window.innerWidth;
			}
			if(iewidth<=1240){
				document.getElementById("container1").style.width = "930px";
				document.getElementById("container2").style.width = "930px";
				document.getElementById("container3").style.width = "930px";
			}
			/*搜索下拉列表显示/隐藏*/
			function soux(){
				document.getElementById("sou-list-container").style.display = "block";
				document.getElementById("btn-inner").style.display = "none";
			}
			function souy(){
				document.getElementById("sou-list-container").style.display = "none";
				document.getElementById("btn-inner").style.display = "block";
			}
			/*购物车显示/隐藏*/
			function droplist(){
				document.getElementById("spcar-drop").style.display = "block";
			}
			function listshink(){
				document.getElementById("spcar-drop").style.display = "none";
			}
			
			
			$(function(){
				var starbool = true;
				var csbool= false;
				/*浏览器初始大小小于1240px时*/
				var bodywidth = $("body").eq(0).css("width").match(/\d+/)*1;
				if(bodywidth<=1240){
					$("#container1").css("width","930px");
					$("#container2").css("width","930px");
					$("#container3").css("width","930px");
					$(".nav-main-container").css("width","680px");
					$(".nav-main-a").each(function(){
						$(this).css({"padding":"0px 11px","font-size":"16px"});
					})
					$("[id=nav-main-children]").eq(0).css({"left":"-55px","width":"680px"});
					$("[id=nav-main-children] [id=nav-main-chi-a]").eq(0).css({"padding":"30px 0px 10px 0px ","width":"339px"});
					$("[id=nav-main-children] [id=nav-main-chi-a]").eq(1).css({"padding":"30px 0px 10px 0px ","width":"339px"});
					$("[id=nav-main-children]").eq(3).css({"left":"-367px","width":"680px"});
					$("[id=nav-main-children] [id=nav-main-chi-a]").eq(2).css({"padding":"30px 0px 10px 0px ","width":"339px"});
					$("[id=nav-main-children] [id=nav-main-chi-a]").eq(3).css({"padding":"30px 0px 10px 0px ","width":"339px"});
					$("[id=nav-main-children]").eq(4).css({"left":"-421px","width":"680px"});
					$("[id=nav-main-children] [id=nav-main-chi-a]").eq(4).css({"padding":"30px 0px 10px 0px ","width":"339px"});
					$("[id=nav-main-children] [id=nav-main-chi-a]").eq(5).css({"padding":"30px 0px 10px 0px ","width":"339px"});
					$("[id=nav-main-children]").eq(1).css({"left":"-141px","width":"680px"});
					$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(0).css({"width":"226px"});
					$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(1).css({"width":"226px"});
					$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(2).css({"width":"226px"});
					$("[id=nav-main-children]").eq(2).css({"left":"-281px","width":"680px"});
					$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(3).css({"width":"226px"});
					$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(4).css({"width":"226px"});
					$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(5).css({"width":"226px"});
					$(".nav-lunbo").css({"width":"680px"});
					$(".nav-lunbo-img").css({"width":"680px"});
					$(".nav-lunbo-img").eq(0).attr("src","./images/T1vi_vBbKT1RXrhCrK.jpg");
					$(".nav-lunbo-img").eq(1).attr("src","./images/T1bwh_BvbT1RXrhCrK.jpg");
					$(".nav-lunbo-img").eq(2).attr("src","./images/T1IHC_B_ZT1RXrhCrK.jpg");
					$(".nav-lunbo-img").eq(3).attr("src","./images/T14C_gB7dT1RXrhCrK.jpg");
					$(".nav-lunbo-img").eq(4).attr("src","./images/T1AiYvBsET1RXrhCrK.jpg");
					$(".nav-lunbo-ul").css({"left":"470px"});
					$(".nav-lunbo-right").css({"left":"639px"});
					cwdata=680;
					$(".nav-footer").css({"width":"679px"});
					$(".nav-footer-img").css({"width":"225px"});
					starbool = false;
					csbool = true;
					$(".new-main-left").css({"width":"620px"});
					$(".hot-main-left").css({"width":"620px"});
					$(".footer-top-item").css({"width":"182px"});
					$(".footer-med-item").css({"width":"130px","padding":"0 0 0 20px"});
					$(".footer-med-item1").css({"width":"130px"});
					$(".footer-med-call").css({"width":"160px","padding":"0 0 0 15px"});
				}
				/*浏览器大小改变时*/
				$(window).resize(function(){
					var timewidth = $("body").eq(0).css("width").match(/\d+/)*1;
					if(timewidth<=1240){
						$("#container1").css("width","930px");
						$("#container2").css("width","930px");
						$("#container3").css("width","930px");
						$(".nav-main-container").css("width","680px");
						$(".nav-main-a").each(function(){
							$(this).css({"padding":"0px 11px","font-size":"16px"});
						})
						$("[id=nav-main-children]").eq(0).css({"left":"-55px","width":"680px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(0).css({"padding":"30px 0px 10px 0px ","width":"339px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(1).css({"padding":"30px 0px 10px 0px ","width":"339px"});
						$("[id=nav-main-children]").eq(3).css({"left":"-367px","width":"680px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(2).css({"padding":"30px 0px 10px 0px ","width":"339px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(3).css({"padding":"30px 0px 10px 0px ","width":"339px"});
						$("[id=nav-main-children]").eq(4).css({"left":"-421px","width":"680px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(4).css({"padding":"30px 0px 10px 0px ","width":"339px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(5).css({"padding":"30px 0px 10px 0px ","width":"339px"});
						$("[id=nav-main-children]").eq(1).css({"left":"-141px","width":"680px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(0).css({"width":"226px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(1).css({"width":"226px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(2).css({"width":"226px"});
						$("[id=nav-main-children]").eq(2).css({"left":"-281px","width":"680px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(3).css({"width":"226px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(4).css({"width":"226px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(5).css({"width":"226px"});
						$(".nav-lunbo").css({"width":"680px"});
						$(".nav-lunbo-img").css({"width":"680px"});
						$(".nav-lunbo-img").eq(0).attr("src","./images/T1vi_vBbKT1RXrhCrK.jpg");
						$(".nav-lunbo-img").eq(1).attr("src","./images/T1bwh_BvbT1RXrhCrK.jpg");
						$(".nav-lunbo-img").eq(2).attr("src","./images/T1IHC_B_ZT1RXrhCrK.jpg");
						$(".nav-lunbo-img").eq(3).attr("src","./images/T14C_gB7dT1RXrhCrK.jpg");
						$(".nav-lunbo-img").eq(4).attr("src","./images/T1AiYvBsET1RXrhCrK.jpg");
						$(".nav-lunbo-ul").css({"left":"470px"});
						$(".nav-lunbo-right").css({"left":"639px"});
						cwdata=680;
						$(".nav-footer").css({"width":"679px"});
						$(".nav-footer-img").css({"width":"225px"});
						starbool = false;
						csbool = true;
						var mleft = $(".star-main-a").eq(0).css("margin-left").match(/\d+/)*1;
						if(mleft==1240){
							$(".star-main-a").eq(3).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"-310px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"-620px"},250);
							$(".star-main-a").eq(0).animate({marginLeft:"-930px"},250);
						}
						$(".new-main-left").css({"width":"620px"});
						$(".hot-main-left").css({"width":"620px"});
						$(".footer-top-item").css({"width":"182px"});
						$(".footer-med-item").css({"width":"130px","padding":"0 0 0 20px"});
						$(".footer-med-item1").css({"width":"130px"});
						$(".footer-med-call").css({"width":"160px","padding":"0 0 0 15px"});
					}else{
						$("#container1").css("width","1240px");
						$("#container2").css("width","1240px");
						$("#container3").css("width","1240px");
						$(".nav-main-container").css("width","990px");
						$(".nav-main-a").each(function(){
							$(this).css({"padding":"0px 23px","font-size":"18px"});
						})
						$("[id=nav-main-children]").eq(0).css({"left":"-83px","width":"990px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(0).css({"padding":"30px 50px 10px 100px","width":"344px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(1).css({"padding":"30px 50px 10px 100px","width":"344px"});
						$("[id=nav-main-children]").eq(3).css({"left":"-519px","width":"990px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(2).css({"padding":"30px 50px 10px 100px","width":"334px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(3).css({"padding":"30px 50px 10px 100px","width":"334px"});
						$("[id=nav-main-children]").eq(4).css({"left":"-601px","width":"990px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(4).css({"padding":"30px 50px 10px 100px","width":"334px"});
						$("[id=nav-main-children] [id=nav-main-chi-a]").eq(5).css({"padding":"30px 50px 10px 100px","width":"334px"});
						$("[id=nav-main-children]").eq(1).css({"left":"-201px","width":"990px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(0).css({"width":"329px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(1).css({"width":"329px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(2).css({"width":"329px"});
						$("[id=nav-main-children]").eq(2).css({"left":"-401px","width":"990px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(3).css({"width":"329px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(4).css({"width":"329px"});
						$("[id=nav-main-children] [id=nav-main-chi-a1]").eq(5).css({"width":"329px"});
						$(".nav-lunbo").css({"width":"990px"});
						$(".nav-lunbo-img").css({"width":"990px"});
						$(".nav-lunbo-img").eq(0).attr("src","./images/T1QJDgBgLT1RXrhCrK.jpg");
						$(".nav-lunbo-img").eq(1).attr("src","./images/T11PDgBbVT1RXrhCrK.jpg");
						$(".nav-lunbo-img").eq(2).attr("src","./images/T1edV_BTYT1RXrhCrK.jpg");
						$(".nav-lunbo-img").eq(3).attr("src","./images/T128b_BvbT1RXrhCrK.jpg");
						$(".nav-lunbo-img").eq(4).attr("src","./images/T1y.LgBTET1RXrhCrK.jpg");
						$(".nav-lunbo-ul").css({"left":"780px"});
						$(".nav-lunbo-right").css({"left":"949px"});
						cwdata=990;
						$(".nav-footer").css({"width":"989px"});
						$(".nav-footer-img").css({"width":"328px"});
						csbool = false;
						starbool = true;
						var mleft = $(".star-main-a").eq(0).css("margin-left").match(/\d+/)*1;
						if(mleft==930){
							$(".star-main-a").eq(0).animate({marginLeft:"-1240px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"-930px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"-620px"},250);
							$(".star-main-a").eq(3).animate({marginLeft:"-310px"},250);
						}else if(mleft==1860){
							$(".star-main-a").eq(5).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(4).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(3).animate({marginLeft:"-310px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"-620px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"-930px"},250);
							$(".star-main-a").eq(0).animate({marginLeft:"-1240px"},250);
						}
						$(".new-main-left").css({"width":"930px"});
						$(".hot-main-left").css({"width":"930px"});
						$(".footer-top-item").css({"width":"248px"});
						$(".footer-med-item").css({"width":"165px","padding":"0 0 0 30px"});
						$(".footer-med-item1").css({"width":"165px"});
						$(".footer-med-call").css({"width":"275px","padding":"0 0 0 15px"});
					}
				})
				/*导航顶部动画*/
				$(".nav-main-li").hover(function(){
					$(this).find("div").slideDown(500);
				},function(){
					$(this).find("div").css({"display":"none"})
				});
				/*自动轮播*/
				var i =1;
				var lock = true;
				var tag = setInterval(zidonglb,5000)
				function zidonglb(){
					lock = false;
					clearInterval(tag);
					for(var a=0;a<=4;a++){
						if(i==a){
							$(".nav-lunbo-ul>li").eq(a).css({"background":"rgba(0, 0, 0, 0.6) none repeat scroll 0 0","color":"white","border":"1px solid black"})
							$(".nav-lunbo-img").eq(a).fadeIn(500,function(){lock = true;});
						}else{
							$(".nav-lunbo-ul>li").eq(a).css({"background":"#C3C3C3","background":"rgba(0, 0, 0, 0.3) none repeat scroll 0 0","color":"black","border":"1px solid rgba(255, 255, 255, 0.3)"})
							$(".nav-lunbo-img").eq(a).css({"display":"none"})
						}
					}
					if(i>=4){i=0}else{i++};
					tag = setInterval(zidonglb,5000)
				}
				/*右点击轮播*/
				$(".nav-lunbo-right").click(function(){
					if(lock){
						lock=false;
						clearInterval(tag);
						for(var a=0;a<=4;a++){
							if(i==a){
								$(".nav-lunbo-ul>li").eq(a).css({"background":"rgba(0, 0, 0, 0.6) none repeat scroll 0 0","color":"white","border":"1px solid black"});
								$(".nav-lunbo-img").eq(a).fadeIn(500,function(){lock = true;clearInterval(tag);tag = setInterval(zidonglb,5000);});
							}else{
								$(".nav-lunbo-ul>li").eq(a).css({"background":"rgba(0, 0, 0, 0.3) none repeat scroll 0 0","color":"black","border":"1px solid rgba(255, 255, 255, 0.3)"})
								$(".nav-lunbo-img").eq(a).css({"display":"none"})
							}
						}
						if(i>=4){i=0}else{i++};
						
					}
				})
				/*左点击轮播*/
				$(".nav-lunbo-left").click(function(){
					if(lock){
						lock=false;
						clearInterval(tag);
						if(i==0){i=5}else if(i==1)(i=6);
						i=i-2;
						for(var a=0;a<=4;a++){
							if(i==a){
								$(".nav-lunbo-ul>li").eq(a).css({"background":"rgba(0, 0, 0, 0.6) none repeat scroll 0 0","color":"white","border":"1px solid black"});
								$(".nav-lunbo-img").eq(a).fadeIn(500,function(){lock = true;clearInterval(tag);tag = setInterval(zidonglb,5000);});
							}else{
								$(".nav-lunbo-ul>li").eq(a).css({"background":"rgba(0, 0, 0, 0.3) none repeat scroll 0 0","color":"black","border":"1px solid rgba(255, 255, 255, 0.3)"})
								$(".nav-lunbo-img").eq(a).css({"display":"none"})
							}
						}
						if(i>=4){i=0}else{i++};
					}
				})
				/*下面点击轮播*/
				$(".nav-lunbo-ul>li").click(function(){
					var clidata = $(this).index(".nav-lunbo-ul>li");
					if(lock){
						lock=false;
						clearInterval(tag);
						var nowdata = $(".nav-lunbo-img:visible").index(".nav-lunbo-img");
						if(clidata>nowdata){
							for(var a=0;a<=4;a++){
								if(clidata==a){
									$(".nav-lunbo-ul>li").eq(a).css({"background":"rgba(0, 0, 0, 0.6) none repeat scroll 0 0","color":"white","border":"1px solid black"})
								}else{
									$(".nav-lunbo-ul>li").eq(a).css({"background":"rgba(0, 0, 0, 0.3) none repeat scroll 0 0","color":"black","border":"1px solid rgba(255, 255, 255, 0.3)"})
								}
							}
							$(".nav-lunbo-img").eq(clidata).css({"display":"block"});
							$(".nav-lunbo-img").eq(nowdata).animate({marginLeft:"-"+cwdata+"px"},500,function(){
								$(".nav-lunbo-img").eq(nowdata).css({"margin-left":"0px","display":"none"})
								lock = true;clearInterval(tag);tag = setInterval(zidonglb,5000);
							})
						}else if(clidata<nowdata){
							for(var a=0;a<=4;a++){
								if(clidata==a){
									$(".nav-lunbo-ul>li").eq(a).css({"background":"rgba(0, 0, 0, 0.6) none repeat scroll 0 0","color":"white","border":"1px solid black"})
								}else{
									$(".nav-lunbo-ul>li").eq(a).css({"background":"rgba(0, 0, 0, 0.3) none repeat scroll 0 0","color":"black","border":"1px solid rgba(255, 255, 255, 0.3)"})
								}
							}
							$(".nav-lunbo-img").eq(clidata).css({"margin-left":"-"+cwdata+"px","display":"block"});
							$(".nav-lunbo-img").eq(clidata).animate({marginLeft:"0px"},500,function(){
								$(".nav-lunbo-img").eq(nowdata).css({"margin-right":"0px","display":"none"})
								lock = true;clearInterval(tag);tag = setInterval(zidonglb,5000);
							})
						}else{
							lock = true;clearInterval(tag);tag = setInterval(zidonglb,5000);
						}
						if(clidata>=4){i=0}else{i=clidata++};
					}
				})
				$(".nav-lunbo").hover(function(){clearInterval(tag)},function(){clearInterval(tag);tag = setInterval(zidonglb,5000)});
				/*小米明星单品自动轮播*/
				/*宽度为1240px时*/
				var s = 0;
				var c = 0;
				var sta = setInterval(starzd,5000);
				function starzd(){
					if(starbool){
						if(s==0){
							$(".star-header-btn").eq(0).css({"color":"#333"});
							$(".star-header-btn").eq(1).css({"color":"#dfdfdf"});
							$(".star-main-a").eq(0).animate({marginLeft:"-1240px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"-930px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"-620px"},250);
							$(".star-main-a").eq(3).animate({marginLeft:"-310px"},250);
						}else if(s==1){
							$(".star-header-btn").eq(0).css({"color":"#dfdfdf"});
							$(".star-header-btn").eq(1).css({"color":"#333"});
							$(".star-main-a").eq(3).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(0).animate({marginLeft:"0px"},250);
						}
						if(s>=1){s=0}else{s++};
					}
				}
				/*宽度为930px时*/
				var	chg = setInterval(chgszd,5000);
					function chgszd(){
						if(csbool){
							if(c==0){
								$(".star-header-btn").eq(1).css({"color":"#333"});
								$(".star-header-btn").eq(0).css({"color":"#333"});
								$(".star-main-a").eq(0).animate({marginLeft:"-930px"},250);
								$(".star-main-a").eq(1).animate({marginLeft:"-620px"},250);
								$(".star-main-a").eq(2).animate({marginLeft:"-310px"},250);
							}else if(c==1){
								$(".star-header-btn").eq(1).css({"color":"#dfdfdf"});
								$(".star-header-btn").eq(0).css({"color":"#333"});
								$(".star-main-a").eq(0).animate({marginLeft:"-1860px"},250);
								$(".star-main-a").eq(1).animate({marginLeft:"-1550px"},250);
								$(".star-main-a").eq(2).animate({marginLeft:"-1240px"},250);
								$(".star-main-a").eq(3).animate({marginLeft:"-930px"},250);
								$(".star-main-a").eq(4).animate({marginLeft:"-620px"},250);
								$(".star-main-a").eq(5).animate({marginLeft:"-310px"},250);
							}else if(c==2){
								$(".star-header-btn").eq(1).css({"color":"#333"});
								$(".star-header-btn").eq(0).css({"color":"#333"});
								$(".star-main-a").eq(0).animate({marginLeft:"-930px"},250);
								$(".star-main-a").eq(1).animate({marginLeft:"-620px"},250);
								$(".star-main-a").eq(2).animate({marginLeft:"-310px"},250);
								$(".star-main-a").eq(3).animate({marginLeft:"0px"},250);
								$(".star-main-a").eq(4).animate({marginLeft:"0px"},250);
								$(".star-main-a").eq(5).animate({marginLeft:"0px"},250);
							}else if(c==3){
								$(".star-header-btn").eq(1).css({"color":"#333"});
								$(".star-header-btn").eq(0).css({"color":"#dfdfdf"});
								$(".star-main-a").eq(0).animate({marginLeft:"0px"},250);
								$(".star-main-a").eq(1).animate({marginLeft:"0px"},250);
								$(".star-main-a").eq(2).animate({marginLeft:"0px"},250);
							}
							if(c>=3){c=0}else{c++};
						}
					}
				/*小米明星单品点击轮播*/
				/*宽度为1240px时*/
				$(".star-header-btn").eq(0).click(function(){
					var mleft = $(".star-main-a").eq(0).css("margin-left").match(/\d+/)*1;
					if(mleft==1240){
						if(starbool){
							starbool = false;
							clearInterval(sta);
							$(".star-header-btn").eq(1).css({"color":"#dfdfdf"});
							$(".star-header-btn").eq(0).css({"color":"#333"});
							$(".star-main-a").eq(3).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(0).animate({marginLeft:"0px"},250,function(){
								starbool=true;
								sta = setInterval(starzd,5000);
							});
						}
					}
				})
				$(".star-header-btn").eq(1).click(function(){
					var mleft = $(".star-main-a").eq(0).css("margin-left").match(/\d+/)*1;
					if(mleft==0){
						if(starbool){
							starbool = false;
							clearInterval(sta);
							$(".star-header-btn").eq(1).css({"color":"#333"});
							$(".star-header-btn").eq(0).css({"color":"#dfdfdf"});
							$(".star-main-a").eq(0).animate({marginLeft:"-1240px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"-930px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"-620px"},250);
							$(".star-main-a").eq(3).animate({marginLeft:"-310px"},250,function(){
								starbool=true;
								sta = setInterval(starzd,5000);
							});
						}
					}
				})
				/*宽度为930px时*/
				$(".star-header-btn").eq(0).click(function(){
					var mleft = $(".star-main-a").eq(0).css("margin-left").match(/\d+/)*1;
					if(mleft==930){
						if(csbool){
							csbool = false;
							clearInterval(chg);
							$(".star-header-btn").eq(0).css({"color":"#dfdfdf"});
							$(".star-header-btn").eq(1).css({"color":"#333"});
							$(".star-main-a").eq(2).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(0).animate({marginLeft:"0px"},250,function(){
							csbool=true;
							chg = setInterval(chgszd,5000);
							});
						}
					}else if(mleft==1860){
						if(csbool){
							csbool = false;
							clearInterval(chg);
							$(".star-header-btn").eq(0).css({"color":"#333"});
							$(".star-header-btn").eq(1).css({"color":"#333"});
							$(".star-main-a").eq(5).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(4).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(3).animate({marginLeft:"0px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"-310px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"-620px"},250);
							$(".star-main-a").eq(0).animate({marginLeft:"-930px"},250,function(){
							csbool=true;
							chg = setInterval(chgszd,5000);
							});
						}
					}
				})
				$(".star-header-btn").eq(1).click(function(){
					var mleft = $(".star-main-a").eq(0).css("margin-left").match(/\d+/)*1;
					if(mleft==0){
						if(csbool){
							csbool = false;
							clearInterval(chg);
							$(".star-header-btn").eq(1).css({"color":"#333"});
							$(".star-header-btn").eq(0).css({"color":"#333"});
							$(".star-main-a").eq(0).animate({marginLeft:"-930px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"-620px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"-310px"},250,function(){
							csbool=true;
							chg = setInterval(chgszd,5000);
							});
						}
					}else if(mleft==930){
						if(csbool){
							csbool = false;
							clearInterval(chg);
							$(".star-header-btn").eq(0).css({"color":"#333"});
							$(".star-header-btn").eq(1).css({"color":"#dfdfdf"});
							$(".star-main-a").eq(0).animate({marginLeft:"-1860px"},250);
							$(".star-main-a").eq(1).animate({marginLeft:"-1550px"},250);
							$(".star-main-a").eq(2).animate({marginLeft:"-1240px"},250);
							$(".star-main-a").eq(3).animate({marginLeft:"-930px"},250);
							$(".star-main-a").eq(4).animate({marginLeft:"-620px"},250);
							$(".star-main-a").eq(5).animate({marginLeft:"-310px"},250,function(){csbool=true;chg = setInterval(chgszd,5000);});
						}
					}
				})
				$(".star-main").hover(function(){clearInterval(sta);clearInterval(chg)},function(){sta = setInterval(starzd,5000);chg = setInterval(chgszd,5000);});
				/*充值验证*/
				var tel = setInterval("addtel()",100)
				function addtel(){
					var telnum = $("#inputtel").val();
					var leng = telnum.length;
					if(leng==3){
						telnum+="-"	;
						$("#inputtel").val(telnum);
					}else if(leng==8){
						telnum+="-"	;
						$("#inputtel").val(telnum);
					}
				}
				clearInterval(tel);
				$("#inputtel").focus(function(){clearInterval(tel);tel = setInterval(addtel,100)});
				$("#inputtel").blur(function(){clearInterval(tel);})
				$("#chong-price").hover(function(){
					$("#chong-price-ul").css({"display":"block"});
				},function(){
					$("#chong-price-ul").css({"display":"none"});
				})
				
				$("#chong-price-ul li").click(function(){
					var telnum = $("#inputtel").val();
					var regExp = /(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])-[0-9]{4}-[0-9]{4}/g;
					var blndata = regExp.test(telnum);
					if(blndata){
						$("#right-chong-chg").text("");
						$("form>input.chong-submit").css({"background":"tomato"})
						$("form>input.chong-submit").removeAttr("disabled");
					}else{
						$("#right-chong-chg").text("请输入正确的手机号！");
						$("form>input.chong-submit").css({"background":"#DCDFE5"})
						$("form>input.chong-submit").attr("disabled","disabled");
					}
					var price = $(this).text().match(/\d+/)*1;
					if(price==50){
						$(".chong-price-text").text("50元");
						$("div.sell-price span.sell-price-chg").text("49.2");
						$("#chong-price-ul").css({"display":"none"});
					}else if(price==100){
						$(".chong-price-text").text("100元")
						$("div.sell-price span.sell-price-chg").text("98.4");
						$("#chong-price-ul").css({"display":"none"});
					}else if(price==30){
						$(".chong-price-text").text("30元")
						$("div.sell-price span.sell-price-chg").text("29.55");
						$("#chong-price-ul").css({"display":"none"});
					}
				})
			})