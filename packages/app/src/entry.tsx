import { loadableReady } from '@loadable/component'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '~shared/src/components/App'

import NoRootDOMNodeException from './exceptions/NoRootDOMNodeException'

const ROOT_ID = 'root'

const main = () => {
  const domNode = document.getElementById(ROOT_ID)

  if (!domNode) throw new NoRootDOMNodeException({ elementId: ROOT_ID })

  const reactNode = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )

  hydrateRoot(domNode, reactNode)
}

void loadableReady(main)
