export default interface IInput {
  type?: 'email' | 'phone' | 'text'
  name: string
  placeholder: string
  icon?: React.ComponentType
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
