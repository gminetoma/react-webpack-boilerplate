/**
 * Exception thrown when a required MultiCompiler instance is missing.
 */
export class NoMultiCompilerException extends Error {
  constructor() {
    super('MultiCompiler instance is required but was not found.')
    this.name = 'NoMultiCompilerException'
  }
}
