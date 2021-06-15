<template>
  <div class="px-2">
    <!---heropage--->
    <div>
       <Hero/>
    </div>
    <!---heropage--->
    <!---About me--->
    <div>
       <About/>
    </div>
    <!---My skills--->
    <div>
       <Skills/>
    </div>
    <!---My skills--->
    <!---Education & skills--->
    <div>
       <Education/>
    </div>
    <!---Education & skills--->
    <!---My project--->
    <div>
       <Project/>
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
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
export default {
data() {
    return{
      }
    },
      components:{
      Hero,
      About,
      Skills,
      Education,
      Project,
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

