function codegenerate(length){
    var code=""
    var random="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(let i=0;i<=length;i++){
      const randomind=Math.floor(Math.random()*random.length)
      code +=random[randomind]
    }
    return code;
}
function captcharefresh(){
const captchaelem=document.getElementById("captcha")
captchaelem.textContent=codegenerate(4);
}
captcharefresh();