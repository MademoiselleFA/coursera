var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jeremiah";
names[3]="Angela";
names[4]="Mariz";
names[5]="Rouvan";
names[6]="Veronica";
names[7]="Jessa";
names[8]="Sydney";
names[9]="Clarence";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
