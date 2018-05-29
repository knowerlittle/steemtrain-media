<template>
  <div class="home-body">
    <section class="section">
      <div class="container">

        <div class="row">
          <div class="col-lg-12">
            <div class="portfolioFilter text-center">
              <div class="portfolioFilter text-center active">
                <a v-for="link in menu" 
                  v-bind:key="link.id" 
                  v-bind:class="{ 'current': isSelected(link)}"
                  @click="selectItem(link)">
                  {{ link.name }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="port portfolio-masonry mb-3">
          <transition-group tag="div" name="list" class="portfolioContainer row">
            <div class="col-lg-4 col-md-6 margin"
              v-for="platform of filteredPlatforms"
              v-bind:key="platform.id">
              <a :href=platform.link target="_blank">
                <div class="portfolio-box drop-shadow">
                  <div class="portfolio-box-img">
                    <img v-bind:src=platform.img class="img-fluid" alt="member-image">
                  </div>
                  <div class="gallary-title text-center">
                    <h6><a href="" target="_blank">{{ platform.name }}</a></h6>
                    <span>{{ platform.description }}</span>
                  </div>
                </div>
               </a>
             </div>
          </transition-group>
          </div>
        </div>
    </section>

     <!-- <Footer/> -->
  </div>

</template>

<script>
import platforms from '@/components/menuSelection.js';

export default {
  name: 'HomeBody',

  data() {
    return {
      currentSelection: 'All',
      menu: [
        { id: 1, name: 'All'},
        { id: 2, name: 'Video'},
        { id: 3, name: 'Photo'},
        { id: 4, name: 'Blog'},
        { id: 5, name: 'Audio'},
        { id: 6, name: 'Forum'},
        { id: 7, name: 'Meme'},
        { id: 8, name: 'Funding'},
      ],
      platforms,
      filteredPlatforms: {},
    }
  },

  mounted() {
    this.createNewCopy();
  },

  methods: {
    createPlatformsCopy() {
      const platforms = Object.assign({}, this.platforms);
      return platforms;
    },
    selectItem(platform) {
      this.currentSelection = platform.name;
      this.filteredPlatforms = this.createNewCopy();
    },
    isSelected({ name }) {
      return this.currentSelection === name;
    },
    createNewCopy() {
      return this.filteredPlatforms = this.currentSelection === 'All' ? 
        this.createPlatformsCopy() : this.filterPlatforms();
    },
    filterPlatforms() {
      const newList = {};
      Object.keys(platforms).map(key => {
        const value = platforms[key];
        const isValid = value.tag === this.currentSelection;
        if (isValid) {
          const newPlatfrom = {
            [key] : value, 
          };
          return Object.assign(newList, newPlatfrom);
        } 
      });
      return newList;
    },
  },

};
</script>

<style scoped lang="scss">
@import 'src/assets/home';

.home-body {
  height: 100vh;
}

.drop-shadow {
  box-shadow: 0px 2px 18px -7px #888888;
}

.portfolioContainer {
  display: flex;
  justify-content: center;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active {
  transition: all 0.5s;
}

 .list-leave-active {
  transition: all 0s;
 }

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  position: absolute;
  top: 50%;
  opacity: 0;
}


</style>