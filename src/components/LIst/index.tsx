/* eslint-disable array-callback-return */
import React, {useContext} from 'react'
import { Box } from '@chakra-ui/react'
import { AppContext } from '../../App'

const List = () => {
    const {list} = useContext(AppContext)

    const renderList = () => {
        return list.map((item: any, index: any) => {
            if (item.type === 'invoice') {
                return (
                    <Box w='70%' mx='auto' border='1px solid teal' borderRadius='1rem' padding='2rem'>
                         <h1>{item.type}</h1>
                         <p>{item.details} {item.amount}</p>
                    </Box>        
                ) 
            }
        })
    }
    return (
        <div>
            {renderList()}
        </div>
    )
}

export default List 