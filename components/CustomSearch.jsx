import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'

export default function CustomSearch({ id, setId, getTableData }) {
    return (
        <div className='w-80 border rounded p-3 flex flex-col gap-3 shadow-md my-5 mx-auto'>
            <h1 className='font-bold'>Big Dashboard</h1>
            <div className='flex w-full max-w-sm items-center space-x-2'>
                <Input type="email" placeholder="Enter a bid ID" className="text-xs" value={id} onChange={e => setId(e.target.value)} />
                <Button onClick={getTableData}>Submit</Button>
            </div>
            <p className='text-xs text-gray-600 w-full text-center'>Enter a bid ID to view the details</p>
        </div>
    )
}

