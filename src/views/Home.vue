<template>
  <div class="home">
    <HomeBanner/>
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner';

export default {
  name: 'home',
  components: {
    HomeBanner,
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
}
</style>
