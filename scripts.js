const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

/* my code  start */
// const question = document.createElement('p')
// question.textContent = "movie title?"
// app.appendChild(question)

const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('value', 'movie title?')
app.appendChild(input)

function get_description(title) {
  data = JSON.parse(request.response)

  var flag = false
  data.forEach((m) => {
    if (m.title === title) {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
      var description = m.description.substring(0, 300)
      description = `${description}...`
      card.textContent = description

      const h1 = document.createElement('h1')
      h1.textContent = m.title

      container.appendChild(h1)
      container.appendChild(card)
      flag = true
    }
  })

  if (!flag) alert("No Search Results")
}

const btn = document.createElement('input')
btn.setAttribute('type', 'submit')
btn.setAttribute('value', 'submit')
btn.setAttribute('onclick', 'get_description(input.value)')
app.appendChild(btn)

const btn2 = document.createElement('input')
btn2.setAttribute('type', 'button')
btn2.setAttribute('value', 'reload')
btn2.setAttribute('onclick', 'location.reload()')
app.appendChild(btn2)

/* my code ends */

var request = new XMLHttpRequest()

request.open("GET", "https://ghibliapi.herokuapp.com/films", true)

request.onload = function() {
  var data = JSON.parse(this.response) // this == request.

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
