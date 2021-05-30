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
          cols="12"
        >
          <h1 class="display-1 font-weight-thin">
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
                <h5 class="text-center mb-4" color="orange lighten-3">Fast</h5>
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
      <h1 class="ml-4">Who i am.</h1>
      <v-row>
        <v-flex xs12 md4>
          <v-card-text class="ml-4">
            I am front-end developer that specializes in Vue and Veutify development. Consectetur adipisicing elit, sed do eiusmod tempor. Quisque viverra quam urna, ac commodo augue convallis et. In vel nisl imperdiet, cursus elit ac, efficitur sem. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum.
          </v-card-text>
  
        </v-flex>
        <v-flex xs12 md3 sm4 lg6>
        
        <v-list-item-group
        >
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
        <v-flex xs12 md5>

       
        <h1>FRONT-END-DEVELOPER</h1>
          <small>AFRIN SARKER</small>

        </v-flex>
      </v-row>
    </v-container>  
    <!---End 2nd row--->
    <!----start pic eidth row---->
    <v-container>
     <v-card
        class="portrait"
        img="https://cdn.techinasia.com/wp-content/uploads/2018/07/business-code-coding-943096.jpg"
        height="500px"
    >
     <v-row>
        <v-col
          class="text-center mt-15"
          cols="12" md="6" sm="4"
        >
         <v-expansion-panels
            v-model="panel"
            multiple
            class="mb-4"
          >
          <v-expansion-panel>
            <v-expansion-panel-header>Web Development</v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Design</v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Marketing</v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Support</v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
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
       <v-card color="grey darken-4">
         <h1 class="ml-5">What I Know</h1>
          <v-row>
            <v-col
              class="text-center mt-10"
              cols="12" md="6" sm="4"
            >
            <h2 >My Education</h2>
      
            <v-timeline
                align-top
                dense
              >
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
                  small
                >
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
              small
            >
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
              small
            >
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
        </v-col>
        <v-col
          class="mt-10 "
          cols="12" md="6" sm="4"
        >
        <h2>My Skills</h2>
        <h3>Programming</h3>
         <div>
      <v-row
      
      >
      <v-card
       width="500" flat>
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
        </v-col>
     </v-row>
       </v-card>
     </v-container>
      <!---timeline--->

      <!---Contact information--->
      <v-container>
         <v-card color="grey darken-4">
             <v-row>
        <v-col
          class="text-center mt-10"
          cols="12" md="8" sm="4" lg="6"
        >
         <h1 class="display-1 mr-15 font-weight-thin">WhAT CAN I DO FOR YOU</h1>
         <P class="ma-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel est interdum, pharetra magna ac, facilisis ante. Fusce eu finibus magna. Sest interdum, pharetra magna ac, facilisis ante. Fusce eu finibus magna.</P>
        <h3 class="display-1 mr-15 font-weight-thin mt-10">SEND ME A MESSAGE</h3>

        <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="8"
    >
        <v-card-text>
          <v-text-field
            v-model="last"
            label="Name"
            solo-inverted
          ></v-text-field>
          <v-text-field
            v-model="last"
            label="Email"
            solo-inverted
          ></v-text-field>
          <v-text-field
            v-model="last"
            label="Subject"
            solo-inverted
          ></v-text-field>
          <v-textarea
              filled
              label="Message"
              shaped
        ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="orange"
            @click="submit"
          >
            SEND MESSAGE
          </v-btn>
        </v-card-actions>
    </v-col>
  </v-row>
        </v-col>
        <v-col
          class="text-center mt-10"
          cols="12" md="6" sm="4"
        >
         <h1 class="display-1 ml-15 font-weight-thin">SOCIAL CONTACT</h1>
            <v-row
                  justify="center"
                  class="mr-15"
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

      <v-row align="center" justify="center" class="mt-10">
      <v-list-item-group
        two-line
      >
        <v-list-item
          v-for="(grop, i) in grops"
          :key="i"
        >
          <v-list-item-icon 
           >
            <v-icon large
              color="amber darken-3" v-text="grop.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title color="orange" v-text="grop.title"></v-list-item-title>
            <v-list-item-subtitle v-text="grop.subtitle"></v-list-item-subtitle>
            <v-list-item-subtitle v-text="grop.text"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      </v-row>
         </v-col>
          </v-row>
         </v-card>
      </v-container>
      <!---Contact information--->

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
      skill: 95,
      knowledge: 33,
      power: 78,
      
      
      panel: [0, 1],
    }),
  }
</script>
<style scoped>
 h2 {
    margin: 15px;
    padding-top: 10px;
    color: coral;
    font-size: 30px;
}
h1 {
  color: coral;
  font-size: 35px;
  margin-bottom: 10px;
  
}
h5.text-center.mb-4 {
    font-size: 20px;
    color: orange;
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
