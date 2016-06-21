//为了编程方便，我们定义两个颜色数组
var heroColor=new Array("#BA9658","#FEF26E");
var enemyColor=new Array("#00A2B5","#00FEFE");
//其它的敌人坦克，这里的扩展性，还是不错的.

function Bomb(x,y){
	this.x=x;
	this.y=y;
	this.isLive=true; //炸弹是否活的，默认true;
	//炸弹有一个生命值
	this.blood=9;
	//减生命值
	this.bloodDown=function(){
		if(this.blood>0){
			this.blood--;
		}else{
			//说明炸弹死亡
			this.isLive=false;
		}//else
	}//bloodDown
}//Bomb类


//子弹类
//type表示：这颗子弹是敌人的，还是自己的
//tank表示对象，说明这颗子弹，属于哪个坦克.
function Bullet(x,y,direct,speed,type,tank){//-------------改进处9
	this.x=x;
	this.y=y;
	this.direct=direct;
	this.speed=speed;
	this.timer=null;
	this.isLive=true;
	this.type=type;
	this.tank=tank;
	this.run=function run(){
		
			//在该表这个子弹的坐标时，我们先判断子弹是否已经到边界
			//子弹不前进，有两个逻辑，1.碰到边界，2. 碰到敌人坦克.好像没检查碰到敌人坦克这种情况在isHitEnemy函数中检查--------改进处9
			if(this.x<=0||this.x>=400||this.y<=0||this.y>=300||this.isLive==false){
				
				window.clearInterval(this.timer);//子弹要停止.
				
				this.isLive=false;//子弹死亡

				if(this.type=="enemy"){
						this.tank.bulletIsLive=false;
				}
			}else{
				//这个可以去修改坐标
				switch(this.direct){
					case 0:
							this.y-=this.speed;
							break;
					case 1:
							this.x+=this.speed;
							break;
					case 2:
							this.y+=this.speed;
							break;
					case 3:
							this.x-=this.speed;
							break;
				}
			}

			document.getElementById("aa").innerText="子弹x="+this.x+" 子弹y="+this.y;
	}
}//Bullet

//这是一个Tank类
function Tank(x,y,direct,color){
	
		this.x=x;
		this.y=y;
		this.speed=2;
		this.isLive=true;
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
	heroBullet=new Bullet(this.x+9,this.y+0,this.direct,3);break;
	case 1:
	heroBullet=new Bullet(this.x+30,this.y+9,this.direct,3);break;
	case 2:
	heroBullet=new Bullet(this.x+9,this.y+30,this.direct,3);break;
	case 3:
	heroBullet=new Bullet(this.x,this.y+9,this.direct,3);break;	

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

	this.bulletIsLive=true;//----------改进处9
	this.count=0;//----------改进处7
	this.run=function(){
		switch(this.direct){//先考虑坦克方向和宽高
		case 0:	if(this.y-this.speed>0)		this.y-=this.speed;break;
		case 1:	if(this.x+this.speed+30<400)    this.x+=this.speed;break;
		case 2:	if(this.y+this.speed+30<300)   	this.y+=this.speed;break;
		case 3:	if(this.x-this.speed>0)		this.x-=this.speed;break;

		}//switch
	
		if(this.count>30){//改变方向,走30下，再改变方向，为了让敌人坦克方向不频繁变化，count记//录敌人坦克沿新方向走的次数
			this.direct=Math.round(Math.random()*3);//随机生成 0,1,2,3，count大于//30//随机产生新的方向
			this.count=0;
		}//if
		this.count++;


		//判断子弹是否已经死亡，如果死亡，则增加新的一颗子弹------------------------改进处9
		if(this.bulletIsLive==false){//增子弹,这是需要考虑当前这个敌人坦克的方向
			switch(this.direct){
			case 0:etBullet=new Bullet(this.x+9,this.y,this.direct,3,"enemy",this);break;
			case 1:etBullet=new Bullet(this.x+30,this.y+9,this.direct,3,"enemy",this);break;
			case 2:etBullet=new Bullet(this.x+9,this.y+30,this.direct,3,"enemy",this);break;
			case 3:etBullet=new Bullet(this.x,this.y+9,this.direct,3,"enemy",this);break;
			}//switch
			this.bulletIsLive=true;
			enemyBullets.push(etBullet);
			
			var mytimer=window.setInterval("enemyBullets["+(enemyBullets.length-1)+"].run()",50);//启动新子弹run，每创建一个子弹时就启动它的run函数，并记录它的timer和isLive
			enemyBullets[enemyBullets.length-1].timer=mytimer;

		}//if
		}//this.run=function()
}

