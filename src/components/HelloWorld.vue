<template>
  <div>
    <div v-for="pet in pets">
      {{ pet.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  
  data() {
    return {
      pets: []
    }
  },

  mounted() {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(response => (this.pets = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
