//Ϊ�˱�̷��㣬���Ƕ���������ɫ����
var heroColor=new Array("#BA9658","#FEF26E");
var enemyColor=new Array("#00A2B5","#00FEFE");
//�����ĵ���̹�ˣ��������չ�ԣ����ǲ����.


function Bullet(x,y,direct,speed){//Bullet��
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
	document.getElementById("aa").innerText+=i+"�ӵ�x="+heroBullet.x+" �ӵ�y="+heroBullet.y+"\n";
	}//for
}//run

}//Bullet

//����һ��Tank��
function Tank(x,y,direct,color){
	
		this.x=x;
		this.y=y;
		this.speed=1;
		this.direct=direct;
		//һ��̹�ˣ���Ҫ������ɫ.
		this.color=color;
		//����
		this.moveUp=function(){
			this.y-=this.speed;
			this.direct=0;
		}
		//����
		this.moveRight=function(){
			this.x+=this.speed;
			this.direct=1;
		}

		//����
		this.moveDown=function(){
			this.y+=this.speed;
			this.direct=2;
		}
		//��
		this.moveLeft=function(){
			this.x-=this.speed;
			this.direct=3;
		}
}
//function Tank

	
function Hero(x,y,direct,color){//����һ��Hero��,//x ��ʾ̹�˵� ������, y ��ʾ������, direct ����
	
	this.tank=Tank;//�������仰��������ͨ������ð�䣬�ﵽ�̳е�Ч��
	this.tank(x,y,direct,color);

	this.shotEnemy=function(){//����shotEnemy����,�����ӵ�,�ӵ���hero�ķ����й�
	
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


	
	heroBullets.push(heroBullet);//������ӵ�����������
	var timer=window.setInterval("heroBullets["+(heroBullets.length-1)+"].run()",50);//�����㹤����һ���꣬��Ҳ��һ�����뵽���,���ӵ����������ӵ�ͬʱ����,ÿ���ӵ���ʱ���Ƕ����ģ���ԭ���ķ���heroBullet.run(),50,�����ӵ�����һ����ʱ�����ӵ��ٶȻ�Խ��Խ��
	heroBullets[(heroBullets.length-1)].timer=timer;//�����Timer���ݸ��ӵ���js���������ô���

}//shotEnemy()
}//Hero��

	//����һ��EnemyTank��
	function EnemyTank (x,y,direct,color){
		
		//Ҳͨ������ð�䣬���̳�Tank
		this.tank=Tank;
		this.tank(x,y,direct,color);
	}
//�����Լ����ӵ���Ҳ�ɷ�װ��Hero����

function drawHeroBullet(){

//����Ҫ���������ӵ�
for(var i=0;i<heroBullets.length;i++){
var heroBullet=heroBullets[i];
if(heroBullet!=null&&heroBullet.isLive){
//alert("drawHeroBullet");
cxt.fillStyle="FEF26E";
cxt.fillRect(heroBullet.x,heroBullet.y,2,2);
}//if


}//for

}

//����̹��
function drawTank(tank){
	
		//���Ƿ���
		switch(tank.direct){

		case 0: //��
		case 2:// ��
			//�����Լ���̹�ˣ�ʹ��ǰ��Ļ�ͼ����
			//������ɫ
			cxt.fillStyle=tank.color[0];
			//����ʦʹ�� ����--->��� (��ѧ��������������)
			//�Ȼ�������ľ���
			cxt.fillRect(tank.x,tank.y,5,30);
			//�����ұߵľ���(��ʱ����˼·->һ��Ҫһ�����յ�)
			cxt.fillRect(tank.x+15,tank.y,5,30);
			//�����м����
			cxt.fillRect(tank.x+6,tank.y+5,8,20);
			//����̹�˵ĸ���
			cxt.fillStyle=tank.color[1];
			cxt.arc(tank.x+10,tank.y+15,4,0,360,true);
			cxt.fill();
			//������Ͳ(ֱ��)
			cxt.strokeStyle=tank.color[1];
			//���������Ŀ��
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
		case 1: //�Һ���
		case 3:
			//�����Լ���̹�ˣ�ʹ��ǰ��Ļ�ͼ����
			//������ɫ
			cxt.fillStyle=tank.color[0];
			//����ʦʹ�� ����--->��� (��ѧ��������������)
			//�Ȼ�������ľ���
			cxt.fillRect(tank.x,tank.y,30,5);
			//�����ұߵľ���(��ʱ����˼·->һ��Ҫһ�����յ�)
			cxt.fillRect(tank.x,tank.y+15,30,5);
			//�����м����
			cxt.fillRect(tank.x+5,tank.y+6,20,8);
			//����̹�˵ĸ���
			cxt.fillStyle=tank.color[1];
			cxt.arc(tank.x+15,tank.y+10,4,0,360,true);
			cxt.fill();
			//������Ͳ(ֱ��)
			cxt.strokeStyle=tank.color[1];
			//���������Ŀ��
			cxt.lineWidth=1.5;
			cxt.beginPath();
			cxt.moveTo(tank.x+15,tank.y+10);
			//����
			if(tank.direct==1){
			cxt.lineTo(tank.x+30,tank.y+10);
			}else if(tank.direct==3){ //����
			cxt.lineTo(tank.x,tank.y+10);
			}

			cxt.closePath();
			cxt.stroke();
			break;

		}
	}//drawTank
