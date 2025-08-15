import './App.css'
import { useState } from 'react';
import { Flex, Heading } from "@radix-ui/themes";
import SeasonFilters from "./components/seasonfilters";
import VeggieList from './components/veggieList';
import { getCurrentSeason } from './utils/veggieFilters';

function App() {
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([getCurrentSeason()]);
  

  return (
    <>
      <Heading>Plant-Based Food Guide</Heading>
      <Flex direction="column" gap="3">
        
        <SeasonFilters
          selectedSeasons={selectedSeasons}
          onSelectionChange={setSelectedSeasons}
        />
        <VeggieList selectedSeasons={selectedSeasons} />
      </Flex>

    </>
  )
}

export default App
