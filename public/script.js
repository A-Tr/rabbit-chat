$('#chatFormNode').on('submit', e => {
  e.preventDefault()

  let data = {
    Name: $('#name').val(),
    Message: $('#message').val()
  }
  data = JSON.stringify(data)
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/chat',
    contentType: 'application/json',
    data,
    error: err => {
      alert(`Could not connect to chat. Error: ${JSON.stringify(err)}`)
    },
    success: res => {
      alert(res)
    }
  })
})

$('#chatFormGo').on('submit', e => {
  e.preventDefault()

  const data = {
    Name: $('#name').val(),
    Message: $('#message').val()
  }

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3001/api/chat',
    processData: false,
    data: data,
    error: err => {
      alert(`Could not connect to chat. Error: ${JSON.stringify(err)}`)
    }
  })
})

new Vue({
  el: '#vueThing',
  data: {
    greeting: 'Hello Vue.js!'
  }
})
