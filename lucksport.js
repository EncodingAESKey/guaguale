function LuckSport(canvasElem){
	this.canvas = canvasElem ;
	this.ctx = this.canvas.getContext("2d");
}
LuckSport.prototype = {
	
	constructor:LuckSport,
	
	init:function(){
		this.createMask();
		this.move();
	},
	
	createMask:function(){
		this.ctx.fillStyle = "#ccc";  
		//与destination-out实现擦除效果  
		this.ctx.beginPath();
		this.ctx.fillRect(50,220,400,180);  
		this.ctx.closePath();
		this.ctx.fill();
	},
	move:function(){
		var that = this ;
		this.canvas.onmousemove = function(e) {  
			//获取鼠标位置  
			var x = e.pageX - that.canvas.offsetLeft;  
			var y = e.pageY - that.canvas.offsetTop;  
	  
			that.ctx.globalCompositeOperation = "destination-out";  
			that.ctx.beginPath(); 
			that.ctx.fillStyle = "red";  
			that.ctx.arc(x,y,20,0,2*Math.PI,true);  
			that.ctx.fill();  
			that.ctx.closePath();  
		}	
	},
}

