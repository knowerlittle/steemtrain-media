<template>
  <div class="start-body">

    <section class="section gradient-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="mt-5">
              <h4>How To Start</h4>
                <div class="page-next"><span>Find out how to open a STEEMIT account and turn crypto into cash</span> </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section ">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">

            <article class="post">
              <div class="post-header">
                <h2 class="post-title">
                  1. Open a Steemit Account
                </h2>
              </div>

              <div class="post-content">
                <p>This account will be used across all of the platforms listed on the first page.</p>
                <p><b>If you're new to crypto:</b> <a href="https://steemit.com" target="_blank">Click here to visit https://steemit.com/ to signup.</a></p>
                <p><i>NOTE: Account verification can take between one to two weeks</i></p>
                <p><b>If you have crypto: </b><a href="https://blocktrades.us/create-steem-account" target="_blank">Click here to visit Blocktrades to buy a Steem account immediately.</a></p>
              </div>
            </article>

            <article class="post">
              <div class="post-header">
                <h2 class="post-title"> 
                  2. #introduceyourself & Post Content
                </h2>
              </div>

              <div class="post-content">
                <p>
                  Once you've officially signed up with Steemit say hello and post in 
                    <a href="https://steemit.com/created/introduceyourself" target="_blank">#introduceyourself.</a> 
                  Let the community know who you are what you're thinking of bringing to the table.
                </p>
                <p>Start posting content!</p>
              </div>
            </article>

            <article class="post">
              <div class="post-header">
                <h2 class="post-title">3. Turn Steem & SBD into Bitcoin</a></h2>
              </div>

              <div class="post-content">
                <p>
                  Once people upvote your content you'll start earning either Steem or SBD (Steem-Backed-Dollars).
                  You'll learn the basics of trading here as you'll need to convert them into Bitcoin <i>(or one of the cryptos supported by Coinbase)</i> before you can change it into your local currency. 
                </p>
                <p>a) Sign up to the crypto exchange BINANCE.</i> <a href="https://www.binance.com/?ref=10130710" target="_blank">Click here to sign up to BINANCE.</a></p>
                <p>b) Transfer your Steem/SBD from your Steemit wallet to your BINANCE trading account.</p>
                <p>c) Convert your Steem/SBD into Bitcoin (BTC).</p>
                <p class="align-image">
                  <img class="gif-size" v-bind:src=steemitCash alt="steemit cash">
                  <img class="gif-size" v-bind:src=bitcoinJump alt="bitcoin jump">
                  <img class="gif-size" v-bind:src=steemitCash alt="steemit cash">
                </p>
              </div>
            </article>


            <article class="post">
              <div class="post-header">
                <h2 class="post-title">4. Turn Bitcoin into Cash</h2>
              </div>

              <div class="post-content">
                <p>a) Sign up to COINBASE. <a href="https://www.coinbase.com/join/58c2b27c4bb3723c7b7fe09b" target="_blank"> Click here to sign up to COINBASE.</a></p>
                <p>b) Move your Bitcoin from your BINANCE account to your COINBASE account.</p>
                <p><b>If you're in the States,</b> add your US Bank Account and cash out to it.</p>
                <p><b>If you in the UK</b>, it's recommended to cash out to a Euro bank account because it's cheaper and faster</p>
                <p><b>NOTE:</b><i> If you don't have a Euro bank account REVOLUT offers one for free. <a href="https://www.revolut.com/r/noahb3nz" target="_blank">Click here to open a free REVOLUT bank account</a></i> </p>
              </div>
            </article>

            <article class="post">
              <div class="post-header">
                <h2 class="post-title"><a href="blog-single.html">Congratulations</a></h2>
              </div>

              <div class="post-content">
                <p>You've succesfully turned your precious crypto into boring cash but sometimes we do need to eat. :-)</p>
                <p>
                  The process listed above may seem quite long in the beginnning. It can be difficult to grasp the ecosystem of this new economy.
                  There are quite a few things to sign up to and each step has its own learning curve.
                  All the platforms listed above will have their own help and explainer section if you would like to learn more. 
                  Steemit is also an extremely useful resource and you can ask people questions directly.
                </p>
                <p>We hope you enjoy and learn more about the new economy that blockchain has to offer.</p>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import steemitCash from '@/assets/img/steemit-cash.gif';
