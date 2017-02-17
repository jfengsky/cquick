(function(win, doc){
    let Absery = (selector, context) => {
        return new Absery.fn.init(selector, context)
    }

    Absery.fn = Absery.prototype = {
        version: "0.0.1",

        constructor: Absery,

        length: 0,

        toArray(){

        },

        // 处理字符串的selector
        selectText(selector){
            debugger
        },

        init(selector, context){

            if(!selector){
                return this
            }

            if(typeof selector === 'string'){
                return this.selectText(selector)
            }

            return this
        },

        extend(...obj){
            return Object.assign.apply(this, obj)
        }
    }

    Absery.extend = Absery.fn.extend

    Absery.fn.prototype = Absery.prototype
    Absery.fn.init.prototype = Absery.prototype
    window.Absery = Absery
})(window, document)


Absery('<span></span>')