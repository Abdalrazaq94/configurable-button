window.onload = () => {
  debugger;
  // render initial UI from state


  // log initial state
  const copyOfState = JSON.parse(JSON.stringify(componentInfo));
  log.push({
    initialComponentInfo: copyOfState
  })
}
