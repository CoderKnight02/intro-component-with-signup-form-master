
<script>
import FormComp from './components/FormComp.vue';
import HeaderComp from './components/HeaderComp.vue';

  export default{

    components: {
      FormComp,
      HeaderComp
    }
}

</script>

<template>
  <main class="main">

    <HeaderComp></HeaderComp>     


    <FormComp></FormComp>

  </main>
</template>

<style src="./assets/sass/styles.scss" lang="scss">
</style>

