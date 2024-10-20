import React , {useState} from 'react'

function FormValidation() {
    const [username, setusername] = useState("")
  return (
    <div className='bg-black text-white mt-5 p-4'>
      <form onSubmit={function (e) {
        e.preventDefault()
        console.log(username);
        setusername("")
      }}>
        <input value={username} type="text" placeholder='Enter a name' className='px-4 py-3 text-xl m-5 rounded text-black' onChange={function (e) {
            setusername(e.target.value) 
        }}/>
        <button className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default FormValidation
