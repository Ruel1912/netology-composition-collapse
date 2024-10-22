import './App.css'
import Collapse from './components/Collapse'

function App() {
  return (
    <>
      <Collapse isOpen={true}>
        <p>Ready my first Collapse</p>
      </Collapse>
      <Collapse collapsedLabel="Show" expandedLabel="Hide">
        <h2 className="text-xl font-bold mb-2">Second collapse</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et
        </p>
      </Collapse>
    </>
  )
}

export default App
