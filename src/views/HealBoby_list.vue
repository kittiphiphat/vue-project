<template>
  <!-- อันที่1 -->
  <div class="navmenu" style="max-width:100%;">
    <h1 class="headname">เคล็ดลับสุขภาพ</h1> <br>
  </div>  
  <div class="album py-0 bg-body-tertiary" style="margin-top: -3rem;">        
  <div class="container" style="padding: 2rem;">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col" style="padding: 1rem;" v-for="(i,index) in HealBoby_lsit" :key="index">
        <div class="card shadow-sm">
          <img :src="i.coverimage" :alt="name" style="width:100%; border-radius: 10px 10px 0px 0px;">
          <div class="card-body">
            <p class="card-text">{{ i.name }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-m btn-outline-secondary">View</button>
                 
              </div>
              <small class="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="col" style="padding: 1rem;">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-m btn-outline-secondary">View</button>
                 
              </div>
              <small class="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div> -->

    </div>
  </div>   
</div>
  
</template>
  
<script setup>

import { ref } from 'vue';
import { HealBoby_menu } from '../stores/counter.js';

const allmenu = HealBoby_menu();
const HealBoby_lsit = ref(allmenu.HealBoby_data);

  defineProps({
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  })
  
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