import bitcoinJump from '@/assets/img/bitcoin-jump.gif';

export default {
  name: 'StartBody',

  data() {
    return {
      steemitCash,
      bitcoinJump,
    }
  },
}
</script>

<style lang="scss">
@import 'src/assets/variables';
.align-image {
  text-align: center;
}

.gif-size {
  width: 10%;
}


.gradient-bg {
	background: rgb(160,216,239); /* Old browsers */
	background: -moz-linear-gradient(top, rgba(160,216,239,1) 0%, rgba(160,216,239,1) 0%, rgba(160,216,239,1) 0%, rgba(221,241,249,1) 49%, rgba(254,255,255,1) 95%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, rgba(160,216,239,1) 0%,rgba(160,216,239,1) 0%,rgba(160,216,239,1) 0%,rgba(221,241,249,1) 49%,rgba(254,255,255,1) 95%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, rgba(160,216,239,1) 0%,rgba(160,216,239,1) 0%,rgba(160,216,239,1) 0%,rgba(221,241,249,1) 49%,rgba(254,255,255,1) 95%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a0d8ef', endColorstr='#feffff',GradientType=0 ); /* IE6-9 */
}

.start-body {
  height: 100vh;
  padding-top: 63px;
}

.post {
    margin: 0 0 45px;

    a {
      color: $tertiary;
    }

    a:hover {
      color: $primary;
    }
}

.post + .post {
    // border-top: 1px solid rgba(238, 238, 238, .7);
    border-top: 1px solid rgba(230, 238, 238, 1);
    padding-top: 30px;
}

.post-preview {
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    margin: 0 0 25px;
}

.post-preview:hover {
    opacity: .7;
}

.post-header {
    margin: 0 0 30px;
}

.post-title {
    font-size: 20px;
    margin: 0 0 10px;
}

.post-title a {
    color: #333;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}

.post-title a:hover {
    color: #ff5858;
}

.post-meta {
    list-style: none;
    padding: 0;
    margin: 0;
    opacity: .7;
}

.post-meta > li {
    display: inline-block;
    margin-right: 30px;
}

.post-meta > li:last-child {
    margin-right: 0;
}

.post .post-meta a,
.post-meta a {
    color: #888;
}

.post-meta a:hover,
.post-meta a:focus,
.post-more a:hover {
    color: #ff5858;
}

.post-more a {
    font-size: 14px;
    color: #333;
    font-weight: 500;
    text-decoration: underline !important;
}

.post-tags {
    margin: 40px 0 0;
}

.post-tags a {
    background-color: #f5f5f5;
    border-radius: 2px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 7px;
    color: #303133;
    padding: 7px 8px 5px 10px;
    margin: 5px 10px 5px 0;
}

.post-tags a:hover,
.post-tags a:focus {
    background: #0db3e3;
    color: #fff;
}

.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
    margin: 30px 0 20px;
}

.post-content h1:first-child,
.post-content h2:first-child,
.post-content h3:first-child,
.post-content h4:first-child,
.post-content h5:first-child,
.post-content h6:first-child {
    margin-top: 0;
}

.post-content ul,
.post-content ol {
    margin-left: 40px;
}

/**********************
    Blog detals
**********************/

.post blockquote{
    background-color: #f6f6f6;
    color: #5a5a5a;
    font-size: 16px;
    line-height: 26px;
    padding: 20px 50px 20px;    
    border-radius: 5px;
}

.page-title h3 {
    line-height: 50px;
    margin-top: 30px;
    font-weight: 300;
    letter-spacing: 1px;
}

 .media img {
    width: 52px;
    height: 52px;
}

.media-heading {
    font-size: 16px;
}

.media-body h6{
    font-size: 13px;
}

.media-body p{
    line-height: 24px;
}
</style>