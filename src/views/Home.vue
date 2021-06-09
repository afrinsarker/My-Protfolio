<template>
  <div>
    <div class="app">
      <v-card
        class="portrait"
        img="https://picjumbo.com/wp-content/uploads/young-woman-workingtyping-on-her-laptop-1570x1047.jpg"
        height="500px"
        >
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
      <!---my Details--->
      <v-container>
          <h2 align="center">My Skills</h2>
            <v-container>
              <section class="text-center">
                <div class="row">
                    <v-flex xs12 md3>
                        <v-icon>mdi-home</v-icon>
                        <h5 class="text-center mb-4" color="">Fast</h5>
                        <p>
                          Blazing fast load times is my highest priority
                        </p>
                    </v-flex>
                    <v-flex xs12 md3>
                        <v-icon>mdi-home</v-icon>
                        <h5 class="text-center mb-4">Responsive</h5>
                        <p>
                          My layouts will look perfect on any device, regardless of screen
                          size.
                        </p>
                    </v-flex>
                    <v-flex xs12 md3>
                        <v-icon>mdi-home</v-icon>
                        <h5 class="text-center mb-4">Intuitive</h5>
                        <p class="">
                          Easy to use, intuitive UX/UI out of the box.
                        </p>
                    </v-flex>
                    <v-flex xs12 md3>
                        <v-icon>mdi-home</v-icon>
                        <h5 class="text-center mb-4">Dynamic</h5>
                        <p class="">
                          Website don't have to be boring. I love to give them a life.
                        </p>
                    </v-flex>
                  </div>
              </section>
          </v-container>
              <h2 class="ml-4">Who i am.</h2>
            <v-row>
                  <v-flex xs12 md4>
                      <v-card-text class="ml-4">
                        I am front-end developer that specializes in Vue and Veutify development. Consectetur adipisicing elit, sed do eiusmod tempor. Quisque viverra quam urna, ac commodo augue convallis et. In vel nisl imperdiet, cursus elit ac, efficitur sem. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum.
                      </v-card-text>
                  </v-flex>
                  <v-flex xs12 md2 sm10 lg3>
                      <v-list-item-group
                        class="ml-4">
                        <v-list-item
                          v-for="(item, i) in items"
                          :key="i"
                        >
                            <v-list-item-content class="color">
                              <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content class="color">
                              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                  </v-flex>
                  <v-flex xs10 md4 sm10 lg4 class="ml-4"> 
                    <h2>FRONT-END-DEVELOPER</h2>
                      <small class="ml-2">AFRIN SARKER</small>
                  </v-flex>
              </v-row>
      </v-container>  
      <!---End 2nd row--->
      <!----start pic eidth row---->
       <v-container>
          <v-card
              class="portrait"
              img="https://cdn.techinasia.com/wp-content/uploads/2018/07/business-code-coding-943096.jpg"
              height="500px">
            <v-row>
                <v-col
                    class="text-center mt-15"
                    cols="12" md="6" sm="4">
                    <v-expansion-panels
                        v-model="panel"
                        multiple
                        class="mb-4"
                      >
                        <v-expansion-panel>
                            <v-expansion-panel-header class="text-center">Language</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              I have learned HTML, CSS, JavaScript.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>CSS Framework</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Tailwind CSS <span>or</span> Bootstrap
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Frontend Framework</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Vue JS
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>UI Framework</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Vuetify
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
          </v-card>
       </v-container>
      <!---End--->
      <!---timeline--->
        <v-container >
            
              <h2 class="ml-5">What I Know</h2>
                <v-row>
                  <v-flex xs12 md4 sm10 lg6
                        class="text-center mt-10"
                      >
                      <h2 >My Education</h2>
                
                      <v-timeline
                          align-top
                          dense>
                          <v-timeline-item
                              color="teal lighten-3"
                              small
                            >
                              <v-row class="pt-1">
                                <v-col cols="3">
                                  <strong>2016-2021</strong>
                                </v-col>
                                <v-col>
                                  <strong>Learn Programming</strong>
                                  <div class="caption">
                                    Web App
                                  </div>
                                </v-col>
                              </v-row>
                            </v-timeline-item>
                          <v-timeline-item
                            color="pink"
                            small>
                            <v-row class="pt-1">
                                <v-col cols="3">
                                    <strong>2011-2013</strong>
                                </v-col>
                                <v-col>
                                    <strong>Internation University of Business Agriculture & Technology</strong>
                                    <div class="caption">
                                      BBA
                                    </div>
                                </v-col>
                            </v-row>
                          </v-timeline-item>
                        <!---2nd timeline--->
                        <v-timeline-item
                          color="teal lighten-3"
                          small>
                          <v-row class="pt-1">
                            <v-col cols="3">
                              <strong>2009-2010</strong>
                            </v-col>
                            <v-col>
                              <strong>Dhaka Women's College</strong>
                              <div class="caption mb-2">
                                HSC
                              </div>
                            </v-col>
                          </v-row>
                        </v-timeline-item>
                        <!---2nd timeline--->
                        <v-timeline-item
                          color="pink"
                          small>
                          <v-row class="pt-1">
                            <v-col cols="3">
                              <strong>2009</strong>
                            </v-col>
                            <v-col>
                              <strong>SSc</strong>
                            </v-col>
                          </v-row>
                        </v-timeline-item>
                      </v-timeline>
                  </v-flex>
                  <v-flex xs12 md4 sm10 lg6 class="mt-10">
                     <h2 class="mb-10">My Programming</h2>
                    <div>
                      <v-row>
                        <v-card
                          width="500" flat class="ml-5 mr-5">
                          <v-list disabled>
                            
                            <v-list-item-group color="primary">
                              <v-list-item >
                                <v-list-item-content>
                                    <v-row>
                                      <v-col>
                                        <v-list-item-title>HTML/HTML5</v-list-item-title>
                                          </v-col>
                                          <v-col>
                                        <v-progress-linear
                                          v-model="skill"
                                          color="blue-grey"
                                          height="25"
                                        >
                                          <template v-slot:default="{ value }">
                                            <strong>{{ Math.ceil(value) }}%</strong>
                                          </template>
                                        </v-progress-linear>
                                          </v-col>
                                        </v-row>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col>
                                      <v-list-item-title>CSS/CSS3</v-list-item-title>
                                    </v-col>
                                    <v-col>
                                      <v-progress-linear
                                        v-model="skill"
                                        color="blue-grey"
                                        height="25"
                                      >
                                        <template v-slot:default="{ value }">
                                          <strong>{{ Math.ceil(value) }}%</strong>
                                        </template>
                                      </v-progress-linear>
                                    </v-col>
                                  </v-row>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-row>
                                      <v-col>
                                        <v-list-item-title>JAVASCRIPT</v-list-item-title>
                                      </v-col>
                                      <v-col>
                                        <v-progress-linear
                                          v-model="skill"
                                          color="blue-grey"
                                          height="25"
                                        >
                                          <template v-slot:default="{ value }">
                                            <strong>{{ Math.ceil(value) }}%</strong>
                                          </template>
                                        </v-progress-linear>
                                      </v-col>
                                  </v-row>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-content>
                                    <v-row>
                                      <v-col>
                                        <v-list-item-title>JQUARY</v-list-item-title>
                                      </v-col>
                                      <v-col>
                                        <v-progress-linear
                                          v-model="skill"
                                          color="blue-grey"
                                          height="25"
                                        >
                                          <template v-slot:default="{ value }">
                                            <strong>{{ Math.ceil(value) }}%</strong>
                                          </template>
                                        </v-progress-linear>
                                      </v-col>
                                    </v-row>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          </v-card>
                        </v-row>
                    </div>
                  </v-flex>
                </v-row>
            
        </v-container>
        <!---timeline--->
          <v-container>
            <v-card color="grey darken-4">
         <!-- Section: My projects -->
            <section id="projects" class="text-center">
              <h3 class="my-5"><strong>My projects</strong></h3>

              <v-row>
                <v-col cols="12" lg="4" md="6" mb="4">
                    <v-img
                      height="250"
                      src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                    ></v-img>
                    <h2 class="text-center">Fish Keepers</h2>
                    <div class="text-center mb-5">
                        <v-btn
                          color=""
                          @click="reveal = true">
                          <a href="#">See live</a>
                        </v-btn>
                     </div>
                </v-col>
                <v-col cols="12" lg="4" md="6" mb="4">
                    <v-img
                      height="250"
                      src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                    ></v-img>
                    <h2 class="text-center">Fish Keepers</h2>
                    <div class="text-center mb-5">
                        <v-btn
                          color=""
                          @click="reveal = true">
                          <a href="#">See live</a>
                        </v-btn>
                     </div>
                </v-col>
                <v-col cols="12" lg="4" md="6" mb="4">
                    <v-img
                      height="250"
                      src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                    ></v-img>
                    <h2 class="text-center">Fish Keepers</h2>
                    <div class="text-center mb-5">
                        <v-btn
                          color=""
                          @click="reveal = true">
                          <a href="#">See live</a>
                        </v-btn>
                     </div>
                </v-col>
                <v-col cols="12" lg="4" md="6" mb="4">
                    <v-img
                      height="250"
                      src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                    ></v-img>
                    <h2 class="text-center">Fish Keepers</h2>
                    <div class="text-center mb-5">
                        <v-btn
                          color=""
                          @click="reveal = true">
                          <a href="#">See live</a>
                        </v-btn>
                     </div>
                </v-col>
                <v-col cols="12" lg="4" md="6" mb="4">
                    <v-img
                      height="250"
                      src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                    ></v-img>
                    <h2 class="text-center">Fish Keepers</h2>
                    <div class="text-center mb-5">
                        <v-btn
                          color=""
                          @click="reveal = true">
                          <a href="#">See live</a>
                        </v-btn>
                     </div>
                </v-col>
               <v-col cols="12" lg="4" md="6" mb="4">
                    <v-img
                      height="250"
                      src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                    ></v-img>
                    <h2 class="text-center">Fish Keepers</h2>
                    <div class="text-center mb-5">
                        <v-btn
                          color=""
                          @click="reveal = true">
                          <a href="#">See live</a>
                        </v-btn>
                     </div>
                </v-col>
                <v-col cols="12" lg="4" md="6" mb="4">
                    <v-img
                      height="250"
                      src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                    ></v-img>
                    <h2 class="text-center">Fish Keepers</h2>
                    <div class="text-center mb-5">
                        <v-btn
                          color=""
                          @click="reveal = true">
                          <a href="#">See live</a>
                        </v-btn>
                     </div>
                </v-col>
                <v-col cols="12" lg="4" md="6" mb="4">
                    <v-img
                      height="250"
                      src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                    ></v-img>
                    <h2 class="text-center">Fish Keepers</h2>
                    <div class="text-center mb-5">
                        <v-btn
                          color=""
                          @click="reveal = true">
                          <a href="#">See live</a>
                        </v-btn>
                     </div>
                </v-col>
                <v-col cols="12" lg="4" md="6" mb="4">
                    <v-img
                      height="250"
                      src="https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg"
                    ></v-img>
                    <h2 class="text-center">Fish Keepers</h2>
                    <div class="text-center mb-5">
                        <v-btn
                          color=""
                          @click="reveal = true">
                          <a href="#">See live</a>
                        </v-btn>
                     </div>
                </v-col>
              </v-row>
            </section>
            </v-card>
            </v-container>
          <!---project End--->
          <!---Contact information--->
          <v-container>
            <v-card color="grey darken-4">
             
          <v-row no-gutters>
         
            <v-row>
              <!--Grid column-->
              <v-col cols="4" md="8" mb="4" lg="12">
                <h2 class="text-uppercase ml-5">Contact Me</h2>

                 <v-list dense class="ml-5">
                   <v-list-item-content>
                      <v-list-item-title><a href="mailto:sazidahmed.official@gmail.com" class="text-dark">
                      Email: sazidahmed.official@gmail.com</a></v-list-item-title>
                      
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-title><a href="tel:+8801680800810" class="text-dark">Mobile: +8801680800810</a></v-list-item-title>
                    
                  </v-list-item-content>
                   <v-list-item-content>
                    <v-list-item-title>Address: Kamarpara, Uttara Dhaka</v-list-item-title>
                  </v-list-item-content>
                  
                 </v-list>
              </v-col>
            </v-row>
 
        <v-col cols="4" md="8" mb="4" lg="4" height="30">
            <h2 class="text-uppercase mt-5">Message Me</h2>

     <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        </v-col>
       
        <v-col cols="4" md="8" mb="4" lg="4" height="30">
            <h2 class="text-uppercase mt-5">Message Me</h2>

        <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                icon
              >
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
        <footer class="bg-light text-center text-lg-left">
          <!-- Copyright -->
          <div
            class="text-center p-3"
            style="background-color: rgba(0, 0, 0, 0.2);"
          >
            © 2021 Copyright:
            <a class="text-dark ma-4 " href="https://mdbootstrap.com/"
              >Afrin Sarker</a
            >
          </div>

        </footer>
    </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { text: 'LOCATION', subtitle: 'Bangladesh' },
        { text: 'EMAIL', subtitle: 'afrinsarker91@gmail.com' },
        { text: 'PHONE', subtitle: '706497553' },
        { text: 'DISCORD', subtitle: 'afrinsarker' },
      ],
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
      
      skill: 95,
      panel: [0, 1],
    }),
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
