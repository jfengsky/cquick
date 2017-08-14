<template>
  <ul>
    <li v-for="(item, index) in config" :key="index">
      <a :href="hrefAddress(item.pattern)">{{item.pattern}}</a>
    </li>
  </ul>
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
