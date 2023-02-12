import React, { useState } from 'react';
import { Flex, Heading, Input, Text, Box } from '@chakra-ui/react';
// import axios from 'axios';

const IndexPage = () => {
  const [inputUserName, setInputUserName] = useState<string>('')
  const [inputCreateRoomName, setInputCreateRoomName] =   useState<string>('')
  const [inputJoinRoomName, setInputJoinRoomName] = useState<string>('')

  const createRoom = () => {
    // axios.post('http://localhost:8000/api/v1/create', {
    //   name: inputUserName,
    //   room_id: inputCreateRoomName,
    // })
    // .then(() => {
      
    // })
  }

  const joinRoom = () => {
    // axios.post('http://localhost:8000/api/v1/enter', {
    //   name: inputUserName,
    //   room_id: inputJoinRoomName,
    // })
  }

  return  (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="blackAlpha/700" p={12} rounded={0}>

        <Heading mb={32} padding={16} >
          さあゲームを始めましょう！
        </Heading>

        <Text fontSize='lg' mb={4}>ユーザ名</Text>
        <Input placeholder="ユーザ名を入力してください" variant="flushed" type="text" padding={16} rounded={4} value={inputUserName} onChange={(e) => setInputUserName(e.target.value)}/>

        <Text fontSize='lg' mb={4}>ルームを作成する</Text>
        <Input placeholder="ルームID" variant="flushed" type="email" padding={16} rounded={4} value={inputCreateRoomName} onChange={(e) => {setInputCreateRoomName(e.target.value)}}/>
        <Box as='button' borderRadius='xl' bg='orange' color='white' px={50} h={56} padding={16} mb={40} rounded={4}  onClick={createRoom()}>
          作成
        </Box>

        <Text fontSize='lg' mb={4}>ルームに入る</Text>
        <Input placeholder="ルームID" variant="flushed" type="email" padding={16} rounded={4} value={inputJoinRoomName} onChange={(e) => {setInputJoinRoomName(e.target.value)}}/>
        <Box as='button'  borderRadius='xl' bg='green' color='white' px={50} h={56} padding={16} mb={16} rounded={4} onClick={joinRoom()}>
          検索
        </Box>

      </Flex>
    </Flex>
  )
}

export default IndexPage