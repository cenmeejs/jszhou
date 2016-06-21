function getGroup(json){
	var group = {},
		len = json.length,
		item,i;
	for(i=0;i<len;i++){
		if(group[json[i].title] === undefined){
			item = [];
			item.push(json[i]);
			group[json[i].title] = item;
		}else{
			group[json[i].title].push(json[i]);
		}
	}
	return group;
}
var json = [
	{
		title:'001',
		name:1
	},
	{
		title:'002',
		name:2
	},
	{
		title:'003',
		name:3
	},
	{
		title:'002',
		name:4
	},
	{
		title:'001',
		name:5
	}
]
console.log(getGroup(json));