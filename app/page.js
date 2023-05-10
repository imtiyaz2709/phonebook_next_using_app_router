"use client"

import Image from 'next/image'


async function getPhonebook(){
  const  phonebookRecord = await fetch("http://127.0.0.1:3000/api/PhoneBook",{next:{revalidate:10}})
  return phonebookRecord.json()
}

const handleDelete =  async (id) => {
    const data = await fetch(`http://127.0.0.1:3000/api/PhoneBook/${id}`,{
      method:"DELETE",
      headers:{
        "content-type":"application/json"
      }
    })
    alert("data deleted")
    await getPhonebook();

}
export default async function Home() {
 let data =  await getPhonebook(); 
  return (
    <div className='w-full flex justify-center my-7'>
      <div className='w-6/12'>
          <table className='w-full border text-center'>
            <thead>
              <tr>
                <th className='border font-sans border-black'>Name</th>
                <th className='border font-sans border-black'>Contact</th>
                <th className='border font-sans border-black'>Action</th>
              </tr>
            </thead>
            <tbody>
             {
              data.data.map((value, key) => ( 
                <tr key={key}>
                <td className='border border-black'>{value.name}</td>
                <td className='border border-black'>{value.contact}</td>
                <td className='border border-black'>
                <button type="submit" className="px-2 py-1 rounded w-fit bg-red-600 text-white" onClick={() => handleDelete(value._id)}>Delete</button>
                </td>
              </tr>
              ))
             }
            </tbody>

          </table>
      </div>

    </div>
  )
}
