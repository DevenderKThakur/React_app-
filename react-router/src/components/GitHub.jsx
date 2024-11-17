import React  from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
  const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/DevenderKThakur').then((response)=>{
    //         return response.json() 
    //     }).then((response)=>{
    //         console.log(response);
    //         setData(response)
    //     })
    // } , [])
  return (
    <div className='flex flex-col justify-between items-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <p>GitHub Followers: {data?.followers}</p>
      <p>Github Repo-Count: {data?.public_repos}</p>
      <img src={data?.avatar_url} alt="Git-Profile-Pic"
      className='w-24' />
    </div>
  )
}

export default GitHub


export const gitHubInfo = async ()=>{
  const response = await fetch('https://api.github.com/users/DevenderKThakur')
  return response.json()
}