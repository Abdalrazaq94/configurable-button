function hrefHandler() {
  debugger;
  // read user input


  // update state


  // update UI from state


  // log interaction
  const copyOfState = JSON.parse(JSON.stringify(componentInfo));
  log.push({
    handler: 'href',
    newHref,
    componentInfo: copyOfState
  })
}
