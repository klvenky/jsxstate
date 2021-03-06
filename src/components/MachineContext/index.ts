import { createContext } from 'react'
import { Interpreter, State } from 'xstate'

export interface IMachineCtx {
  [key: string]: {
    current: Ctx
  }
}

// TODO: check if we can make a PR to @xstate/react exposing its types
export type Ctx = [
  State<any, any, any, any>,
  Interpreter<any, any, any, any>['send'],
  Interpreter<any, any, any, any>
]

const MachineContext = createContext<IMachineCtx | undefined>(undefined)

export default MachineContext
