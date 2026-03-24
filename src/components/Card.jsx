function Card({ title, description }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px', width: '250px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card