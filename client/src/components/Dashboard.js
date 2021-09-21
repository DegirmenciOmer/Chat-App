import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import Header from './Header'

import { useConversations } from '../contexts/ConversationsProvider'
import IntroModal from './IntroModal'

export default function Dashboard({ id }) {
  const [show, setShow] = useState(false)

  const { selectedConversation } = useConversations()

  useEffect(() => {
    !selectedConversation && setShow(true)
  }, [])

  return (
    <>
      <Header />

      <div className='gradient-bg d-flex' style={{ height: '90vh' }}>
        <Sidebar id={id} />
        {selectedConversation && <OpenConversation />}
        <IntroModal show={show} setShow={setShow} />
      </div>
    </>
  )
}
