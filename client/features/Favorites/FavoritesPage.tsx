import React from "react"
import { Link, Grid, Box, Typography, Card, CardMedia, CardContent, CardActions, Button, IconButton, Container, CardHeader, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from "../../utils/hooks";
import { useGetFavoritesQuery, useDeleteFavoriteMutation } from "./redux/favorites-api-slice";

const FavoritesPage = () => {


  let UI = localStorage.getItem('userId')
  console.log(UI)

  const { data = [], isFetching, refetch, } = useGetFavoritesQuery(UI)

  const [deleteFavorite] = useDeleteFavoriteMutation()

  console.log(data)

  const onDeletFavoriteClicked = async (articleId) => {
    try {
      console.log("UI", UI, "AI", articleId)
      await deleteFavorite({ userId: UI, articleId: articleId }).unwrap()
      refetch()

    } catch (err) {
      console.error('Failed to delete favorite: ', err)
    }
  }

  return (

    <Container>
      <Paper elevation={0} sx={{ margin: 1 }}>
        <Typography fontWeight='400' textAlign='center' variant='h4'>
          Favorites
        </Typography>
      </Paper>



      {/* <Grid container spacing={1}  justifyContent='center' alignItems="center" > */}
      <Grid container spacing={2}  alignItems="center" justifyContent="center" sx={{marginBottom:2}}>
        {data.map((fave, key) => (
          <Grid item xs={12} sm={10} md={4} lg={3} key={fave.id} alignItems="flex-start" justifyContent="center" >
            <Card sx={{ display:"flex",flexDirection:'column', alignContent:
            'center', alignItems:'flex-end'}} elevation={1}>
            <CardMedia
              sx={{PaddingTop:1}}
                component='img'
                height="125"
                image={fave.urlToImage}
              />
              <CardHeader

                title={fave.title}
              />
              <CardActions >
                <Link href={fave.url}>Go to Story</Link>
                <IconButton onClick={() => onDeletFavoriteClicked(fave.id)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </CardActions>
              
            </Card>
          </Grid>

        ))}
      </Grid>
    </Container>
  )

}

export default FavoritesPage;