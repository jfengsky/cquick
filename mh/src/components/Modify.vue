<template>
  <div>
    <h3 style="padding: 10px 0">配置修改</h3>
    <div class="card">
      <div class="card-header">
        <h5 class="float-left">代理修改</h5>
        <button type="button" class="float-right btn btn-primary" @click="addNproxy">新增代理</button>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">代理列表</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option v-for="(item, index) in config" :key="index" :value="item.pattern">{{item.pattern}}</option>
            </select>
          </div>
          <button type="button" class="btn btn-warning">修改</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: null
    }
  },
  props: [],
  mounted() {
    fetch('/nproxyconfig').then(res => {
      res.json().then(json => {
        this.config = json
      })
    })
  },
  methods: {
    addNproxy: ev => {
      debugger
    }
  },
  computed: {

  }
}
</script>
