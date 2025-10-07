/**
 * Exception thrown when a required client compiler instance is missing.
 */
export class NoClientCompilerException extends Error {
  constructor() {
    super('Client compiler instance is required but was not found.')
    this.name = 'NoClientCompilerException'
  }
}
