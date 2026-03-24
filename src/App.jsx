import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ColorButton from './ColorButton'
import Greeting from './components/Greeting'
import Card from './components/Card'

function App() {
  const name = 'Bhabesh'
  // const fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange']
  const fruits = [
    { id: 1, name: '🍎 Apple',  calories: 95  },
    { id: 2, name: '🍌 Banana', calories: 105 },
    { id: 3, name: '🍊 Orange', calories: 62  },
  ]
  return (
    <>
      {/* Assesment 1 */}
      <h1>{name} AI Journey Begins</h1>
      <ul>
      {/* {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))} */}

      {/* Assessment 2 */}
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          {fruit.name} — {fruit.calories} kcal
        </li>
      ))}
      </ul>
      
      {/* Assesment 3 */}
      <Greeting name="Rahul" />
      <Greeting name="Priya" />
      <Greeting name="Arjun" />

      {/* Assesment 4 */}
      <div style={{ padding: '20px' }}>

      <h1>Why to Learn React? 🚀</h1>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Card
          title="⚛️ Component-Based"
          description="Break your UI into small, reusable pieces."
        />
        <Card
          title="🔄 Reactive State"
          description="UI updates automatically when data changes."
        />
        <Card
          title="🌐 Write Anywhere"
          description="Use React for web and React Native for mobile."
        />
      </div>

    </div>

      <ColorButton />
    </>
  )
}

export default App
