import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'
import Header from './Header'

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <>
      <Header />

      <div className='gradient-bg d-flex' style={{ height: '90vh' }}>
        <Sidebar id={id} />
        {selectedConversation && <OpenConversation />}
      </div>
    </>
  )
}
