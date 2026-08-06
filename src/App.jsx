import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  const [cart, setCart] = useState([]);

  const [catFilter, setCatFilter] = useState("all");

  function handleAddToCart(product) {
    setCart((previousCart) => [...previousCart, product])
  }

  function handleSetCatFilter(event) {
    setCatFilter(event.target.value);
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <p>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
      </p>
      
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={catFilter} onChange={handleSetCatFilter}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList onAddToCart={handleAddToCart} catFilter={catFilter} />

      <Cart cart={cart} />
    
    </div>
  )
}

export default App
