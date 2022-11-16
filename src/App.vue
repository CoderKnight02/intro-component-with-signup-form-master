
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
  <div class="main">

    <HeaderComp></HeaderComp>     


    <FormComp></FormComp>

  </div>
</template>

<style src="./assets/sass/styles.scss" lang="scss">
</style>

