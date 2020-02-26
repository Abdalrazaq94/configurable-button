function textHandler() {
  debugger;
  // read user input


  // update state


  // update UI from state


  // log interaction
  const copyOfState = JSON.parse(JSON.stringify(componentInfo));
  log.push({
    handler: 'text',
    newMainText,
    componentInfo: copyOfState
  })
}
