import React from 'react';
import { Flex, Heading, Input, Text, Box } from '@chakra-ui/react';

const IndexPage = () => {
  return  (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="blackAlpha/700" p={12} rounded={0}>

        <Heading mb={32} padding={16} >
          さあゲームを始めましょう！
        </Heading>

        <Text fontSize='lg' mb={4}>ルームを作成する</Text>
        <Input placeholder="お好きなルーム名を入力してください" variant="flushed" type="email" padding={16} rounded={4}/>
        <Box as='button' borderRadius='xl' bg='orange' color='white' px={50} h={56} padding={16} mb={40} rounded={4} >
          作成
        </Box>

        <Text fontSize='lg' mb={4}>ルームに入る</Text>
        <Input placeholder="相手のルーム名を入力してください" variant="flushed" type="email" padding={16} rounded={4}/>
        <Box as='button'  borderRadius='xl' bg='green' color='white' px={50} h={56} padding={16} mb={16} rounded={4}>
          検索
        </Box>

      </Flex>
    </Flex>
  )
}

export default IndexPage