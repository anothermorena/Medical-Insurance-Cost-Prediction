import
 {Text,
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  useDisclosure, 
  ModalCloseButton,
} from '@chakra-ui/react'

const ResultsModal = ({prediction}) => {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Prediction Results</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>
                    The predicted medical insurance cost is ${prediction}  
                </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }

  export default ResultsModal;