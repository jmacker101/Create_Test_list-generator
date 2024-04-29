const Component = require('./documents/lib/component.js');
describe('Component', () => {
  test('should throw error if render() is called', () => {
    const component = new Component();
    const err = new Error('Child class must implement a render() method.')
    expect(component.render).toThrow(err);
  });
});

// to create the component class
class Component {
  constructor(children = []) {
    this.children = children;
  }
  // have a render method and the component class that work together with throw 
}

const Component = class {
  this
}