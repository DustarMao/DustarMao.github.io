import type { NextPage } from 'next'
import React, { useEffect } from 'react'

const LoverPage: NextPage = () => {
  useEffect(() => {
    while (!window.confirm('love me?')) {}
    while (!window.confirm('merry me?')) {}
    window.alert('❤')
  }, [])
  return (
    <>
      <div>TODO LoverPage</div>
    </>
  )
}
export default LoverPage
