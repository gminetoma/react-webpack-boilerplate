import { StrictMode } from 'react'
import { StaticRouter } from 'react-router'
import App from '~shared/src/components/App'

type ServerProps = {
  url: string
}

const Server = (props: ServerProps) => {
  const { url } = props
  return (
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}

export default Server
