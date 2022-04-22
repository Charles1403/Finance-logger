import { createContext, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Form from './components/Form';
import List from './components/LIst';

export const AppContext = createContext<any>(null)



function App() {

  const [select, setSelect] = useState<string>()

   const [input, setInput] = useState<any>({
    type: select,
    details: '',
    amount: ''
}) 

const [list, setList] = useState([])

  return (
      <Flex direction='column'>
        <AppContext.Provider value={{select, setSelect, input, setInput, list, setList}}>
          <Form />
          <List />
        </AppContext.Provider> 
      </Flex>
  );
}

export default App;
