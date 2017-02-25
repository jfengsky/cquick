(function(win, doc){
    let Absery = (selector, context) => {
        return new Absery.fn.init(selector, context)
    }

    let rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/

    Absery.fn = Absery.prototype = {
        version: "0.0.1",

        constructor: Absery,

        length: 0,

        toArray(){

        },

        // 处理字符串的selector
        selectText(selector){
            let match = rquickExpr.exec(selector)

            // 处理#id选择器
            if(match[2]) {
                let elem = doc.getElementById(match[2])
                // if(elem && elem.parentNode) {
                if( elem ){
                    this.length = 1
                    this[0] = elem
                }
                this.context = doc
                this.selector = selector
                return this
            }
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

    let attr = (tag, value) => {

    }


    Absery.extend = Absery.fn.extend

    Absery.fn.prototype = Absery.fn.init.prototype = Absery.prototype
    win.Absery = Absery
})(window, document)


Absery('#test')

// Absery('<span></span>')
