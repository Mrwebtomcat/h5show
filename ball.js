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
		Object.assigin(this,props);
		return this;
	}

	
	render(ctx){
		
	}

}