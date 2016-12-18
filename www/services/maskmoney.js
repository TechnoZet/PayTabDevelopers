var maskMoneyService = angular.module('maskMoneyService', [])
.service('masker', function () {
	var initlength=4;
    this.maskfun = function (a) { 
    if(a.length>initlength){
	 			if((a*10).toFixed(2)<4999){
	 			a=(a*10).toFixed(2);
	 			initlength=a.length;
			 	}
			 	else{
			 		num = a.toString(); //If it's not already a String
					num = num.slice(0, (num.indexOf("."))+3);
					a=num;
			 	}	
	 		}
	 		else{
	 			a=(a/10).toFixed(2);
	 			initlength=a.length;
	 		}
    return a;
    };

});