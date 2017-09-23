import {h, Component} from 'preact'

export default class SubApp extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('subApp componentWillMount')
  }

  componentDidMount() {
    console.log('subApp componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('subApp componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('subApp shouldComponentUpdate', nextProps, nextState)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('subApp componentWillUpdate', nextProps, nextState)
  }

  render() {
    return (
      <div>Hello This is SubApp</div>
    );
  }
}