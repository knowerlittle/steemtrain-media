<template>
  <div class="contact">
    <ContactBody/>
  </div>
</template>

<script>
import ContactBody from '@/components/ContactBody';

export default {
  name: 'ContactPage',
  components: {
    ContactBody,
  },
};
</script>

<style scoped lang="scss">
.about {
  height: 100vh;
}
</style>
