import './App.css';
import { connect } from "react-redux";

const App = (props) => {
  const { value, add, sub } = props;

  return (
    <div className="App">
     <p>{value}</p>
     <button onClick={add}>+</button>
     <button onClick={sub}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch({ type: 'ADD' }),
        sub: () => dispatch({ type: 'SUB' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
