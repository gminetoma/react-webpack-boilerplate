class NoRootDOMNodeException extends Error {
  constructor({ elementId }: { elementId: string }) {
    super(`React couldn't hydrate. Missing DOM node with id "${elementId}"`)
  }
}

export default NoRootDOMNodeException
