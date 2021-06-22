<template>
 <div id="app">
    
  </div>
</template>

<script>
export default {
    props: {
      source: String,
    },
   data: () => ({
    drawer: null,
  }),


  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>
<style scoped>
 
.v-list-item.v-list-item--link.theme--dark {
    text-align: center;
   
    
   
}
button.float-right.v-btn.v-btn--flat.v-btn--icon.v-btn--round.theme--dark.v-size--default {
    margin: 10px;
}
a {
    list-style:none;
}
 a {
    list-style: none;
    font-size: 15px;
    color: white;
    padding: 5px;
}
</style>
