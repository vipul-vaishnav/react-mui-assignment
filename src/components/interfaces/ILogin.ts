import { User } from '../../App'

export default interface ILogin {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}
