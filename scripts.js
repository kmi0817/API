const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open("GET", "https://ghibliapi.herokuapp.com/films", true)

request.onload = function() {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status <= 400) {
    data.forEach((m) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = m.title

      const p = document.createElement('p')
      m.description = m.description.substring(0, 300)
      p.textContent = `${m.description}...`

      card.appendChild(h1)
      card.appendChild(p)

      container.appendChild(card)
    })
  } else {
    const error = document.createElement('marquee')
    error.textContent = "doesn't work"
    app.appendChild(error)
  }
}

request.send()
