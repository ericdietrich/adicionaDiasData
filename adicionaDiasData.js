$(document).ready(function(){ 
  
  //Calcula Data Prevista

    $('inp:prazoDeEntrega').blur(function(){
    
    var data = new Date();
    
    //Date.parse precisa ser colocado no formato: 'mm/dd/aaaa' $('inp:dataDoPedido')[0].value
    split = $('inp:dataDoPedido')[0].value.split('/');
    var datanova = split[1] + "/" +split[0]+"/"+split[2];
    
    
    data.setTime(Date.parse(datanova) + ($('inp:prazoDeEntrega')[0].value* 24 * 60 * 60 * 1000));
    document.querySelector('[xname="inpdataPrevista"]').value = ((parseInt(data.getDate(), 10) < 10)?('0' + data.getDate()):(data.getDate())) + "/" + (((parseInt(data.getMonth(), 10) + 1)<10)?('0' + (parseInt(data.getMonth()) + 1)):(parseInt(data.getMonth()) + 1)) + "/" + data.getFullYear();
  });
    
 
});