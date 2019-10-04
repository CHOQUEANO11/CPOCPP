import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from '../../assets/distintivo.svg';
// import { Container } from './styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 220,
    marginLeft: 20,
    marginTop: 20
  },
  media: {
    height: 40
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Coronel
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Comandantes de Coint`s e Diretores
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>45 vagas ocupadas</div>
      </CardActions>
    </Card>
    <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={Img}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Coronel
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Comandantes de Coint`s e Diretores
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <div>45 vagas ocupadas</div>
    </CardActions>
  </Card>
  );
}
