<template>
    <v-app>
        <div>
          <HeroComponent/>
        </div>
        <div>
            <AboutComponent/>
        </div>
    </v-app>
</template>

<script>
import HeroComponent from '@/components/HeroComponent'
import AboutComponent from '@/components/AboutComponent'
export default {
    data() {
    return{
      }
    },
      components:{
      HeroComponent,
      AboutComponent,
      
  },

}
</script>

<style>

</style>