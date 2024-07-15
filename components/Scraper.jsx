'use client'
import React, { useState } from 'react'
import CustomSearch from './CustomSearch'
import { CustomTable } from './CustomTable'

export default function Scraper({ getData }) {
    const [id, setId] = useState("")
    const [data, setData] = useState(null)
    const getTableData = async () => {
        const result = await getData(id)
        setData(result)
    }
    return (
        <div>
            <CustomSearch id={id} setId={setId} getTableData={getTableData} />
            {data && <CustomTable data={data} />}
        </div>
    )
}
