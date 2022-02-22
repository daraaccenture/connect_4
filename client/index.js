const helloButton = document.getElementById("hello-button")

const getHelloMessage = () => {

    fetch('http://localhost:8080/hello')
      .then(response => response.text())
      .then(data => {
        const greeting = document.createElement("p")
        greeting.innerText = `The ${data} has said hello`
        helloDiv.appendChild(greeting)
      })
      .catch(error => console.log("there was an error:", error))
  }

helloButton.addEventListener("click", getHelloMessage)



