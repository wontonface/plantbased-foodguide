import './App.css'
import { Flex, Heading, Button } from "@radix-ui/themes"
import CategoryFilters from "./components/categories"
import VeggieList from './components/veggieList'

function App() {

  return (
    <>
      <Heading>Plant-Based Food Guide</Heading>
      <Flex direction="column" gap="3">
        <CategoryFilters />
        <VeggieList />
      </Flex>

    </>
  )
}

export default App
