import { MdCheckCircle } from 'react-icons/md'
import {Text,Box,ListItem,List, ListIcon} from '@chakra-ui/react';

const FieldGuide = () => {
  return (
    <Box mt={-20} mb={5}>
        <Text>Field Tips & Guide:</Text>
        <List spacing={3}>
        <ListItem>
            <ListIcon as={MdCheckCircle} color='gray.600' />
            For the sex or gender field, enter 0 for female and 1 for male.
        </ListItem>
        <ListItem>
            <ListIcon as={MdCheckCircle} color='gray.600' />
            For the smoker field, enter 0 for non smoker or and 1 for smoker or yes.
        </ListItem>
        <ListItem>
            <ListIcon as={MdCheckCircle} color='gray.600' />
            For the region field, enter 0 for southwest, 1 for southeast, 2 for northwest and 3 for northeast.
        </ListItem>
        </List>
    </Box>
  )
}

export default FieldGuide;