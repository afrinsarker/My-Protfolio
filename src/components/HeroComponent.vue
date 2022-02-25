<template>
  <div>
    <div class="app">
      <v-card
        class="portrait mt-1"
       >
       <img src="../assets/labtop.jpg" alt="" height="500" width="100%">
            <v-row>
                <v-col
                  class="text-center mt-15"
                  cols="12">
                    <h1 color="white lighten-2">
                      AFRIN SARKER
                    </h1>
                    <h4 class="subheading">
                      FRONT-END DEVELOPER
                    </h4>
                </v-col>
            </v-row>
       </v-card>
       <!---End --->    
    </div>
  </div>
</template>
<script>

  export default {
    data: () => ({
    })
  }
</script>
<style scoped>
 h2 {
    margin: 10px;
    padding-top: 10px;
    color: coral;
    font-size: 25px;
}
h1 {
  
  font-size: 50px;
  margin-bottom: 10px;
  
}
h5.text-center.mb-4 {
    font-size: 20px;
    color: coral;
    margin-bottom: 5px;
}
h3 {
    font-size: 30px;
}
p {
    font-size: 15px;
}
i.v-icon.notranslate.mdi.mdi-home.theme--dark {
    cursor: pointer;
}
i.v-icon.notranslate.mdi.mdi-home.theme--dark:hover {
    color: coral;
}
</style>
