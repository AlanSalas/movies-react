import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const MovieCard = ({ title, overview, poster_path }) => {
  const urlImage = `https://image.tmdb.org/t/p/original${poster_path}`;

  console.log(urlImage);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={urlImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
