const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

/* my code  start */
const question = document.createElement('p')
question.textContent = "movie title?"
app.appendChild(question)

const input = document.createElement('input')
input.setAttribute('type', 'text')
app.appendChild(input)

function get_description(title) {
  data =
}
const btn = document.createElement('input')
btn.setAttribute('type', 'submit')
btn.setAttribute('value', '입력')
btn.addEventListener('click', function() {
  var input_title = input.value
  alert(input_title)
})
app.appendChild(btn)

var request = new XMLHttpRequest()

request.open("GET", "https://ghibliapi.herokuapp.com/films", true)

request.onload = function() {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status <= 400) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].title)
    }
  } else {
    const error = document.createElement('marquee')
    error.textContent = "doesn't work"
    app.appendChild(error)
  }
}

request.send()
