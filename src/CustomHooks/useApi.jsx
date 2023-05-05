import { useEffect } from "react"
import { useState } from "react"

function useApi(){
    const [trendingShows, setTrendingShows] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(trending => {
            setTrendingShows(trending.slice(0, 20))
            setLoading(false)
        })
    },[])

    return {trendingShows, loading}
}

export {useApi}
