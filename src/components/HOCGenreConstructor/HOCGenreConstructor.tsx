import {Grid} from "@mui/material";
import {ItemContainer} from "./HOCGenreConstructor.style";
import OrderItem from "../pizzaItem/OrderItem";

const HOCGenreConstructor = ({array, label}: any) => {

    return (
        <>
            <h1 style={{color: "white"}}>· {label} ·</h1>
            <ItemContainer>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    {array.map(({...props}: any, index: number) => (
                        <Grid xs={2} sm={4} md={3} key={index} item={true}>
                            <OrderItem {...props}/>
                        </Grid>
                    ))}
                </Grid>
            </ItemContainer>
        </>
    )
}

export default HOCGenreConstructor;
