

//用构造函数定义一个Hero类
function Hero(x,y,direct){
	
		this.x=x;
		this.y=y;
		this.speed=2;
		this.direct=direct;
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




//把绘制坦克封装成一个函数，将来参数tank可以是自己的坦克，也可以是敌人的坦克。tank就是对象
function drawTank(tank){
//考虑方向
		switch(tank.direct){

		case 0: //上
		case 2:// 下
			//画出自己的坦克，使用前面的绘图技术
			//设置颜色
			cxt.fillStyle="#BA9658";
			//韩老师使用 先死--->后活 (初学者最好用这个方法)
			//先画出左面的矩形
			cxt.fillRect(tank.x,tank.y,5,30);
			//画出右边的矩形(这时请大家思路->一定要一个参照点)
			cxt.fillRect(tank.x+15,tank.y,5,30);
			//画出中间矩形
			cxt.fillRect(tank.x+6,tank.y+5,8,20);
			//画出坦克的盖子
			cxt.fillStyle="#FEF26E";
			cxt.arc(tank.x+10,tank.y+15,4,0,360,true);
			cxt.fill();
			//画出炮筒(直线)
			cxt.strokeStyle="#FEF26E";
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
			cxt.fillStyle="#BA9658";
			//韩老师使用 先死--->后活 (初学者最好用这个方法)
			//先画出左面的矩形
			cxt.fillRect(tank.x,tank.y,30,5);
			//画出右边的矩形(这时请大家思路->一定要一个参照点)
			cxt.fillRect(tank.x,tank.y+15,30,5);
			//画出中间矩形
			cxt.fillRect(tank.x+5,tank.y+6,20,8);
			//画出坦克的盖子
			cxt.fillStyle="#FEF26E";
			cxt.arc(tank.x+15,tank.y+10,4,0,360,true);
			cxt.fill();
			//画出炮筒(直线)
			cxt.strokeStyle="#FEF26E";
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

		}//switch(tank.direct)


}//drawTank
