import { h, Component } from 'preact';
import SubApp from '../subapp/subapp.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val : 1,
    }
  }

  componentWillMount() {
    console.log('get into componentWillMount')
  }

  componentDidMount() {
    console.log('get into componentDidMount')
    this.refreshSubApp();
  }

  refreshSubApp = () => {
    setInterval(() => {
      this.setState({
        val : this.state.val + 1,
      }) 
    }, 1000)
  }

  render() {
    console.log('get into render');
    let time = new Date().toLocaleTimeString();
    return <div>
      <span>{ time }</span>
      <br />
      <span id='helloWorld'>'hello world'</span>
      <br />
      <SubApp val={this.state.val}><div>I'm children</div></SubApp>
    </div>;
  }
}