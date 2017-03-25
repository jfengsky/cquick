var Singleton = function(name){
    this.name = name
    this.instance = null
}

Singleton.prototype.getName = function(){
    return this.name
}

function getInstance(name) {
    if(!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}

