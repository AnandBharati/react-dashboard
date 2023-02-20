import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, } from '@mui/material'
import { Stack } from '@mui/system';

function Products() {
  const [products, setProducts] = useState([]);
  const [renderUi,setRenderUi] = useState(
    <Typography variant='h3'>Hold on, we are loading..</Typography>
  )

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(()=>{
    const ALLCARDS =  products.map(({ id, title, price, description, image }) =>
    <Card sx={{ maxWidth: 270 }} elevation={5} key={id} >
      <CardMedia
        sx={{ height: 200, backgroundSize: 'contain' }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rs.{price * 8}
        </Typography>
        <Typography gutterBottom component="div"
          sx={{
            fontSize: 18, overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Add to Cart</Button>
        <Button size="small" variant='text'>know more</Button>
      </CardActions>
    </Card>);

    setRenderUi(ALLCARDS);
  },[products]);

  function getProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch((error) => alert('unable to fetch', error))

  }

  return (
    <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={5} paddingY={10}>
      {renderUi}
    </Stack>
  )
}

export default Products