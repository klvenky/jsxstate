import { get } from '../../utils'
import useContextMachine from '../useContextMachine'

export default function useValue({ machineId, context, parse, fallback } = {}) {
  const [state] = useContextMachine(machineId) || []

  if (!state) return

  let value

  if (context) {
    if (typeof context === 'string') {
      value = get(state.context, context, fallback)
    } else {
      value = state.context
    }
  } else {
    value = state.toStrings().pop()
  }

  if (parse) return parse(value, state)

  return value
}
