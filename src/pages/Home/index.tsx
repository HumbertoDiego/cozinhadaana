import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import ProductCard from '../../components/ProductCard'

import { iProducts } from '../../db'
import { iReducerStore } from '../../reducers/store.reducer'

interface PageProps {
    category: string
}

export function ListItemsPage({ category }: PageProps) {
    const { tradicional, gourmet, sopas } = useSelector((state: iReducerStore) => state.products)
    const [data, setData] = useState<iProducts[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!tradicional || !sopas || !gourmet) return

        setIsLoading(true)

        let categoryProducts: iProducts[]

        switch (category) {
            case 'tradicional':
                categoryProducts = tradicional
                break;
            case 'gourmet':
                categoryProducts = gourmet
                break;
            default: categoryProducts = sopas
                break;
        }

        // timeout to simulate a loading
        setTimeout(() => {
            setData(categoryProducts)
            setIsLoading(false)
        }, 500)
    }, [category, tradicional, gourmet, sopas])

    return (
        <Grid container justifyContent="center">
            <Grid
                item
                container
                spacing={4}
                maxWidth={1200}
                justifyContent='center'
            >
                {
                    !isLoading ? (
                        data.map((item: iProducts) => (
                            <Grid item key={item.id}>
                                <ProductCard
                                    id={item.id}
                                    title={item.title}
                                    urlImage={item.urlImage}
                                    category={item.category}
                                    description={item.description}
                                    qt={item.qt}
                                />
                            </Grid>
                        ))
                    ) : (
                        <Grid
                            item
                            container
                            alignContent="center"
                            justifyContent="center"
                            height={500}
                        >
                            <CircularProgress />
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}