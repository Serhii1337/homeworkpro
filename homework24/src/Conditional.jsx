export default function Conditional({ show }) {
  if (show) {
    return (
      <p>Компонент увімкнений</p>
    )
  }

  return (
    <p>Компонент вимкнений</p>
  )
}
