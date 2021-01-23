
var uname=document.getElementById('username');
let sex=document.getElementById('man');
let phoneNum=document.getElementById('telephone');
let password1=document.getElementById('password1');
let password2=document.getElementById('password2');

//用正则表达式计算字符串中数字个数
function getDigNum(string){
    let num=0;
    for (let i=0;i<string.length;i++){
        let ch=string.charAt(i);
        if (ch.match(/[0-9]/))
            num++; //是数字
    }
    return num;
}

//判断用户输入信息是否正确
function isRightMessage(){

    //昵称栏输入内容为空
    if (uname.value=="") 
        return false;

    //昵称输入内容中存在空格
    let reg=/\s+/;
    if (reg.test(uname.value))
        return false;

    //手机号不是11位数字
    reg=/^[0-9]{11}$/; 
    if (!reg.test(phoneNum.value))
       return false;

    //规定用户只能输入包含数字、大小写字母以及五种特殊字符{#,&,*,?,@}的密码
    reg=/^[a-zA-Z0-9#&*?@]{9,15}$/; //且密码长度的范围为9-15位
    if (!reg.test(password1.value))
        return false;

    //密码中不存在五种特殊字符中的一种
    reg=/[#&*?@]/;
    if (!reg.test(password1.value))
        return false;

    //密码中不存在小写字符
    reg=/[a-z]/;
    if (!reg.test(password1.value))
        return false;

    //密码中不存在大写字符
    reg=/[A-Z]/;
    if (!reg.test(password1.value))
        return false;

    //密码中数字数量小于2个
    if (getDigNum(password1.value)<2)
        return false;

    //两次输入的密码不同    
    if (password1.value!=password2.value)
        return false;

    return true; //所有信息都正确
}

document.getElementById('btn').onclick=function(){
    if (isRightMessage()) //信息正确
        window.alert("修改成功！");
    else
        window.alert("格式错误！"); 
    //将输入框中的内容清空
    uname.value=phoneNum.value=password1.value=password2.value="";
    sex.checked=true; //将性别选择项恢复默认值
}
