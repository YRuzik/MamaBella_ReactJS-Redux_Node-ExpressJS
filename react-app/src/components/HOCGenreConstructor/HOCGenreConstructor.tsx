import {Grid} from "@mui/material";
import {ItemContainer} from "./HOCGenreConstructor.style";
import OrderItem from "../orderItem/OrderItem";
import {FC} from "react";
import {products} from "../../interfaces/ProductsInterfaces";

type GreetingProps = {
    array: products[];
    label: string;
}

const HOCGenreConstructor: FC<GreetingProps> = ({array, label}) => {

    const filteredArray = array.filter((obj, id) => obj.category === label)

    return (
        <>
            <h1 style={{color: "white"}}>· {label} ·</h1>
            <ItemContainer>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 16 }}>
                    {filteredArray.map(({...props}: any, index: number) => (
                        <Grid xs={2} sm={4} md={4} key={index} item={true}>
                            <OrderItem {...props} label={label}/>
                        </Grid>
                    ))}
                </Grid>
            </ItemContainer>
        </>
    )
}

export default HOCGenreConstructor;
