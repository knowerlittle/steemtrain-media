<template>
  <div class="start">
    <StartBody/>
  </div>
</template>

<script>
import StartBody from '@/components/StartBody';

export default {
  name: 'StartPage',
  components: {
    StartBody,
  },
};
</script>

<style scoped lang="scss">
.start {
  height: 100vh;
}

</style>
