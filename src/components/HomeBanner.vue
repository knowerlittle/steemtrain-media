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
										<p><router-link to="/start" class="flashit">How Do I Start?</router-link></p>
									</h2>
									<div class="video-frame">
										<iframe class="video" 
													  src="https://emb.d.tube/#!/knowerlittle/hbuhsx2n" 
														frameborder="0" 
														allowfullscreen>
										</iframe>
									</div>
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

.flashit{
  color:$secondary;
	-webkit-animation: flash linear 10s infinite;
	animation: flash linear 10s infinite;
	font-weight: 500;
}
@-webkit-keyframes flash {
	// 0% { opacity: 1; } 
	50% { opacity: .5; } 
	100% { opacity: 1; }
}
@keyframes flash {
	// 0% { opacity: 1; } 
	50% { opacity: .5; } 
	100% { opacity: 1; }
}

.home-banner {
	background: rgb(160,216,239); /* Old browsers */
	background: -moz-linear-gradient(top, rgba(160,216,239,1) 0%, rgba(160,216,239,1) 0%, rgba(160,216,239,1) 0%, rgba(221,241,249,1) 49%, rgba(254,255,255,1) 95%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, rgba(160,216,239,1) 0%,rgba(160,216,239,1) 0%,rgba(160,216,239,1) 0%,rgba(221,241,249,1) 49%,rgba(254,255,255,1) 95%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, rgba(160,216,239,1) 0%,rgba(160,216,239,1) 0%,rgba(160,216,239,1) 0%,rgba(221,241,249,1) 49%,rgba(254,255,255,1) 95%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a0d8ef', endColorstr='#feffff',GradientType=0 ); /* IE6-9 */
}

.video-frame {
	width: 100%;
	height: 300px;
	max-width: 534px;
	margin: 0 auto;
}

.video {
	width: 100%;
	height: 100%;
}

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
	line-height: 1.5;
	background: $primary;
	font-weight: 500;
	color: #fff;
	padding: 0px 15px 10px 15px;
	border-radius: 3px;
	letter-spacing: 3px;
  text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
}

// .home-title span {
//   -webkit-box-sizing: content-box;
//   -moz-box-sizing: content-box;
//   box-sizing: content-box;
//   border: none;
//   font: normal 50px/normal "Chau Philomene One", Helvetica, sans-serif;
//   color: rgb(51, 51, 51);
//   text-align: center;
//   -o-text-overflow: clip;
//   text-overflow: clip;
//   letter-spacing: 3px;
//   text-shadow: -3px 0 1px rgb(30,242,241) , 3px 0 1px rgb(246,5,10) ;
// }

</style>
