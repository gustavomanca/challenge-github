export function formatDate(timezone: string) {
  const dateInstance = new Date(timezone)
  const date = dateInstance.toLocaleDateString('pt-br')
  const time = dateInstance.toLocaleTimeString()
  return `${date} - ${time}`
}
