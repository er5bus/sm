
export class ForbiddenError extends Error {
}

export class PermissionDeniedError extends ForbiddenError {
  constructor (message) {
    super(message)
    this.name = 'PermissionDenied'
  }
}

export class AuthenticationError extends ForbiddenError {
  constructor (message) {
    super(message)
    this.name = 'AuthenticationError'
  }
}
