import type { ReactElement } from 'react'

type HtmlProps = {
  linkElements?: ReactElement[]
  rootString: string
  scriptElements?: ReactElement[]
  title: string
}

const Html = (props: HtmlProps) => {
  const { linkElements, rootString, scriptElements, title } = props

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{title}</title>
        {linkElements}
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: rootString }} id="root"></div>
        {scriptElements}
      </body>
    </html>
  )
}

export default Html
