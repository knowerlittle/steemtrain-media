<template>
  <div class="home-banner">
    <section class="home-height">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="home-title text-center">
									<h3>Social Platforms</h3>
									<h3>built on the</h3>
									<h1><span>Steem Blockchain</span></h1>
									<h2>Create.</h2>
									<h2>Interact.</h2>
									<h2>Earn Money.</h2>
									<h2>
										<p></p>
										<p><a class="start-link" href="start.html">How Do I Start?</a></p>
									</h2>
									<!-- <iframe width="100%" height="300" src="https://emb.d.tube/#!/knowerlittle/hbuhsx2n" frameborder="0" allowfullscreen></iframe> -->
								</div>
							</div>
						</div>
					</div>
        </div>
    	</div>
		</section>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'src/assets/variables';

.home-height {
	border-bottom: 1px solid #f3f3f3;
	border-top: 1px solid #f2f2f2;
	padding: 100px 0px 20px 0px;
}

.home-center {
	display: table;
	width: 100%;
	height: 100%;
}

.home-desc-center {
	display: table-cell;
	vertical-align: middle;
}

.home-title h2 {
	font-size: 28px;
	line-height: 42px;
	font-weight: unset;
	text-transform: capitalize;
	max-width: 730px;
	margin: 0 auto;
}

.home-title span {
	background: $primary;
	font-weight: 500;
	color: #fff;
	padding: 2px 12px;
	border-radius: 10px;
	box-shadow: 0px 0px 15px #888888;
}

</style>
