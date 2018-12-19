//The Class with Ball production,you can generate many object
class Ball
{
	constructor(props){
		this.x =0;
		this.y = 0;
		this.r = 20;
		this.vx=0;
		this.vy=0;
		this.vz=0;
		this.x3d = 0;
		this.y3d = 0;
		this.scaleX =1;
		this.scaleY =1;
		this.strokeStyle = 'rgb(0,0,0)';
		this.fillStyle = 'rgb(57, 119, 224)';
		this.alpha = 1;
		Object.assign(this,props);
		return this;
	}

	
	render(ctx){
		let{x,y,scaleX,scaleY,vx,vy,r,y3d,x3d,strokeStyle,fillStyle,alpha} = this;
		ctx.save();
		ctx.fillStyle = fillStyle;
		ctx.globalAlpha = alpha;
		ctx.strokeStyle = strokeStyle;
		ctx.beginPath();
		ctx.arc(x,y,r,Math.PI*2,false);
		ctx.fill();
		ctx.stroke();
		ctx.restore();
		return this;
	}

}