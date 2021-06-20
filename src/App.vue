<template>
  <v-app id="inspire">
      <v-navigation-drawer 
        v-model="drawer"
        app>
        <v-list dense>
            <v-layout column align-center>
               <v-flex class="mt-5"> 
                    <v-avatar size="100">
                        <img src="./assets/afrin.png" alt="">
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
                    <v-list-item-title ><router-link to="/about" class="text-decoration-none">About Me</router-link></v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><router-link to="/education" class="text-decoration-none">My Skills</router-link></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><router-link to="/experience" class="text-decoration-none">Experience</router-link></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><router-link to="/skills" class="text-decoration-none">Skills & Education</router-link></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><router-link to="/project" class="text-decoration-none">My Project</router-link></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title><router-link to="/about" class="text-decoration-none">Contact Me</router-link></v-list-item-title>
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
