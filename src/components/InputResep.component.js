import React, { useState } from 'react'



const cookingStyle = [
  "direbus", "dikukus", "digoreng", "dibakar", "dipanggang", "diasap", "ditumis" 
]

const ingOption = [
  {
    ingredientsName: "bawang merah",
		measurement: "buah"
  },
  {
    ingredientsName: "bawang putih",
		measurement: "siung"
  },
  {
    ingredientsName: "bawang bombay",
		measurement: "siung"
  },
  {
    ingredientsName: "tomat",
		measurement: "buah"
  },
  {
    ingredientsName: "",
		measurement: ""
  },
]
const InputResep = () => {
  const [numberIng,setNumberIng] = useState([1])
  const [ingState,setIngState] = useState(["ing"])

 
  
  
  
  
  const handleinput = (e) =>{
    const resep ={}
    resep[e.target.id] = e.target.value;
   
  }

  const handleAddIng = () => {
    setNumberIng(numberIng => [...numberIng, 1])
    setIngState(ingState => [...ingState, "ing"] )
    console.log(ingState)
  }

  const handleIng =(e) => {
    console.log(e.target.dataset.index)
    console.log(ingState[e.target.dataset.index])
    const temp = [...ingState]
    temp[e.target.dataset.index] = e.target.value
    setIngState(ingState => [...temp] )
    console.log(ingState)
  }






  return (
    <>
    <div>InputResep</div>
    <div className="inputform " style={{width:"70%", margin:"auto"}}>
      <input type="input" className="form-control form-control-sm" id="title" placeholder="nama resep" onChange={handleinput}></input>
      <input type="input" className="form-control form-control-sm" id="thumb" placeholder="link thumbnail" onChange={handleinput}></input>
      <input type="number" className="form-control form-control-sm" id="portion" placeholder="porsi makanan"></input>
      <input type="input" className="form-control form-control-sm" id="source" placeholder="source"></input>
      <input type="input" className="form-control form-control-sm" id="ytlink" placeholder="youtube Link"></input>
      <input type="input" className="form-control form-control-sm" id="occasion" placeholder="occasion"></input>
      <input type="input" className="form-control form-control-sm" id="origin" placeholder="origin"></input>
      <select className="form-select form-select-sm" aria-label="Default select example" onChange={handleinput} id="cookingStyle">
        {cookingStyle.map((el, index) => <option key={index} value={el}>{el}</option> )}
      </select>
      
      {numberIng.map((numberEl, numberIndex) => {
        return (
        <div key ={numberIndex} className='d-flex flex-row mb-3 flex-wrap' >  
          <div className='d-flex flex-column flex-grow-1'>
            <input type="input" className="form-control  " placeholder='search ingredients'></input>
            <select className="form-select" aria-label="Default select example" data-index ={numberIndex} id="ingredientsName" onChange={handleIng}>
              {ingOption.map((el, index) => <option key={index}  value={el.ingredientsName}>{el.ingredientsName}</option> )}
            </select>
          </div>
          
          <input type="number" className="form-control " id="quantity" placeholder="quantity"></input>
          <input type="text" className="form-control"  value={ingOption.filter(el => el.ingredientsName === ingState[numberIndex]).map(el => el.measurement)} disabled/>
          <button onClick={handleAddIng}>+</button>
        </div>
      )})}  
      
      <button type="button" className="btn btn-primary">Tambah resep</button>
    </div>
    </>
  )
}

export default InputResep