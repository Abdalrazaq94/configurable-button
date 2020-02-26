function targetHandler(event) {
  debugger;
  // read user input (challenge: read it from the event!)


  // update state


  // update UI from state


  // log interaction
  const copyOfState = JSON.parse(JSON.stringify(componentInfo));
  log.push({
    handler: 'target',
    newTarget,
    componentInfo: copyOfState
  })
}
