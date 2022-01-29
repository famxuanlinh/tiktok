function Body(props){
    
    return <div>
      <button onClick={props.handleDecrease}>Decrease</button>
      <button onClick={props.handleIncrease}>Increase</button>
    </div>
}

export default Body