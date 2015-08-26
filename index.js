window.onload=function(){
	var p1=new Inptext('search'); 
	p1.focus();

	
	function show(){
		var ulLf=document.getElementById('banner-img');
		var ulRg=document.getElementById('banner-btn');
		var aLiLf=ulLf.getElementsByTagName('li');
		var aLiRg=ulRg.getElementsByTagName('li');
		var aImg=ulRg.getElementsByTagName('img');
		var num=0;
		var timer=null;
		var oImg=document.getElementById('bar-img-z');
		var arrUl=['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg'];
		var arrW=['喜羊羊快跑','啪啪江湖','决战沙城','全民封神','全民枪战'];
		var aA=ulRg.getElementsByTagName('a');
		var onff=false;
		//var span=document.getElementsByName('sp');

		for(var i=0;i<aLiLf.length;i++){
			
			aImg[i].style.display='none';
			aLiRg[i].index=i;
			aLiRg[i].onmouseover=function(){
				onff=true;
				clearInterval(timer);
				
				if(onff){
					for(var i=0;i<aLiRg.length;i++){
						oImg.style.display='none';
						aImg[i].style.display='none';
						aA[i].className='';
						aLiLf[i].style.display='none';
						//span[i].style.display='block';
					}
					aLiLf[this.index].style.display='block';
				}
				
				oImg.style.display='none';
				aLiLf[this.index].style.display='block';
				aImg[this.index].style.display='block';
				aA[this.index].className='on';
				//span[this.index].style.display='none';	//需修改
				
			};
			aLiRg[i].onmouseout=function(){
				oImg.style.display='block';
				aLiLf[this.index].style.display='none';
				aImg[this.index].style.display='none';
				aA[this.index].className='';
				//span[this.index].style.display='block';
							timer=setInterval(function(){
								for(var i=0;i<aLiRg.length;i++){
									aLiLf[i].style.display='none';
									aImg[i].style.display='none';
									aA[i].className='';

								}
								oImg.style.display='block';
								aLiLf[num].style.display='block';
								aA[num].className='on';
								aImg[num].style.display='block';
								oImg.src=arrUl[num];
								num++;
								if(num==aLiRg.length){
									num=0;
								}
							},2000)
			};
		}
		
		timer=setInterval(function(){
			for(var i=0;i<aLiRg.length;i++){
				aLiLf[i].style.display='none';
				aImg[i].style.display='none';
				aA[i].className='';
				//span[i].style.display='block';
			}
			
			oImg.style.display='block';
			aLiLf[num].style.display='block';
			aA[num].className='on';
			aImg[num].style.display='block';
			//span[num].style.display='none';
			oImg.src=arrUl[num];
			
			num++;
			if(num==aLiRg.length){
				num=0;
			}
		},2000)
	}
	show();	

	function show2(id){
		var oLi=document.getElementById(id);
		var oDiv=oLi.getElementsByTagName('div')[0];
		var speed=0;
		var timer=null;

		oLi.onmouseover=function(){
			clearInterval(timer);
			timer=setInterval(function(){
				
				if(oDiv.offsetHeight>=160){
					oDiv.style.height=160+'px';
				}else{
					speed+=25;
					oDiv.style.height=speed+'px';
				}
			},50)
		}
		oLi.onmouseout=function(){
			clearInterval(timer);
			timer=setInterval(function(){
				
				if(oDiv.offsetHeight<=0){
					oDiv.style.height=0+'px';
				}else{
					speed-=25;
					oDiv.style.height=speed+'px';
				}
			},50)
		}

		
	}
	show2('li1');
	show2('li2');
	show2('li3');
}










function Banner(ul1,ul2){
	this.ul1=document.getElementById(ul1);
	this.aLi1=this.ul1.getElementsByTagName('li');
	this.ul2=document.getElementById(ul2);
	this.aLi2=this.ul2.getElementsByTagName('li');
	
}

Banner.prototype.cut=function(){
	var aLi1=this.aLi1;

	for(var i=0;i<this.aLi2.length;i++){
		this.aLi2[i].num=i;
		this.aLi2[i].onmouseover=function(){
			for(var i=0;i<aLi1.length;i++){
				aLi1[i].style.display='none';
			}
			aLi1[this.num].style.display='block';
		}
	}
}


function Inptext(obj){
	
	this.obj=document.getElementById(obj);
}
Inptext.prototype.focus=function(){
	this.obj.onfocus=function(){
		this.value='';
	}
	this.obj.onblur=function(){
		this.value='请输入游戏名称';
	}
}