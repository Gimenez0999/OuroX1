import React, { useState } from 'react'
import logo from './assets/logo.png';
import './index.css';

export default function App() {
  const [teor, setTeor] = useState('')
  const [peso, setPeso] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcular = () => {
    const valorOuro24k = 350.0 // valor de exemplo
    const valorLiquido = valorOuro24k * 0.84

    const multiplicadores = {
      '24': 1,
      '22': 0.89,
      '18': 0.69,
      '14': 0.4,
      '10': 0.15,
    }

    if (!multiplicadores[teor] || !peso) {
      setResultado('Preencha todos os campos')
      return
    }

    const valorFinal = valorLiquido * multiplicadores[teor] * parseFloat(peso)
    setResultado(`R$ ${valorFinal.toFixed(2)}`)
  }

  return (
    <div className="app">
      <div className="content">
        <img src={logo} alt="OuroPrice" className="logo-inside" />
        <h1>Calculadora de Ouro</h1>
        <select value={teor} onChange={e => setTeor(e.target.value)}>
          <option value="">Selecione o teor</option>
          <option value="24">24k</option>
          <option value="22">22k</option>
          <option value="18">18k</option>
          <option value="14">14k</option>
          <option value="10">10k</option>
        </select>
        <input
          type="number"
          placeholder="Peso em gramas"
          value={peso}
          onChange={e => setPeso(e.target.value)}
        />
        <button onClick={calcular}>Calcular</button>
        <div className="resultado">{resultado}</div>
      </div>
    </div>
  )
}
