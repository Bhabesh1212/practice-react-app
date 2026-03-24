##  Imperative JavaScript — How to build it
    // You must manually orchestrate every single step
    const button = document.createElement('button')
    button.textContent = 'Click Me'
    button.style.backgroundColor = 'blue'

    button.addEventListener('click', () => {
    button.style.backgroundColor =
        button.style.backgroundColor === 'blue' ? 'red' : 'blue'
    })

    document.getElementById('root').appendChild(button)

## Declarative JSX — What it should look like
    import { useState } from 'react'

    function ColorButton() {
    const [color, setColor] = useState('blue')

    return (
        <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(color === 'blue' ? 'red' : 'blue')}
        >
        Click Me
        </button>
    )
    }
## What are the { } Curly Braces in JSX?
JSX is HTML-like by default — but the moment you need logic, variables, or expressions, you crack open { } to inject them:

const name = 'Rahul'
const score = 95

// 1️⃣ Injecting a variable
<h1>Hello, {name}</h1>                        // → Hello, Rahul

// 2️⃣ Evaluating an expression
<p>Grade: {score >= 90 ? 'A' : 'B'}</p>       // → Grade: A

// 3️⃣ Calling a function
<p>Uppercase: {name.toUpperCase()}</p>         // → Uppercase: RAHUL

// 4️⃣ Inline styles — double {{ }} explained below
<button style={{ backgroundColor: 'blue' }}>  // → styled button

## Why style={{ }} has DOUBLE Braces ?
<button style={{ backgroundColor: 'blue' }}>
//      ↑↑    ↑↑
//      ||    ||
//      ||    └─ Inner { } → the JS style OBJECT  { backgroundColor: 'blue' }
//      └─ Outer { } → the JSX escape hatch, saying "here comes JavaScript"


