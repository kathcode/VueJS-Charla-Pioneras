<template>
  <div>
    <div v-on:click="showContainerList=false; containerAdd=true">
      <b-button href="#" variant="outline-success">Agregar una mascota</b-button>
    </div>

    <div v-on:click="showContainerList=true; containerAdd=false">
      <b-button href="#" variant="outline-success">Buscar mascota</b-button>
    </div>

    <div v-if="showContainerList" class="container-list">
      <ContainerList :petsList="pets" />
    </div>

    <div v-if="containerAdd">
      <ContainerAdd :form="form" @click="postItem"/>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import ContainerList from './ContainerList.vue';
import ContainerAdd from './ContainerAdd.vue';

export default {
  name: 'HelloWorld',
  components: {
    ContainerList,
    ContainerAdd,
  },
  
  data() {
    return {
      imageUrl: "",
      pets: [],
      showContainerList: true,
      containerAdd: false,
      form: {
        name: '',
        image: '',
        description: ''
      }
    }
  },

  mounted() {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(response => (this.imageUrl = response.data.message));

    axios
      .get('http://things.ubidots.com/api/v1.6/devices/pets/petlist/values?token=A1E-uWcVqarOPgqJFhY2cqFTexdECgWGcX')
      .then(response => (this.pets = response.data.results));
  },

  methods: {
    postItem() {
      const data = { value: 0, context: { image: this.form.image, name: this.form.name, description: this.form.description } }
      axios
        .post('http://things.ubidots.com/api/v1.6/devices/pets/petlist/values?token=A1E-uWcVqarOPgqJFhY2cqFTexdECgWGcX', data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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
    margin: 10px;
  }

  .container-list {
    margin-top: 20px;
  }
</style>
