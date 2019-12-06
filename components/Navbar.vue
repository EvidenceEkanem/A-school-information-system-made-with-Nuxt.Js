<template>
<div>
    <div class="jumbotron jumbotron-fluid bg-primary">
      <div class="container">
        <nuxt-link :to="'/'" class="view">
          <h2 class="text-white text-left font-weight-bold">School Information System</h2>
          <h6 class="text-white text-left font-weight-bold">Manage Student Information</h6>
        </nuxt-link>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Navbar'
  }
</script>

<style>
  .view:hover{
    text-decoration: none;
  }
</style>
