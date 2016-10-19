console.log('hello')

function sendRequest(event) {
  event.preventDefault();
  var el = event.target;
  var msg = document.getElementById('requestMsg');
  console.log(msg.value);
  server('127.0.0.1', 80, msg.value);
}

function sendResponse(event) {
  event.preventDefault()
  var msg = 
}
document
  .getElementById('request')
  .addEventListener('submit', sendRequest)

document
  .getElementById('server')
  .addEventListener()

function server (ip, port, msg)  {
  if (ip === "124.4.4.1") {
  console.log('Got Message');
  console.log(msg);
    document.getElementByID('serverRequest')
      .value = msg
  return
  }
  console.log("404 Not Found")
}
  
function client (ip, port, msg)  {
  if (ip === '192,168.0.20')  {
    console.log('got response')
    console.log(msg)
    return
  }
  console.log('404 Not Found')  
  }
