import { User } from '../../App'

export default interface IAuth {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}
