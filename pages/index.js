
import { useEffect, useState } from 'react';
import useSWR from 'swr'
import Business from '../components/Business';
import { useRouter } from 'next/dist/client/router';

const fetcher = (...args) => fetch(...args).then((res) => res.json());



export default function Index() {
  const { data , error } = useSWR('/api/teste', fetcher);
  const [contacted, setContacted] = useState([]);
  const route = useRouter();
  useEffect(()=>{},[]);


  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex justify-between">

        <h2 className="text-lg font-medium text-gray-900">Empresas para entrar em contato</h2>
        <button className="cursor-pointer bg-gray-200 text-sm py-2 px-6 rounded-full" onClick={()=>{
          route.push('/contacted');
        }}> Ver empresas já contactadas </button>
        </div>
        <div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
          {data && data.map((business) => <Business data={business} />)}
        </div>
      </div>
    </div>
  )
}
