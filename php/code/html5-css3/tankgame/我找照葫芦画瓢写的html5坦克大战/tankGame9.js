//Ϊ�˱�̷��㣬���Ƕ���������ɫ����
var heroColor=new Array("#BA9658","#FEF26E");
var enemyColor=new Array("#00A2B5","#00FEFE");
//�����ĵ���̹�ˣ��������չ�ԣ����ǲ����.

function Bomb(x,y){
	this.x=x;
	this.y=y;
	this.isLive=true; //ը���Ƿ��ģ�Ĭ��true;
	//ը����һ������ֵ
	this.blood=9;
	//������ֵ
	this.bloodDown=function(){
		if(this.blood>0){
			this.blood--;
		}else{
			//˵��ը������
			this.isLive=false;
		}//else
	}//bloodDown
}//Bomb��


//�ӵ���
//type��ʾ������ӵ��ǵ��˵ģ������Լ���
//tank��ʾ����˵������ӵ��������ĸ�̹��.
function Bullet(x,y,direct,speed,type,tank){//-------------�Ľ���9
	this.x=x;
	this.y=y;
	this.direct=direct;
	this.speed=speed;
	this.timer=null;
	this.isLive=true;
	this.type=type;
	this.tank=tank;
	this.run=function run(){
		
			//�ڸñ�����ӵ�������ʱ���������ж��ӵ��Ƿ��Ѿ����߽�
			//�ӵ���ǰ�����������߼���1.�����߽磬2. ��������̹��.����û�����������̹�����������isHitEnemy�����м��--------�Ľ���9
			if(this.x<=0||this.x>=400||this.y<=0||this.y>=300||this.isLive==false){
				
				window.clearInterval(this.timer);//�ӵ�Ҫֹͣ.
				
				this.isLive=false;//�ӵ�����

				if(this.type=="enemy"){
						this.tank.bulletIsLive=false;
				}
			}else{
				//�������ȥ�޸�����
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

			document.getElementById("aa").innerText="�ӵ�x="+this.x+" �ӵ�y="+this.y;
	}
}//Bullet

//����һ��Tank��
function Tank(x,y,direct,color){
	
		this.x=x;
		this.y=y;
		this.speed=2;
		this.isLive=true;
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
	heroBullet=new Bullet(this.x+9,this.y+0,this.direct,3);break;
	case 1:
	heroBullet=new Bullet(this.x+30,this.y+9,this.direct,3);break;
	case 2:
	heroBullet=new Bullet(this.x+9,this.y+30,this.direct,3);break;
	case 3:
	heroBullet=new Bullet(this.x,this.y+9,this.direct,3);break;	

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

	this.bulletIsLive=true;//----------�Ľ���9
	this.count=0;//----------�Ľ���7
	this.run=function(){
		switch(this.direct){//�ȿ���̹�˷���Ϳ��
		case 0:	if(this.y-this.speed>0)		this.y-=this.speed;break;
		case 1:	if(this.x+this.speed+30<400)    this.x+=this.speed;break;
		case 2:	if(this.y+this.speed+30<300)   	this.y+=this.speed;break;
		case 3:	if(this.x-this.speed>0)		this.x-=this.speed;break;

		}//switch
	
		if(this.count>30){//�ı䷽��,��30�£��ٸı䷽��Ϊ���õ���̹�˷���Ƶ���仯��count��//¼����̹�����·����ߵĴ���
			this.direct=Math.round(Math.random()*3);//������� 0,1,2,3��count����//30//��������µķ���
			this.count=0;
		}//if
		this.count++;


		//�ж��ӵ��Ƿ��Ѿ�����������������������µ�һ���ӵ�------------------------�Ľ���9
		if(this.bulletIsLive==false){//���ӵ�,������Ҫ���ǵ�ǰ�������̹�˵ķ���
			switch(this.direct){
			case 0:etBullet=new Bullet(this.x+9,this.y,this.direct,3,"enemy",this);break;
			case 1:etBullet=new Bullet(this.x+30,this.y+9,this.direct,3,"enemy",this);break;
			case 2:etBullet=new Bullet(this.x+9,this.y+30,this.direct,3,"enemy",this);break;
			case 3:etBullet=new Bullet(this.x,this.y+9,this.direct,3,"enemy",this);break;
			}//switch
			this.bulletIsLive=true;
			enemyBullets.push(etBullet);
			
			var mytimer=window.setInterval("enemyBullets["+(enemyBullets.length-1)+"].run()",50);//�������ӵ�run��ÿ����һ���ӵ�ʱ����������run����������¼����timer��isLive
			enemyBullets[enemyBullets.length-1].timer=mytimer;

		}//if
		}//this.run=function()
}

//�����Լ����ӵ���Ҳ�ɷ�װ��Hero����
function drawHeroBullet(){

//����Ҫ���������ӵ�
for(var i=0;i<heroBullets.length;i++){
	var heroBullet=heroBullets[i];
	if(heroBullet!=null&&heroBullet.isLive){
	cxt.fillStyle="FEF26E";
	cxt.fillRect(heroBullet.x,heroBullet.y,2,2);
	}//if
	}//for

}//drawHeroBullet


//�������ǻ���Ҫ���һ�����������ڻ������˵��ӵ�,��Ȼ���������˵��ӵ����Լ����ӵ��ǿ��Ժϲ���.//---------------------�Ľ���9
function drawEnemyBullet(){
	//����Ҫ���������ӵ�
	for(var i=0;i<enemyBullets.length;i++){
		var etBullet=enemyBullets[i];
		if(etBullet.isLive){
			cxt.fillStyle="#00FEFE";
			cxt.fillRect(etBullet.x,etBullet.y,2,2);
		}

	}//for

}//drawEnemyBullet()


function drawTank(tank){//����̹��(����̹�˺��Լ���̹��)
	
	//˵�����е�̹�˶�ҪisLive�������
	if(tank.isLive){
		

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
}
}//drawTank

function isHitEnemyTank(){
	
	//ȡ��ÿ���ӵ�
	for(var i=0;i<heroBullets.length;i++){
			
	//ȡ��һ���ӵ�
	var heroBullet=heroBullets[i];
	if(heroBullet.isLive){ //�ӵ��ǻ�ģ���ȥ�ж�

	for(var j=0;j<enemyTanks.length;j++){	//������ӵ�ȥ�ͱ���ÿ������̹���ж�
			
		var enemyTank=enemyTanks[j];
		
		if(enemyTank.isLive){//�ӵ����е���̹�˵�������ʲô? �ܶ�˼· , ����ʦ��˼����//(��������ӵ����Ƿ����̹�����ھ���)//���ݵ�ʱ����̹�˵ķ���������
		
		switch(enemyTank.direct){
		case 0: //����̹������
		case 2://����̹������
			if(heroBullet.x>=enemyTank.x&&heroBullet.x<=enemyTank.x+20&&heroBullet.y>=enemyTank.y&&heroBullet.y<=enemyTank.y+30){
			enemyTank.isLive=false;
			heroBullet.isLive=false;
			
			var bomb=new Bomb(enemyTank.x,enemyTank.y);//Ȼ��Ѹ�ը�����뵽bombs������
			bombs.push(bomb);//�Ѹ�ը���ŵ�bomb������
			}//if
			break;
		case 1: //����̹������
		case 3://����̹������
			if(heroBullet.x>=enemyTank.x&&heroBullet.x<=enemyTank.x+30
			&&heroBullet.y>=enemyTank.y&&heroBullet.y<=enemyTank.y+20){
			enemyTank.isLive=false;
			heroBullet.isLive=false;
		
			var bomb=new Bomb(enemyTank.x,enemyTank.y);//����һ��ը��;//����ΪӦ����heroBullet.x,heroBullet.y
			bombs.push(bomb);//�Ѹ�ը���ŵ�bomb������
			}//if
			break;
		}//switch

		}//if

	}//for
	}//if
	}//for
}//isHitEnemyTank


function drawEnemyBomb(){//ÿ100ms�����һ��flashTankMap����������ÿ100ms��ӵ���һ��drawEnemyBomb()������ʹ900ms���ܵ���9���������������ը����ը��Ч��
	
	for(var i=0;i<bombs.length;i++){
	
		//ȡ��һ��ը��
		var bomb=bombs[i];
		if(bomb.isLive){

			//���ݵ�ǰ���ը��������ֵ����������ͬ��ը��ͼƬ
			if(bomb.blood>6){  //��ʾ���ը��ͼ
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

			//��Ѫ
			bomb.bloodDown();
			if(bomb.blood<=0){
				//��ô��?�����ը����������ȥ��
				bombs.splice(i,1);// splice() �������ڲ��롢ɾ�����滻�����Ԫ�ء�1��//ʾɾ��1��Ԫ��

			}
		}
	}
}
//function drawEnemyBomb()





