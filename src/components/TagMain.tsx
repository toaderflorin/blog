import React from 'react'
import { navigate } from 'gatsby'
import './TagMain.css'

export default function TagMain(props: any) {
  const { onClose } = props

  return (
    <div className="tag" onClick={() => navigate('/')}>
      Blog
    </div>
  )
}
