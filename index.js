		window.onload = function(){
			// 楼层出现
			// innerHight + scrollTop >= offsetTop
			let aside = document.querySelectorAll('.aside li');
			console.log(aside);
			let ch = innerHeight;
			// 元素到页面的左上角
			let floor = document.querySelectorAll('.floor');
			let floorArr = [];
			let color = ['red','yellow','blue','green','pink'];
			let flag = true;

			floor.forEach(element=>{
				floorArr.push(element.offsetTop);
			})

			aside.forEach((element,index)=>{
				element.onclick = function(){
					for(let i=0;i<aside.length;i++){
						aside[i].style.background = 'none';
					}
					flag = false;
					element.style.background = color[index];

					animate(document.body,{scrollTop:floorArr[index]},function(){flag = true;})
				}
			})

			window.onscroll = function(){
				if(!flag){
					return;
				}
				let scrolltop = document.body.scrollTop;  //小数
				// console.log(document.documentElement.scrollTop);  //0
				floorArr.forEach((value,index)=>{
					if(scrolltop+ch>=value+300){

						for(let i=0;i<aside.length;i++){
						aside[i].style.background = 'none';
						}
						aside[index].style.background = color[index];

						let imgs = floor[index].getElementsByTagName('img');
						for(let i=0;i<imgs.length;i++){
							imgs[i].src = imgs[i].getAttribute('imgPath');
						}
					}
				})
			}
		}

