<template>
  <div id="app">
    
    <router-view/>

     <!-- <paginate
        :page-count="20"
        :margin-pages="2"
        :page-range="4"
        :initial-page="0"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link-item'"
        :prev-class="'prev-item'"
        :prev-link-class="'prev-link-item'"
        :next-class="'next-item'"
        :next-link-class="'next-link-item'"
      ></paginate> -->

  </div>

  
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
    background-color: #d8e9f5;
    margin: 0;
  }
  
</style>
