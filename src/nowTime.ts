export const nowTime = () =>{
  // new Date().toLocaleTimeString("en-US", { hour12: false });

  var date = new Date();
var str = date.getFullYear()

//  slice(-2)は、例えば、もし、月が10月の時、010と表示されるため、
//  後ろから2文字を切り取り、残すために使用
    + '/' + ('0' + (date.getMonth() +1)).slice(-2)
    + '/' + ('0' + date.getDate()).slice(-2)
    + ' ' + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
return str; 
}
