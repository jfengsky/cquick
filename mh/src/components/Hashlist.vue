<template>
  <div class="row">
    <div class="col-3">
      <div class="list-group">
          <a v-for="(item, index) in config" :key="index" class="list-group-item list-group-item-action" :href="hrefAddress(item.pattern)">{{item.pattern}}</a>
      </div>
    </div>
    <div class="col-9">
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
  mounted() {
    fetch('/nproxyconfig').then(res => {
      res.json().then(json => {
        this.config = json
      })
    })

  },
  methods: {
    hrefAddress: href => `#${href}`
  },
  computed: {
    
  }
}
</script>
