import Document, { Html, Head, Main, NextScript } from 'next/document'
import fs from 'fs'
import { join } from 'path'

const svgDirectory = join(process.cwd(), `public/images/`)

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    const fullPath = join(svgDirectory, `sprite.svg`)
	  const svgs = fs.readFileSync(fullPath, 'utf8')

    return { ...initialProps, svgs }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.svgs }} style={{ display: 'none', visibility: 'none' }}></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument