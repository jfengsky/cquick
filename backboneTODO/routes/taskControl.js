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

    },

    /**
     * 删除任务
     * @param id
     */
    remove(id){
        let removeIndex = null;
        this.list.map( (item, index) => {
            if(id === item.id){
                removeIndex = index
            }
        })
        if( removeIndex !== null ){
            this.list.splice(removeIndex, 1)
            return true
        } else {
            return false
        }
    }
}

module.exports = taskControl