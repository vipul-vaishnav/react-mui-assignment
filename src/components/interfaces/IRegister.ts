import { User } from '../../App'

export default interface IRegister {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}
