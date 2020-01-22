for(var i = 0; i <= 20; i++){
    if( i % 2 == 0){
        console.log(i + '是偶数');
    }
    else{
        console.log(i + '是奇数');
    }
}

var n = 1;
while(n <= 9){
    var chart="";
    for(var j = 1; j <= n; j++){
        chart+=(`${n}*${j}=${n*j}\t`);
        // console.log(n + '*' + j + '=' + n*j);
    }
    n++;
    console.log(chart);
}