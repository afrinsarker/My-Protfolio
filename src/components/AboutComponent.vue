<template>
  <div>
    <v-container>
        <h2 class="ml-4">WHO I AM.</h2>
        <h5 class="ml-4">AFRIN SARKER</h5>
        <small class="ml-4 block">FRONT-END-DEVELOPER</small>   
        <v-row>
            <v-flex xs12 md4 lg6>
                <v-card-text class="ml-4">
                I am front-end developer that specializes in Vue and Veutify development. Consectetur adipisicing elit, sed do eiusmod tempor. Quisque viverra quam urna, ac commodo augue convallis et. In vel nisl imperdiet, cursus elit ac, efficitur sem. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum.
                </v-card-text>
            </v-flex>
            <v-flex xs12 md2 sm10 lg5>
                <v-list-item-group
                class="ml-4">
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i">
                    <v-list-item-content >
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content >
                        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-flex>
        </v-row>
    </v-container>
    <!---End 2nd row--->
  </div>
</template>

<script>
export default {
    data() {
        return {
        items: [
        { text: 'LOCATION', subtitle: 'Bangladesh' },
        { text: 'EMAIL', subtitle: 'afrinsarker91@gmail.com' },
        { text: 'PHONE', subtitle: '01706497553' },
        { text: 'DISCORD', subtitle: 'afrinsarker' },
      ],
      }
    },

}
</script>

<style>

</style>