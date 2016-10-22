function TabSwitch(id)
{
	var oDiv=document.getElementById(id);
	this.aBtn=oDiv.getElementsByClassName('tabHeaderItem');
	this.aDiv=oDiv.getElementsByClassName('tabPageItem');
	var _this=this;
	
	for(var i=0;i<this.aBtn.length;i++)
	{
		this.aBtn[i].index=i;
		this.aBtn[i].onclick=function ()
		{
			_this.tab(this);
		};
	}
}

TabSwitch.prototype.tab=function (oBtn)
{

	for( var i=0;i<this.aBtn.length;i++)
	{
		this.aBtn[i].className='tabHeaderItem';
		this.aDiv[i].style.display='none';
	}
	oBtn.className='tabHeaderItem tabPageHeaderActive';
	this.aDiv[oBtn.index].style.display='block';
};