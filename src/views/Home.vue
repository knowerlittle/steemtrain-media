<template>
  <div class="home">
    <HomeBanner/>
    <HomeBody/>
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner';
import HomeBody from '@/components/HomeBody';

export default {
  name: 'home',
  components: {
    HomeBanner,
    HomeBody,
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
}
</style>