//画出自己的子弹，也可封装到Hero类中
function drawHeroBullet(){

//现在要画出所有子弹
for(var i=0;i<heroBullets.length;i++){
	var heroBullet=heroBullets[i];
	if(heroBullet!=null&&heroBullet.isLive){
	cxt.fillStyle="FEF26E";
	cxt.fillRect(heroBullet.x,heroBullet.y,2,2);
	}//if
	}//for

}//drawHeroBullet


//这里我们还需要添加一个函数，用于画出敌人的子弹,当然，画出敌人的子弹和自己的子弹是可以合并的.//---------------------改进处9
function drawEnemyBullet(){
	//现在要画出所有子弹
	for(var i=0;i<enemyBullets.length;i++){
		var etBullet=enemyBullets[i];
		if(etBullet.isLive){
			cxt.fillStyle="#00FEFE";
			cxt.fillRect(etBullet.x,etBullet.y,2,2);
		}

	}//for

}//drawEnemyBullet()


function drawTank(tank){//绘制坦克(敌人坦克和自己的坦克)
	
	//说明所有的坦克都要isLive这个属性
	if(tank.isLive){
		

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
}
}//drawTank

function isHitEnemyTank(){
	
	//取出每颗子弹
	for(var i=0;i<heroBullets.length;i++){
			
	//取出一颗子弹
	var heroBullet=heroBullets[i];
	if(heroBullet.isLive){ //子弹是活的，才去判断

	for(var j=0;j<enemyTanks.length;j++){	//让这颗子弹去和遍历每个敌人坦克判断
			
		var enemyTank=enemyTanks[j];
		
		if(enemyTank.isLive){//子弹击中敌人坦克的条件是什么? 很多思路 , 韩老师的思想是//(看看这颗子弹，是否进入坦克所在矩形)//根据当时敌人坦克的方向来决定
		
		switch(enemyTank.direct){
		case 0: //敌人坦克向上
		case 2://敌人坦克向下
			if(heroBullet.x>=enemyTank.x&&heroBullet.x<=enemyTank.x+20&&heroBullet.y>=enemyTank.y&&heroBullet.y<=enemyTank.y+30){
			enemyTank.isLive=false;
			heroBullet.isLive=false;
			
			var bomb=new Bomb(enemyTank.x,enemyTank.y);//然后把该炸弹放入到bombs数组中
			bombs.push(bomb);//把该炸弹放到bomb数组中
			}//if
			break;
		case 1: //敌人坦克向右
		case 3://敌人坦克向左
			if(heroBullet.x>=enemyTank.x&&heroBullet.x<=enemyTank.x+30
			&&heroBullet.y>=enemyTank.y&&heroBullet.y<=enemyTank.y+20){
			enemyTank.isLive=false;
			heroBullet.isLive=false;
		
			var bomb=new Bomb(enemyTank.x,enemyTank.y);//创建一颗炸弹;//我认为应该用heroBullet.x,heroBullet.y
			bombs.push(bomb);//把该炸弹放到bomb数组中
			}//if
			break;
		}//switch

		}//if

	}//for
	}//if
	}//for
}//isHitEnemyTank


function drawEnemyBomb(){//每100ms会调用一次flashTankMap函数，等于每100ms间接调用一次drawEnemyBomb()，这样使900ms便能调用9次这个函数，产生炸弹爆炸的效果
	
	for(var i=0;i<bombs.length;i++){
	
		//取出一颗炸弹
		var bomb=bombs[i];
		if(bomb.isLive){

			//更据当前这个炸弹的生命值，来画出不同的炸弹图片
			if(bomb.blood>6){  //显示最大炸弹图
				var img1=new Image();
				img1.src="bomb_1.png";
				var x=bomb.x;
				var y=bomb.y;
				img1.onload=function(){
					cxt.drawImage(img1,x,y,30,30);
				}
			}else if(bomb.blood>3){
				var img2=new Image();
				img2.src="bomb_2.png";
				var x=bomb.x;
				var y=bomb.y;
				img2.onload=function(){
					cxt.drawImage(img2,x,y,30,30);
				}
			}else {
				var img3=new Image();
				img3.src="bomb_3.png";
				var x=bomb.x;
				var y=bomb.y;
				img3.onload=function(){
					cxt.drawImage(img3,x,y,30,30);
				}
			}

			//减血
			bomb.bloodDown();
			if(bomb.blood<=0){
				//怎么办?把这个炸弹从数组中去掉
				bombs.splice(i,1);// splice() 方法用于插入、删除或替换数组的元素。1表//示删除1个元素

			}
		}
	}
}
//function drawEnemyBomb()





