<template>
  <b-container class="bv-example-row">
    <b-row class="text-center justify-content-md-center">
        <b-col cols="6">
          <b-form>
            <!-- Name -->
            <b-form-group id="name"
                          label="Nombre"
                          label-for="name"
                          description="Agrega el nombre de la mascota">
              <b-form-input id="name"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Nombre">
              </b-form-input>
            </b-form-group>

            <!-- Image -->
            <b-form-group id="image"
                          label="Url de la foto"
                          label-for="image"
                          description="Agrega la url de la mascota">
              <b-form-input id="image"
                            type="text"
                            v-model="form.image"
                            required
                            placeholder="Url de la foto">
              </b-form-input>
            </b-form-group>

            <!-- Descripción -->
            <b-form-group id="description"
                          label="Descripción"
                          label-for="description"
                          description="Descripción de la mascota">
              <b-form-input id="description"
                            type="text"
                            v-model="form.description"
                            required
                            placeholder="Descripción">
              </b-form-input>
            </b-form-group>

            <b-button type="button" @click="onClick" variant="primary">Agregar mascota para adopicón</b-button>
          </b-form>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'ContainerList',
    props: {
      form: Object
    },

    data: function () {
      return {
        postItem: this.postItem
      }
    },

    methods: {
      onClick(e) {
        e.preventDefault();
        this.$emit('click');
      }
    }
  }
</script>

