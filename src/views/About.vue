<template>
  <div class="about">
    <AboutBody/>
  </div>
</template>

<script>
import AboutBody from '@/components/AboutBody';

export default {
  name: 'AboutPage',
  components: {
    AboutBody,
  },
};
</script>

<style scoped lang="scss">
.about {
  height: 100vh;
}

</style>
