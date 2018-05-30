<template>
  <div class="contact-body">
    
    <section class="section gradient-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="mt-5">
              <h4>Contact Us</h4>
              <div class="page-next"><span>We love feedback</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-info">
          <p class="text-muted">steemtrain@protonmail.com</p>
          <img v-bind:src="emailGif" alt="Email" class="img-fluid mx-auto d-block blox-shadow">
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import emailGif from '@/assets/img/emailGif.gif';

export default {
  name: 'ContactBody',
  data() {
    return {
      emailGif,
    }
  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/variables';

.contact-body {
  height: 100vh;
  padding-top: 63px;
}

.contact-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>