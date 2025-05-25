export const port = 5000

export const link = `http://localhost:${port}`

export const conf = (jwt : string) => {
  return {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  }
}
