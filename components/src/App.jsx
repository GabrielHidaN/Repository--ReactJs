//componente pai
import './App.css'

//props 
import PropsExemple from './components/PropsExemple'

// importar componente filho
import FunctionalComponent from './components/FunctionalComponent'

import ClassComponent from './components/ClassComponent'

function App() {

  return (
    <>
     
     <PropsExemple nome = "Aline" criador = "Gabriel"/>

     {/* utilizando componente importado no jsx*/ }
     <FunctionalComponent />
     <ClassComponent/>
    </>
  )
}

export default App
