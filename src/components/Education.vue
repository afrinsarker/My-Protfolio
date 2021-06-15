<template>
  <div>
    <!---Education & skills--->
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
                        
                        <v-list-item-group color="">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>