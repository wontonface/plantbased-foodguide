import './App.css'
import { Flex, Heading } from "@radix-ui/themes";
import CategoryFilters from "./components/categories";
import SeasonFilters from "./components/seasonfilters";
import VeggieList from './components/veggieList';

function App() {

  return (
    <>
      <Heading>Plant-Based Food Guide</Heading>
      <Flex direction="column" gap="3">
        <CategoryFilters />
        <SeasonFilters />
        <VeggieList />
      </Flex>

    </>
  )
}

export default App
