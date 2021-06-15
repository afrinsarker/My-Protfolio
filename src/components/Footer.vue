<template>
   <div>
    <!---Contact information--->
     <v-container class="ml-2">
       <v-card color="grey darken-4"> 
         <v-row no-gutters>
            <v-row>
              <!--Grid column-->
              <v-col cols="12" md="8" mb="4" lg="12">
                <h2 class="text-uppercase ml-5">Contact Me</h2>

                  <v-list dense class="ml-5">
                    <v-list-item-content>
                      <v-list-item-title><a class="text-decoration-none" href="afrinsarker91@gmail.com">
                      Email: afrinsarker91@gmail.com</a></v-list-item-title>
                      
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-title><a class="text-decoration-none" href="tel:+8801706497553">Mobile: +8801706497553</a></v-list-item-title>
                    
                  </v-list-item-content>
                    <v-list-item-content>
                    <v-list-item-title>Address: Kamarpara, Uttara Dhaka</v-list-item-title>
                  </v-list-item-content>
                  
                  </v-list>
              </v-col>
            </v-row>
            <v-col cols="12" md="8" mb="4" lg="4" height="30">
                <h2 class="text-uppercase mt-5 text-center">Message Me</h2>

              <v-card-text>
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 mr-20"
                  icon
                >
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>
              </v-col>
               <v-col cols="12" md="8" mb="4" lg="4" height="30">
                 <h2 class="text-uppercase text-center mt-5">Message Me</h2>
                  <v-card-text>
                      <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4"
                        icon>
                        <v-icon size="24px">
                          {{ icon }}
                        </v-icon>
                      </v-btn>
                   </v-card-text>
              </v-col>
          </v-row>
        </v-card>
      </v-container>
   </div>
</template>
<script>
export default {
   data() {
      return{
          grops: [
          { title: 'Address' , subtitle: 'Kamarpara, uttara', text: 'Dhaka-1230', icon: 'mdi-map-marker' },
          { text: 'Audience', icon: 'mdi-email' },
          { text: 'Conversions', icon: 'mdi-phone' },
        ],
        icons: [
          'mdi-home',
          'mdi-email',
          'mdi-calendar',
          'mdi-delete',
        ],
      }
    },
}
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>
