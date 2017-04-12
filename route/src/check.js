/**
 * 策略模式表单验证
 */

const ruleList = {
    checkEmpty(value, errorMsg = '不能为空'){
        if(!value){
            return errorMsg
        }
    },
    checkLength(value, errorMsg, options) {
        if(value.length < options.maxleng){
            return errorMsg || `不能小于${options.maxleng}个字符`
        }
    },
    checkEmail(value, errorMsg = '邮箱不正确'){
        if(!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(value)){
            return errorMsg
        }
    },
    checkMobile(value, errorMsg = '手机不正确'){
        if( !/(^1[3|5|8][0-9]{9}$)/.test(value) ){
            return errorMsg
        }
    }
}

const Validate = function(){
    this.cache = []
}

Validate.prototype.add = function(value, rules){
    
    rules.map( ({rule, errorMsg, options}) => {
        this.cache.push(function(){
            return ruleList[rule].apply(this, [value, errorMsg, options])
        })
    })
}

Validate.prototype.start = function(){
    for(let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        let msg = validatorFunc()
        if(msg){
            console.log(msg)
        }
    }
}



const check = data => {
    let mobileValue = data.mobile.value.trim()
    const mobileValidate = new Validate()

    // 手机校验规则，可以动态添加
    let mobileRules = [{
        rule: 'checkEmpty',
        errorMsg: '手机不能为空'
    },{
        rule: 'checkLength',
        options:{maxleng: 10}
    },{
        rule: 'checkMobile'
    }]
    
    mobileValidate.add(mobileValue, mobileRules)
    mobileValidate.start()

    let emailValue = data.email.value.trim()
    const emailValidate = new Validate()
    let emailRules = [{
        rule: 'checkEmpty',
        errorMsg: '邮箱不能为空'
    },{
        rule: 'checkEmail'
    }]
    emailValidate.add(emailValue, emailRules)
    emailValidate.start()
}

export default check