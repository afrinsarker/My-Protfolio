<template>
 <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer 
        v-model="drawer"
        app>
        <v-list dense>
            <v-layout column align-center>
               <v-flex class="mt-5"> 
                    <v-avatar size="100">
                        <img src="../assets/afrin.png" alt="">
                    </v-avatar>
                     <p class="text-center mt-4">afrin</p>   
               </v-flex>
               <small>afrin.nupor@yahoo.com</small>
               <v-flex class="mt-4 mb-4">
                  <Popup />
               </v-flex>
          </v-layout>
              <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title ><a class="text-decoration-none" href="#">About Me</a></v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><a class="text-decoration-none" href="#">My Skills</a></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><a class="text-decoration-none" href="#">Experience</a></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><a class="text-decoration-none" href="#">Skills & Education</a></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><a  class="text-decoration-none" href="#">My Project</a></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><a class="text-decoration-none" href="#">Contact Me</a></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                
                <v-row
                    align="center"
                    justify="center"
                  >
                    <v-btn icon>
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                </v-row>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
      <!---EndNavbar--->
      <!--<v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>--->
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
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
