import Vue from 'vue'
import Flocking from '@/pages/Flocking'

describe('Flocking.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Flocking)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent)
    // .toEqual('Welcome to Your Vue.js App')
  })
})
