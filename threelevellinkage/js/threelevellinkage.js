//-------------------select三级联动的绑定事件---------------
	city = [];
    area=[[]];
    area[0]=[[]];
    area[1]=[[]];
    area[2]=[[]];
    var Province = document.getElementById('Province');
    var City = document.getElementById('City');
    var Area = document.getElementById('Area');
    
　　    //二级数据
    city[0] = ['长沙市','衡阳市'];
    city[1] = ['广州市','深圳市','肇庆市'];
    city[2] = ['福州市','厦门市'];
    
    //三级数据
    area[0][0]=['岳麓区','开福区'];
    area[0][1]=['南岳区'];
    area[1][0]=['天河区','番禺区','越秀区'];
    area[1][1]=['南山区','宝安区','福田区','罗湖区']; 
    area[1][2]=['鼎湖区','端州区'];
    area[2][0]=['鼓楼区','仓山区'];
    area[2][0]=['集美区','同安区','思明区'];
    //初始化 --------------------end--------------------------------
    
    //一级更改二级方法
    function selectProvince(m){
    	//相当于清空二级、三级
    	City.length = 1;
    	Area.length = 1;
    	
    	//生成二级option
        for (var i = 0; i < city[m].length; i++) {
            City.add(new Option(city[m][i],i));
        };
    }
    
    //二级更改三级方法
    function selectCity(){
    	//相当于清空三级
    	Area.length = 1
    	
    	//获取下标
    	m=Province.selectedIndex;
      	n=City.selectedIndex;
     	if(m>0) m-=1;
      	if(n>0) n-=1;
      	
      	//生成三级option
        for (var j = 0; j< area[m][n].length; j++) {
        	Area.add(new Option(area[m][n][j],j));
        };
    }