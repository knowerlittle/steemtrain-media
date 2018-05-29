<template>
  <div class="footer-body">
    <footer class="footer-alt">
      <div class="container">
        <p class="small-text">Steemtrain.media © 2018 by <a href="https://reinvention.io" target="_blank" class="text-muted">REVINVENTION.io</a></p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">

.small-text {
  font-size: 11px !important;
  letter-spacing: 1px;
  text-align: center;
  padding-top: 1%;
  padding-bottom: 1%;
  margin: 0 auto;
}

.footer-alt {
    border-top: 1px solid #ddd;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: white;
}

</style>