const app = documnet.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createELement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open("GET", "https://ghibliapi.herokuapp.com/films", true)

request.onload = function() {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status <= 400) {
    data.forEach((m) => {
      console.log(m.title)
    })
  } else {
    console.log('error')
  }
}

request.send()