<template>
  <b-container class="bv-example-row">
    <b-row>{{pets}}
      <b-col cols="4" v-for="pet in petsList" v-bind:key="pet.id">
        
        <b-card :title="pet.context.name"
                :img-src="pet.context.image"
                :img-alt="pet.context.name"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
          <p class="card-text">
            {{pet.context.description}}
          </p>
          <b-button href="#" variant="outline-success">Adoptar!!</b-button>
        </b-card>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'ContainerList',
    props: {
      petsList: Array
    }
  }
</script>
