<template>
  <div>
    <button @click="addPet">Add Pet</button>
    <div v-for="(pet, index) of pets" :key="index">
      {{ pet.name }}
    </div>
  </div>
</template>

<script>
// Import firebase
import { petsRef } from '../firebase'

export default {
  name: 'HelloWorld',
  firebase: {
    pets: petsRef
  },
  methods: {
    addPet () {
      petsRef.push({
        name: 'muñeca'
      })
    }
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
