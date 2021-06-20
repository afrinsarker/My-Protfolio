<template>
  <div class="px-2">
    <!---heropage--->
    <div>
       <HeroComponent/>
    </div>
    <!---heropage--->
    <!---About me--->
    <div>
       <AboutComponent/>
    </div>
    <!---My skills--->
    <div>
       <SkillsComponent/>
    </div>
    <!---My skills--->
    <!---Education & skills--->
    <div>
       <ExperienceComponent/>
    </div>
    <!---Experience--->
    <div>
       <EducationComponent/>
    </div>
    <!---End Experience--->
    <!---Education & skills--->
    <!---My project--->
    <div>
       <ProjectComponent/>
    </div>
    <!---My project--->
    <!---Footer--->
    <div>
       <Footer/>
    </div>
    <!---Footer--->
    <footer class=" text-center text-lg-left">
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);">
        © 2021 Copyright:
        <a class=" ma-4 " href="https://mdbootstrap.com/">Afrin Sarker</a>
      </div>
    </footer>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent'
import AboutComponent from '@/components/AboutComponent'
import SkillsComponent from '@/components/SkillsComponent'
import ExperienceComponent from '@/components/ExperienceComponent'
import EducationComponent from '@/components/EducationComponent'
import ProjectComponent from '@/components/ProjectComponent'
import Footer from '@/components/Footer'
export default {
data() {
    return{
      }
    },
      components:{
      HeroComponent,
      AboutComponent,
      SkillsComponent,
      ExperienceComponent,
      EducationComponent,
      ProjectComponent,
      Footer
  },
}
</script>
<style>
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

