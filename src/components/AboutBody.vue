<template>
  <div class="about-body">

    <section class="section gradient-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="mt-5">
              <h4>About Steemtrain.Media</h4>
                <div class="page-next"><span>In Blockchain we Trust</span> </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row vertical-content">
          <div class="col-lg-5 mr-auto">
            <div class="page-title">
              <h2 class="font-weight normal">Built on Steem</h2>
                <p class="text-muted pt-3">Steem is a blockchain-based rewards platform for publishers to monetize content and grow community. It uses an energy efficient consensus algorithm called Delegated-Proof-of-Stake (DPOS) where your interaction with the content is turned into a type of "mining" of new digital currency.</p>
                <p class="text-muted pt-3"><a href="https://steem.io" target="_blank" class="link-color">Click here to visit Steem.io for more info.</a></p>
            </div>            
          </div>          

          <div class="col-lg-6">
            <div class="">
              <img v-bind:src=steemImage alt="Tokens" class="img-fluid mx-auto d-block box-shadow">
            </div>
          </div>
        </div>

        <div class="row pt-5">
          <div class="col-lg-4">
            <div class="about-box">
              <h5 class=""><span class="iq-font-pink">01.</span>Data Is The New Gold </h5>
              <p class="text-muted">Facebook and Google made money by selling user's data to Advertisers. With blockchain technology your data belongs to you.</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="about-box">
              <h5 class=""><span class="iq-font-pink">02.</span>No More Middlemen </h5>
              <p class="text-muted">Interact and directly reward creators of content without an intermediary. Every interaction is recorded onto the blockchain for transparency.</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="about-box">
              <h5 class=""><span class="iq-font-pink">03.</span>Community-based</h5>
              <p class="text-muted">Everyone has a voice as long as it aligns with and respects the values of the community you want to be a part of. Find your community.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>
<script>
import steemImage from '@/assets/img/about.png';

export default {
  name: 'AboutBoyd',
  data() {
    return {
      steemImage,
    }
  },
}
</script>

<style lang="scss">
@import 'src/assets/variables';

.about-body {
  height: 100vh;
  padding-top: 63px;
}

.link-color {
  color: $tertiary;
}

.link-color:hover {
  color: $primary;
}

.box-shadow {
  box-shadow: 6px 7px 35px #d6d6d6
}

</style>