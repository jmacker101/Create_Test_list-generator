const Component = require('./component.js');

class TaskListItem extends Component {
  constructor(children, priority = false) {
    super(children);
    this.priority = priority;
  }
  render() {
    let classNames = 'tasks-item';
    if (this.priority) {
      classNames += ' tasks-item-priority';
    }
    return `<li class="${classNames}">${this.renderInnerHtml()}</li>`;
  }
}

module.exports = TaskListItem;

const TaskListItem = require('../lib/taskListItem.js');

describe('TaskListItem', () => {
  test('should render an <li> for a task', () => {
    const text = 'Take over the world';
    const expectedHtml = '<li class="tasks-item">Take over the world</li>';
    const item = new TaskListItem([text]);
    expect(item.render()).toEqual(expectedHtml);
  });

  test('should render a priority task', () => {
    const text = 'Climb a mountain';
    const expectedHtml =
      '<li class="tasks-item tasks-item-priority">Climb a mountain</li>';
    const item = new TaskListItem([text], true);
    expect(item.render()).toEqual(expectedHtml);
  });
});