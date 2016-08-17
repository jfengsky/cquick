let taskControl = {

    // id从0开始
    id: -1,

    // 所有任务
    list: [],

    /**
     * 添加任务
     * {String} desc 任务描述
     */
    add(desc){
        this.id = this.id + 1
        this.list.push({
            id: this.id,
            desc,
            done: false
        })
        return this.id
    },
    // 完成
    done(){

    },

    // 清除完成的
    clear(){

    }
}

module.exports = taskControl