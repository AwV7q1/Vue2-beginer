import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class Hello extends Vue {
  hello: string = 'Hello'
}

@Component
export class World extends Vue {
  world: string = 'World'

  updateText(value: string) {
    return (this.world = value);
  }

  get name() {
    return console.log('mixin data')
  }
}