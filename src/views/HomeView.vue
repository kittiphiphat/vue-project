<template>
  <Navbars/>
  <SlidePage/>
  <!-- อันที่1 -->
  <div class="navmenu" style="max-width:100%; margin-top: -3rem;">
    <h1 class="headname">ข่าวสุขภาพ</h1> <br>
  </div>  




<div class="container px-4 py-5" id="custom-cards">

  <div class="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5" >
    <div class="col" v-for="(i,index) in NewsPage_lsit" :key="index">
      <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
        <img :src="i.coverimage" :alt="name" style="width:100%; border-radius: 10px 10px 10px 10px;">
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{ i.name }}</h3>
          <ul class="d-flex list-unstyled mt-auto">
            <li class="me-auto">
             <router-link :to="`/news/${i.id}`"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform: ;msFilter:;"><path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path><path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg></router-link>
             
            </li>
            <li class="d-flex align-items-center me-3">
              <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
              <small>Earth</small>
            </li>
            <li class="d-flex align-items-center">
              <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
              <small>3d</small>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

<FooterPage/>

</template>

<script setup>
import Navbars from '../components/HeaderPage.vue'
import FooterPage from '../components/FooterPage.vue'
import SlidePage from '../views/SlidePage.vue'

import { useRoute } from 'vue-router'
import { ref } from 'vue';

import { NewsPage_menu } from '../stores/counter';

const allmenu = NewsPage_menu();
const NewsPage_lsit = ref(allmenu.NewsPage_data);

const route = useRoute()

console.log(route.params.id)
// import { ref } from 'vue';

// import { useArt_listStore } from '@/stores/counter.js';

// const all_Art = useArt_listStore();
// const list = ref(all_Art.Art_list);


// import { useGame_listStore } from '@/stores/counter.js';

// const all_game = useGame_listStore();
// const list_game = ref(all_game.Game_list);


// import { usePhotography_listStore } from '@/stores/counter.js';

// const all_Photography = usePhotography_listStore();
// const list_Photography = ref(all_Photography.Photography_list);
</script>


<style scoped>
  
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }
      
   .headname{
    color: #fff;
    justify-content: center;

    max-width: 100%;
    padding: 0.8rem;
    margin-left: 10rem;
    
   }

   .navmenu{
    background-image: linear-gradient(90deg, #276A87 45%, #8BCCE8 100%);
    height: 120px;
   }


   
</style>