import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from '../../assets/distintivo.png';
import { Container } from './styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 220,
    marginLeft: 20,
    marginTop: 20
  },
  media: {
    height: 40
  },
  area: {
    pointerEvents: 'none'
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card}>
        <CardActions className={classes.area}>
          <img src={Img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Coronel
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Comandantes de Coint`s e Diretores
            </Typography>
          </CardContent>
        </CardActions>
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
              Tenente Coronel
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Comandantes de Batalhões
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>75 vagas ocupadas</div>
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
              Maj
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Comandantes de Batalhões e Cia`s
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>200 vagas ocupadas</div>
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
              Capitão
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Comandantes de Cia`s
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>300 vagas ocupadas</div>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardActions>
          <CardMedia
            className={classes.media}
            image={Img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              1º Tenente
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Chefe de Seção
            </Typography>
          </CardContent>
        </CardActions>
        <CardActions>
          <div>400 vagas ocupadas</div>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardActions>
          <CardMedia
            className={classes.media}
            image={Img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              2º Tenente
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Chefe de Seção
            </Typography>
          </CardContent>
        </CardActions>
        <CardActions>
          <div>450 vagas ocupadas</div>
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
              SubTenente
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Chefe da Secretaria
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>256 vagas ocupadas</div>
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
              1º Sargento
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Adjunto e Comandante de VTR
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>800 vagas ocupadas</div>
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
              2º Sargento
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Adjunto e Comandante de VTR
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>1200 vagas ocupadas</div>
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
              3º Sargento
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Adjunto e Comandante de VTR
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>2000 vagas ocupadas</div>
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
              Cabo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Comandante de VTR e motorista
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>6000 vagas ocupadas</div>
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
              Soldado
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Motorista e patrulheiro
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>800 vagas ocupadas</div>
        </CardActions>
      </Card>
    </Container>
  );
}
