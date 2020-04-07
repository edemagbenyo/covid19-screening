export * from './graphData'
export function numberFormat(number){
  return (Intl.NumberFormat('en-US')).format(number)
}
