import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flex, Text, Button } from "@radix-ui/themes"
import CategoryFilters from "./components/categories"
import VeggieCards from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Text>hello world</Text>
      <Flex direction="column" gap="3">
        <Button>Button</Button>
        <CategoryFilters />
        <VeggieCards />
      </Flex>

    </>
  )
}

export default App
