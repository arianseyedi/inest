import React from 'react'
import Head from 'next/head'

export default function CustomHead() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        key="viewport"
      ></meta>
      <link rel="apple-touch-icon" sizes="180x180" href="fv/apple-touch-icon.png" />>
      <link rel="icon" type="image/png" sizes="32x32" href="fv/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="fv/favicon-16x16.png" />
      <link rel="manifest" href="fv/site.webmanifest" />
      <link rel="mask-icon" href="fv/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#000000" />
      <title>Inest.CA</title>
    </Head>
  )
}
