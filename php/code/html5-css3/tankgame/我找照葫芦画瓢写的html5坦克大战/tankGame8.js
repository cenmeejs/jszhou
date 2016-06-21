//Ϊ�˱�̷��㣬���Ƕ���������ɫ����
var heroColor=new Array("#BA9658","#FEF26E");
var enmeyColor=new Array("#00A2B5","#00FEFE");
//�����ĵ���̹�ˣ��������չ�ԣ����ǲ����.
//����һ��ը����
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
		}
	}
}


//�ӵ���
function Bullet(x,y,direct,speed){
	this.x=x;
	this.y=y;
	this.direct=direct;
	this.speed=speed;
	this.timer=null;
	this.isLive=true;
	this.run=function run(){
		
			//�ڸñ�����ӵ�������ʱ���������ж��ӵ��Ƿ��Ѿ����߽�
			//�ӵ���ǰ�����������߼���1.�����߽磬2. ��������̹��.
			if(this.x<=0||this.x>=400||this.y<=0||this.y>=300||this.isLive==false){
				//�ӵ�Ҫֹͣ.
				window.clearInterval(this.timer);
				//�ӵ�����
				this.isLive=false;
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
}

//����һ��Tank��
function Tank(x,y,direct,color){
	
		this.x=x;
		this.y=y;
		this.speed=1;
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

//����һ��Hero��
	//x ��ʾ̹�˵� ������, y ��ʾ������, direct ����	
	function Hero(x,y,direct,color){
	
		//�������仰��������ͨ������ð�䣬�ﵽ�̳е�Ч��
		this.tank=Tank;
		this.tank(x,y,direct,color);

		//����һ���������������̹��.
		this.shotEnemy=function(){
			
			//�����ӵ�, �ӵ���λ��Ӧ�ú�hero�й�ϵ�����Һ�hero�ķ����й�.!!!
			//this.x ���ǵ�ǰhero�ĺ�����,�������Ǽ򵥵Ĵ���(ϸ��)

			switch(this.direct){
				case 0:
				heroBullet=new Bullet(this.x+9,this.y,this.direct,1);
				break;
				case 1:
				heroBullet=new Bullet(this.x+30,this.y+9,this.direct,1);
				break;
				case 2:
				heroBullet=new Bullet(this.x+9,this.y+30,this.direct,1);
				break;
				case 3: //��
				heroBullet=new Bullet(this.x,this.y+9,this.direct,1);
				break;
			}

			//������ӵ�������뵽������	 -> push����
			heroBullets.push(heroBullet);
			//�������ǵ��ӵ�run, 50 ����ʦ��β��Եõ���һ������., ���＼���ѶȱȽϴ�.
			//�����㹤����1-2�꣬��Ҳδ���뵽, ����������ʽ��ÿ���ӵ��Ķ�ʱ���Ƕ���,�����ԭ���ķ���
			//�������ӵ�����һ����ʱ��.
			var timer=window.setInterval("heroBullets["+(heroBullets.length-1)+"].run()",50);
			//�����timer��������ӵ�(js���������ô���!)
			heroBullets[heroBullets.length-1].timer=timer;

		}



	}

	//����һ��EnemyTank��
	function EnemyTank (x,y,direct,color){
		
		//Ҳͨ������ð�䣬���̳�Tank
		this.tank=Tank;
		this.tank(x,y,direct,color);
this.count=0;// count��//¼����̹�����·����ߵĴ���-----------------�Ľ���		

		this.run=function run(){
			
			switch(this.direct){//�ȿ���̹�˷���Ϳ��
			case 0:	if(this.y-this.speed>0)		this.y-=this.speed;break;
			case 1:	if(this.x+this.speed+30<400)    this.x+=this.speed;break;
			case 2:	if(this.y+this.speed+30<300)   	this.y+=this.speed;break;
			case 3:	if(this.x-this.speed>0)		this.x-=this.speed;break;
			}
			//�ı䷽��,��30�£��ٸı䷽��Ϊ���õ���̹�˷���Ƶ���仯��count��//¼����̹�����·����ߵĴ���
			if(this.count>30){
				this.direct=Math.round(Math.random()*3);//������� 0,1,2,3��count����//30//��������µķ���
				this.count=0;
			}
			this.count++;

		}
	}

		//�����Լ����ӵ�,��˵һ�䣬��Ҳ���԰Ѹú�����װ��Hero����
		function drawHeroBullet(){

				//����Ҫ���������ӵ�
				for( var i=0;i<heroBullets.length;i++){
					var heroBullet=heroBullets[i];
					//������Ǽ�����һ�仰������Ҫ֪������ӣ�����Ҫ�����������а���
					if(heroBullet!=null&&heroBullet.isLive){
						cxt.fillStyle="#FEF26E";
						cxt.fillRect(heroBullet.x,heroBullet.y,2,2);
					}
				}

		}
	
	//����̹��(����̹�˺��Լ���̹��)
	function drawTank(tank){
	
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
	}

//��дһ��������ר�������ж��ҵ��ӵ����Ƿ������ĳ������̹��
function isHitEnemyTank(){
	
		//ȡ��ÿ���ӵ�
		for(var i=0;i<heroBullets.length;i++){
			
				//ȡ��һ���ӵ�
				var heroBullet=heroBullets[i];
				if(heroBullet.isLive){ //�ӵ��ǻ�ģ���ȥ�ж�
				//������ӵ�ȥ�ͱ���ÿ������̹���ж�
				for(var j=0;j<enemyTanks.length;j++){
					
							var enemyTank=enemyTanks[j];
						
							if(enemyTank.isLive){
							//�ӵ����е���̹�˵�������ʲô? �ܶ�˼· , ����ʦ��˼����
							//(��������ӵ����Ƿ����̹�����ھ���)
							//���ݵ�ʱ����̹�˵ķ���������
							switch(enemyTank.direct){
								case 0: //����̹������
								case 2://����̹������
									if(heroBullet.x>=enemyTank.x&&heroBullet.x<=enemyTank.x+20
										&&heroBullet.y>=enemyTank.y&&heroBullet.y<=enemyTank.y+30){
										//��̹��isLive ��Ϊfalse ,��ʾ����
										enemyTank.isLive=false;
										//���ӵ�Ҳ����
										heroBullet.isLive=false;
										//����һ��ը��
										var bomb=new Bomb(enemyTank.x,enemyTank.y);
										//Ȼ��Ѹ�ը�����뵽bombs������
										bombs.push(bomb);
									}
								break;
								case 1: //����̹������
								case 3://����̹������
									if(heroBullet.x>=enemyTank.x&&heroBullet.x<=enemyTank.x+30
										&&heroBullet.y>=enemyTank.y&&heroBullet.y<=enemyTank.y+20){
										//��̹��isLive ��Ϊfalse ,��ʾ����
										enemyTank.isLive=false;
										heroBullet.isLive=false;

										//����һ��ը��
										var bomb=new Bomb(enemyTank.x,enemyTank.y);
										//Ȼ��Ѹ�ը�����뵽bombs������
										bombs.push(bomb);
									}
								break;

							}

						}


				}//for
			}
		}
}

//����ը�� 
function drawBomb(){
	
	for(var i=0;i<bombs.length;i++){
	
		//ȡ��һ��ը��
		var bomb=bombs[i];
		if(bomb.isLive){
			
			//���ݵ�ǰ���ը��������ֵ����������ͬ��ը��ͼƬ
			if(bomb.blood>6){  //��ʾ���ը��ͼ
				var img1=new Image();
				img1.src="bomb_1.gif";
				var x=bomb.x;
				var y=bomb.y;
				img1.onload=function(){
					cxt.drawImage(img1,x,y,30,30);
				}
			}else if(bomb.blood>3){
				var img2=new Image();
				img2.src="bomb_2.gif";
				var x=bomb.x;
				var y=bomb.y;
				img2.onload=function(){
					cxt.drawImage(img2,x,y,30,30);
				}
			}else {
				var img3=new Image();
				img3.src="bomb_3.gif";
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
				bombs.splice(i,1);

			}
		}
	}
}
