export interface Transferencia {
  id?: number
  valor: number
  destino: number | string //aceita int ou string
  data?: string
}
