const Child = ({name,age,clic,clic2}) => {
  return (
    <div>
      <h1>My name is {name} and my age is {age}</h1>
      <button onClick={clic} onDoubleClick={clic2}>Click</button>
    </div>
  )
}

export default Child