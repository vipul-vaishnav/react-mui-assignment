import { SetStateAction } from 'react'
import { User } from '../../App'

export default interface IHome {
  user: User | null
  setUser: React.Dispatch<SetStateAction<User | null>>
}
