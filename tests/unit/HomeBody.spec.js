import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { shallowComponent } from './helpers';
import HomeBody from '@/components/HomeBody.vue';

chai.use(sinonChai);

describe('HomeBody.vue', () => {

  describe('general', () => {
    it('has a name property', () => {
      const wrapper = shallowComponent(HomeBody);
      expect(wrapper.$options.name).to.equal('HomeBody');
    });
  });

  describe('data', () => {
    it('currentSelection: is set to "All" ', () => {
      const wrapper = shallowComponent(HomeBody);
      expect(wrapper.currentSelection).to.equal('All');
    });

    it('menu: has 8 options', () => {
      const wrapper = shallowComponent(HomeBody);
      const menuLength = wrapper.menu.length;
      expect(menuLength).to.equal(8);
      expect(wrapper.menu[0].name).to.equal('All');
      expect(wrapper.menu[1].name).to.equal('Video');
      expect(wrapper.menu[2].name).to.equal('Photo');
      expect(wrapper.menu[3].name).to.equal('Blog');
      expect(wrapper.menu[4].name).to.equal('Audio');
      expect(wrapper.menu[5].name).to.equal('Forum');
      expect(wrapper.menu[6].name).to.equal('Meme');
      expect(wrapper.menu[7].name).to.equal('Funding');
    });

    it('platform: contains 9 options', () => {
      const wrapper = shallowComponent(HomeBody);
      const optionsCount = Object.keys(wrapper.platforms);
      expect(optionsCount.length).to.equal(9);
      expect(wrapper.platforms.dLive.name).to.equal('DLive.io');
      expect(wrapper.platforms.dTube.name).to.equal('D.Tube');
      expect(wrapper.platforms.steepshot.name).to.equal('Steepshot.io');
      expect(wrapper.platforms.dSound.name).to.equal('DSound.audio');
      expect(wrapper.platforms.steemit.name).to.equal('Steemit.com');
      expect(wrapper.platforms.busy.name).to.equal('Busy.org');
      expect(wrapper.platforms.utopian.name).to.equal('Utopian.io');
      expect(wrapper.platforms.dMania.name).to.equal('dMania.lol');
      expect(wrapper.platforms.fundition.name).to.equal('Fundition.io');
    });

    it('filteredPlatforms: is an empty array', () => {
      expect(HomeBody.data().filteredPlatforms).to.deep.equal({});
    });

  });

  describe('mounted', () => {
    it('has a mounted hook', () => {
      const wrapper = shallowComponent(HomeBody);
      expect(typeof HomeBody.mounted).to.equal('function');
      expect(wrapper.filteredPlatforms).to.deep.equal(wrapper.platforms);
    });
  });

  describe('methods', () => {
    it('createPlatformsCopy: creates a new copy of platforms', () => {
      const wrapper = shallowComponent(HomeBody);
      const platformCopy = wrapper.createPlatformsCopy();
      expect(platformCopy).to.deep.equal(wrapper.platforms);
    });

    it('selectItem: Assigns selected item to "currentSelection" and creates filteredPlatforms', () => {
      const wrapper = shallowComponent(HomeBody);
      wrapper.currentSelection = 'Video';
      wrapper.selectItem({ name: 'Photo' });
      const platformsCount = Object.keys(wrapper.filteredPlatforms);

      expect(wrapper.currentSelection).to.equal('Photo');
      expect(platformsCount.length).to.equal(1);
    });

    it('isSelected: returns boolean based on currentSelection', () => {
      const wrapper = shallowComponent(HomeBody);
      wrapper.currentSelection = 'Video';
      const result = wrapper.isSelected({ name: 'Video' });
      expect(result).to.equal(true);
    });

    it('createNewCopy: calls createPlatformsCopy() if currentSelection is "All" ', () => {
      const wrapper = shallowComponent(HomeBody);
      sinon.spy(wrapper, 'createPlatformsCopy');
      wrapper.createNewCopy();
      expect(wrapper.createPlatformsCopy).to.have.been.calledOnce;
    });

    it('createNewCopy: calls filterPlatforms() if currentSelection is not "All" ', () => {
      const wrapper = shallowComponent(HomeBody);
      sinon.spy(wrapper, 'filterPlatforms');
      wrapper.currentSelection = 'Video';
      wrapper.createNewCopy();
      expect(wrapper.filterPlatforms).to.have.been.calledOnce;
    });

    it('filterPlatforms: creates a new copy of filtered options', () => {
      const wrapper = shallowComponent(HomeBody);
      wrapper.currentSelection = 'Video';
      const result = wrapper.filterPlatforms();
      const platformsCount = Object.keys(result);

      expect(platformsCount.length).to.equal(2);
    });
  });
});