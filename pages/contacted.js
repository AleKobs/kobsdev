
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr'
import Business from '../components/Business';

const fetcher = (...args) => fetch(...args).then((res) => res.json());



export default function Index() {
  const route = useRouter();
  const { data , error } = useSWR('/api/contacted', fetcher);
  const [contacted, setContacted] = useState([]);
  useEffect(()=>{},[]);


  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">

        <h2 className="text-lg font-medium text-gray-900">Já entramos em contato</h2>
        <button className="cursor-pointer" onClick={()=>{
          route.push('/');
        }}> Voltar</button>
        </div>
        
        
        <div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
          {data && data.map((business) => <Business data={business} />)}
        </div>
      </div>
    </div>
  )
}
