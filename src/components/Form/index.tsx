import React, {useContext, useState} from "react";
import { Box, 
        Select, 
        Stack, 
        Textarea,
        Text,
        Button,
        Input
    } from "@chakra-ui/react";
    import { AppContext } from "../../App";


const Form = () => {
    const {setSelect, setInput, input, setList, list} = useContext(AppContext)
   const handleChange = (e: any ) => {
        const {name, value} = e.target
        setSelect(value)
        setInput({
            ...input,
            [name] : value
        })
   }

   const handleSubmit = (e: any) => {
      e.preventDefault()
      setList([
          ...list,
          input
      ])
      console.log(list)
   }
    return (
        <Box w='30%' mx='auto' my='5%' border='1px solid teal' borderRadius='1rem' padding='2rem'>
                <Stack spacing={3}>
                    <Text fontSize='3xl' color='teal' fontWeight='900'>Finance Logger</Text>
                    <Select placeholder="Type" onChange={handleChange} value={input.type} name="type" color='teal' fontWeight='600' size='sm'>
                        <option>Invoice</option>
                        <option>Payment</option>
                    </Select>
                    <Input size='sm' placeholder='Name of person' name="person" value={input.person} onChange={handleChange} />
                    <Textarea placeholder="Details" size='sm' value={input.details} name="details" onChange={handleChange}/>
                    <Input type='number' size='sm' name="amount" placeholder="amount ($)" value={input.amount} onChange={handleChange}/>
                    <Button variant="solid" colorScheme='teal' onClick={handleSubmit} >Add</Button>
                </Stack> 
        </Box>
    )
}

export default Form