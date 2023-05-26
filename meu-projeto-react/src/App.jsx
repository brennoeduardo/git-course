
function App() {

  return(
    <div>
      <h1>Hello World!</h1>
      <MeuComponente/>
      <Button/>
    </div>
  )
}

function Button(){
  return(
    <button >
      Clique aqui!
    </button>

  )
}

function MeuComponente(){
  return(
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab officiis deleniti facilis velit cum? Optio explicabo nisi dicta? Doloribus dolorem ducimus neque nesciunt quisquam ipsum dignissimos sit dolorum quaerat?</p>
  )
}

export default App
