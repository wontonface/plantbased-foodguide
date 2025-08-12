import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flex, Heading, Button } from "@radix-ui/themes"
import CategoryFilters from "./components/categories"
import VeggieCards from './components/cards'
import VeggieList from './components/veggieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading>Plant-Based Food Guide</Heading>
      <Flex direction="column" gap="3">
        <Button>Button</Button>
        <CategoryFilters />
        <VeggieList />
      </Flex>

    </>
  )
}

export default App
