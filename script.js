const kataSebelum = document.getElementById('kataSebelum');
const kataSesudah = document.getElementById('kataSesudah');
const checkSatu = document.getElementById('check1');
const checkDua = document.getElementById('check2');

function bapak(data){
    temp='';
    data=data.toLowerCase();
    for(i=0;i<data.length;i++){
        if(data[i]=='I' || data[i]=='i' || data[i]=='x'){
            temp=temp+data[i].toLowerCase();
        }else if(data[i]=='l'){
            temp=temp+data[i].toUpperCase();
        }else if(i%4==0){
            temp=temp+data[i].toUpperCase();
        }else{
            temp=temp+data[i].toLowerCase();
        }
        
    }
    return temp;
}

function lower(data){
    data=data.toLowerCase();
    return data;
}

function alay(data){
    temp=lower(data).replace(/a/g,'4')
    .replace(/b/g,'B')
    .replace(/c/g,'C')
    .replace(/d/g,'D')
    .replace(/e/g,'3')
    .replace(/f/g,'F')
    .replace(/g/g,'6')
    .replace(/h/g,'H')
    .replace(/i/g,'1')
    .replace(/j/g,'7')
    .replace(/k/g,'K')
    .replace(/l/g,'L')
    .replace(/m/g,'M')
    .replace(/n/g,'N')
    .replace(/o/g,'0')
    .replace(/p/g,'P')
    .replace(/q/g,'Q')
    .replace(/r/g,'R')
    .replace(/s/g,'S')
    .replace(/t/g,'T')
    .replace(/u/g,'U')
    .replace(/v/g,'V')
    .replace(/w/g,'W')
    .replace(/x/g,'X')
    .replace(/y/g,'Y')
    .replace(/z/g,'2');
    temp=bapak(temp);
    return temp;
}

function tulis(data){
    kataSesudah.value = data;
}

function jalan(){
    let data = kataSebelum.value;
    data = alay(data);
    tulis(data);
}