<template>
  <div>
    <!----Experience---->
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>