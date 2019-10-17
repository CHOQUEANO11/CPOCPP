import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 5,
    direction: 'flex',
    width: 1100,
    marginLeft: 100
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    fontSize: 16,
    color: theme.palette.text.secondary
  }
}));

export default function Information() {
  const [selectedValue, setSelectedValue] = useState('a');
  const [selectedValuec, setSelectedValuec] = useState('c');
  const [selectedValuee, setSelectedValuee] = useState('e');
  const [selectedValueg, setSelectedValueg] = useState('g');
  const [selectedValuei, setSelectedValuei] = useState('i');
  const [selectedValuel, setSelectedValuel] = useState('l');
  const [selectedValuen, setSelectedValuen] = useState('n');
  const [selectedValuep, setSelectedValuep] = useState('p');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  const handleChangec = event => {
    setSelectedValuec(event.target.value);
  };
  const handleChangee = event => {
    setSelectedValuee(event.target.value);
  };
  const handleChangeg = event => {
    setSelectedValueg(event.target.value);
  };
  const handleChangei = event => {
    setSelectedValuei(event.target.value);
  };
  const handleChangel = event => {
    setSelectedValuel(event.target.value);
  };
  const handleChangen = event => {
    setSelectedValuen(event.target.value);
  };
  const handleChangep = event => {
    setSelectedValuep(event.target.value);
  };

  const classes = useStyles();
  return (
    <Container>
      <h3>FORMULÁRIO DE INFORMAÇÃO FUNCIONAL</h3>
      <hr />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              Nome: CB 23434 JOSÉ NILSON SILVA DOS SANTOS
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Inclusão: 04/06/2008</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Medalhas e Condecorações: 6</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Elogios: 10</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Comportamento: EXCEPCIONAL</Paper>
          </Grid>
        </Grid>
        <h3>PUNIÇÕES DISCIPLINARES</h3>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Prisão: 0</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Detenção: 0</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Repreensão: 0</Paper>
          </Grid>
        </Grid>
        <br />
        <hr />
        <br />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              Foi condenado em processo criminal em primeira instância, até a
              decisão ou tribunal superior?: Sim
              <Radio
                color="primary"
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />
              Não
              <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              Está aguardando reserva ou está desobrigado das funções de acordo
              com a constituição?: Sim
              <Radio
                color="primary"
                checked={selectedValuec === 'c'}
                onChange={handleChangec}
                value="c"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
              />
              Não
              <Radio
                checked={selectedValuec === 'd'}
                onChange={handleChangec}
                value="d"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'D' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              Está preso preventivamente ou em flagrante delito? Sim
              <Radio
                color="primary"
                checked={selectedValuee === 'e'}
                onChange={handleChangee}
                value="e"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'E' }}
              />
              Não
              <Radio
                checked={selectedValuee === 'f'}
                onChange={handleChangee}
                value="f"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'F' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Está repondendo conselho de disciplina?: Sim
              <Radio
                color="primary"
                checked={selectedValueg === 'g'}
                onChange={handleChangeg}
                value="g"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'G' }}
              />
              Não
              <Radio
                checked={selectedValueg === 'h'}
                onChange={handleChangeg}
                value="h"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'H' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Está de LTPS na junta regular de saúde?: Sim
              <Radio
                color="primary"
                checked={selectedValuei === 'i'}
                onChange={handleChangei}
                value="i"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'I' }}
              />
              Não
              <Radio
                checked={selectedValuei === 'j'}
                onChange={handleChangei}
                value="j"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'J' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              Está no exercício da função de acordo com seu `QPMP`? Sim
              <Radio
                color="primary"
                checked={selectedValuel === 'l'}
                onChange={handleChangel}
                value="l"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'L' }}
              />
              Não
              <Radio
                checked={selectedValuel === 'm'}
                onChange={handleChangel}
                value="m"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'M' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              Está a disposicão de outro orgão?: Sim
              <Radio
                color="primary"
                checked={selectedValuen === 'n'}
                onChange={handleChangen}
                value="n"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'N' }}
              />
              Não
              <Radio
                checked={selectedValuen === 'o'}
                onChange={handleChangen}
                value="o"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'O' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              Está agregado?: Sim
              <Radio
                color="primary"
                checked={selectedValuep === 'p'}
                onChange={handleChangep}
                value="p"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'P' }}
              />
              Não
              <Radio
                checked={selectedValuep === 'q'}
                onChange={handleChangep}
                value="q"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Q' }}
              />
              | Se sim, qual o motivo: <textarea type="text" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
