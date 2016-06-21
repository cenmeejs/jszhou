//为了编程方便，我们定义两个颜色数组
var heroColor=new Array("#BA9658","#FEF26E");
var enemyColor=new Array("#00A2B5","#00FEFE");
//其它的敌人坦克，这里的扩展性，还是不错的.


function Bullet(x,y,direct,speed){//Bullet类
this.x=x;
this.y=y;
this.speed=speed;
this.timer=null;
this.direct=direct;
this.isLive=true;

this.run=function  run(){

	if(this.x<=0||this.x>=400||this.y<=0||this.y>=300){	
	window.clearInterval(this.timer);
	this.isLive=false;
	}//if
	else{

	switch(this.direct){
	case 0:this.y-=this.speed;break;
	case 1:this.x+=this.speed;break;
	case 2:this.y+=this.speed;break;
	case 3:this.x-=this.speed;break;
	}//switch
	
	}//else

	for(var i=0;i<heroBullets.length;i++){
	var heroBullet=heroBullets[i];
	document.getElementById("aa").innerText+=i+"子弹x="+heroBullet.x+" 子弹y="+heroBullet.y+"\n";
	}//for
}//run

}//Bullet

//这是一个Tank类
function Tank(x,y,direct,color){
	
		this.x=x;
		this.y=y;
		this.speed=1;
		this.direct=direct;
		//一个坦克，需要两个颜色.
		this.color=color;
		//上移
		this.moveUp=function(){
			this.y-=this.speed;
			this.direct=0;
		}
		//向右
		this.moveRight=function(){
			this.x+=this.speed;
			this.direct=1;
		}

		//下移
		this.moveDown=function(){
			this.y+=this.speed;
			this.direct=2;
		}
		//左
		this.moveLeft=function(){
			this.x-=this.speed;
			this.direct=3;
		}
}
//function Tank

	
function Hero(x,y,direct,color){//定义一个Hero类,//x 表示坦克的 横坐标, y 表示纵坐标, direct 方向
	
	this.tank=Tank;//下面两句话的作用是通过对象冒充，达到继承的效果
	this.tank(x,y,direct,color);

	this.shotEnemy=function(){//创建shotEnemy函数,创建子弹,子弹与hero的方向有关
	
	switch(this.direct){
	case 0:
	heroBullet=new Bullet(this.x+9,this.y+0,this.direct,2);break;
	case 1:
	heroBullet=new Bullet(this.x+30,this.y+9,this.direct,2);break;
	case 2:
	heroBullet=new Bullet(this.x+9,this.y+30,this.direct,2);break;
	case 3:
	heroBullet=new Bullet(this.x,this.y+9,this.direct,2);break;	

	}//switch


	
	heroBullets.push(heroBullet);//把这个子弹放在数组中
	var timer=window.setInterval("heroBullets["+(heroBullets.length-1)+"].run()",50);//就算你工作过一两年，你也不一定能想到这儿,把子弹数组所有子弹同时启动,每个子弹定时器是独立的，按原来的方法heroBullet.run(),50,所有子弹共享一个定时器，子弹速度会越来越快
	heroBullets[(heroBullets.length-1)].timer=timer;//把这个Timer传递给子弹，js对象是引用传递

}//shotEnemy()
}//Hero类

	//定义一个EnemyTank类
	function EnemyTank (x,y,direct,color){
		
		//也通过对象冒充，来继承Tank
		this.tank=Tank;
		this.tank(x,y,direct,color);
	}
//画出自己的子弹，也可封装到Hero类中

function drawHeroBullet(){

//现在要画出所有子弹
for(var i=0;i<heroBullets.length;i++){
var heroBullet=heroBullets[i];
if(heroBullet!=null&&heroBullet.isLive){
//alert("drawHeroBullet");
cxt.fillStyle="FEF26E";
cxt.fillRect(heroBullet.x,heroBullet.y,2,2);
}//if


}//for

}

//绘制坦克
function drawTank(tank){
	
		//考虑方向
		switch(tank.direct){

		case 0: //上
		case 2:// 下
			//画出自己的坦克，使用前面的绘图技术
			//设置颜色
			cxt.fillStyle=tank.color[0];
			//韩老师使用 先死--->后活 (初学者最好用这个方法)
			//先画出左面的矩形
			cxt.fillRect(tank.x,tank.y,5,30);
			//画出右边的矩形(这时请大家思路->一定要一个参照点)
			cxt.fillRect(tank.x+15,tank.y,5,30);
			//画出中间矩形
			cxt.fillRect(tank.x+6,tank.y+5,8,20);
			//画出坦克的盖子
			cxt.fillStyle=tank.color[1];
			cxt.arc(tank.x+10,tank.y+15,4,0,360,true);
			cxt.fill();
			//画出炮筒(直线)
			cxt.strokeStyle=tank.color[1];
			//设置线条的宽度
			cxt.lineWidth=1.5;
			cxt.beginPath();
			cxt.moveTo(tank.x+10,tank.y+15);
			
			if(tank.direct==0){
			cxt.lineTo(tank.x+10,tank.y);
			}else if(tank.direct==2){
			cxt.lineTo(tank.x+10,tank.y+30);
			}

			cxt.closePath();
			cxt.stroke();
			break;
		case 1: //右和左
		case 3:
			//画出自己的坦克，使用前面的绘图技术
			//设置颜色
			cxt.fillStyle=tank.color[0];
			//韩老师使用 先死--->后活 (初学者最好用这个方法)
			//先画出左面的矩形
			cxt.fillRect(tank.x,tank.y,30,5);
			//画出右边的矩形(这时请大家思路->一定要一个参照点)
			cxt.fillRect(tank.x,tank.y+15,30,5);
			//画出中间矩形
			cxt.fillRect(tank.x+5,tank.y+6,20,8);
			//画出坦克的盖子
			cxt.fillStyle=tank.color[1];
			cxt.arc(tank.x+15,tank.y+10,4,0,360,true);
			cxt.fill();
			//画出炮筒(直线)
			cxt.strokeStyle=tank.color[1];
			//设置线条的宽度
			cxt.lineWidth=1.5;
			cxt.beginPath();
			cxt.moveTo(tank.x+15,tank.y+10);
			//向右
			if(tank.direct==1){
			cxt.lineTo(tank.x+30,tank.y+10);
			}else if(tank.direct==3){ //向左
			cxt.lineTo(tank.x,tank.y+10);
			}

			cxt.closePath();
			cxt.stroke();
			break;

		}
	}//drawTank
