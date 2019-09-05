let a = "abcdefghijklmnopqrstuvwxyz";

for(let i=0;i<a.length;i++){
	console.log("now a is : "+a+"//len : "+a.length);
	console.log("Delete : "+a[0]);
	a = a.substring(1);
}
