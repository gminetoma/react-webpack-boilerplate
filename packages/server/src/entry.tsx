import type { RequestHandler } from 'express'
import type { StatsCompilation } from 'webpack'

import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'

import Html from './components/Html'
import Server from './components/Server'

export type EntryOptions = {
  clientStats?: StatsCompilation
  entryPoint?: string
}

const entry = (options: EntryOptions): RequestHandler => {
  const handler: RequestHandler = ({ url }, response, _next) => {
    const { clientStats = {}, entryPoint } = options

    const extractor = new ChunkExtractor({
      entrypoints: entryPoint,
      stats: clientStats,
    })

    const serverSideRender = () => {
      const jsx = extractor.collectChunks(<Server url={url} />)
      const rootString = renderToString(jsx)
      const scriptElements = extractor.getScriptElements()

      const htmlDocument = (
        <Html
          rootString={rootString}
          scriptElements={scriptElements}
          title="Title"
        />
      )

      return renderToString(htmlDocument)
    }

    const html = serverSideRender()
    response.send(`<!DOCTYPE html>${html}`)
  }

  return handler
}

export default entry
