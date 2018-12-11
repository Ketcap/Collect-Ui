import Head from 'next/head';


export default ({
  title = ''
}) => (
    <Head>
      <title>Collect Ui {title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" type="text/css" href="/static/reset.css" />
      <link href="https://fonts.googleapis.com/css?family=Bitter:400,700" rel="stylesheet" />
    </Head>
  )