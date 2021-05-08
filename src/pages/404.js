import React, { useEffect } from "react"

import Layout from "../components/Layout/Layout"
import { usePageview } from "../hooks/anaytics"

const NotFoundPage = () => {
  usePageview();
  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>דף לא נמצא</h1>
      <p style={{ textAlign: 'center' }}>הגעת לדף שכבר לא קיים</p>
    </Layout>
  )
}

export default NotFoundPage
