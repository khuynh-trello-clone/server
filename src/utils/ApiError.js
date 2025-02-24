class ApiError extends Error {
  constructor(statusCode, message) {
    super(message)

    this.name = 'ApiError'

    // Gán thêm http status code của chúng ta ở đây
    this.statusCode = statusCode

    Error.captureStackTrace(this, this.constructor)
  }
}

export default ApiError
