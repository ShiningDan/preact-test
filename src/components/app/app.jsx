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
    console.log(this.refs)
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
      <StatelessFunc name="hello" value="world" value1="world1" />
      <SubApp val={this.state.val} ref={this.refreshSubApp}><div>I'm children</div></SubApp>
    </div>;
  }
}

let StatelessFunc = ({name, ...value}) => {
  console.log(value)
  return (
    <div>
      <div>name : {name}</div>
    </div>
  );
}