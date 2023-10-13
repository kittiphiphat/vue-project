<template>

  <Navbars/>
 
  <slidepage/>

<!-- ข่าวสุขภาพ -->

<div style="margin-top: -3rem;">
  <News_list/>
</div>

<!-- footer -->

<Footer></Footer>

</template>

<script setup>

import Navbars from '../components/HeaderPage.vue';

import slidepage from '../views/SlidePage.vue';

import News_list from '../views/News_list.vue';

import Footer from '../components/FooterPage.vue';

defineProps({
text_title: {
  type: String,
  required: true
},
ex_box: {
  type: String,
  required: true
}
})
</script>

<style>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  background-color: #276a87;
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 3rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 5;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 30rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */
.carousel-inner{
  background-color: #276a87;
}

</style>
