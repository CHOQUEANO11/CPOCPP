import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import { Container, Teste } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 5,
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    fontSize: 16,
    color: theme.palette.text.secondary
  }
}));

export default function Information() {
  const [checkPCPI, setCheckPCPI] = useState(false);
  const [checkARorDFAC, setCheckARorDFAC] = useState(false);
  const [checkPPorFD, setCheckPPorFD] = useState(false);
  const [checkRCD, setCheckRCD] = useState(false);
  const [checkLTPS, setCheckLTPS] = useState(false);
  const [checkEFA, setCheckEFA] = useState(false);
  const [checkDOO, setCheckDOO] = useState(false);
  const [checkAgregado, setCheckAgregado] = useState(false);

  const classes = useStyles();
  return (
    <Container>
      <h3>FORMULÁRIO DE INFORMAÇÃO FUNCIONAL</h3>
      <hr />
      <div className={classes.root}>
        <Teste>
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
              <Paper className={classes.paper}>
                Medalhas e Condecorações: 6
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Elogios: 10</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                Comportamento: EXCEPCIONAL
              </Paper>
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
                  color="secondary"
                  checked={checkPCPI === true}
                  onChange={() => setCheckPCPI(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                Não
                <Radio
                  color="primary"
                  checked={checkPCPI === false}
                  onChange={() => setCheckPCPI(false)}
                  value={false}
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                Está aguardando reserva ou está desobrigado das funções de
                acordo com a constituição?: Sim
                <Radio
                  color="primary"
                  checked={checkARorDFAC === true}
                  onChange={() => setCheckARorDFAC(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
                />
                Não
                <Radio
                  checked={checkARorDFAC === false}
                  onChange={() => setCheckARorDFAC(false)}
                  value={false}
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
                  checked={checkPPorFD === true}
                  onChange={() => setCheckPPorFD(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'E' }}
                />
                Não
                <Radio
                  checked={checkPPorFD === false}
                  onChange={() => setCheckPPorFD(false)}
                  value={false}
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
                  checked={checkRCD === true}
                  onChange={() => setCheckRCD(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'G' }}
                />
                Não
                <Radio
                  checked={checkRCD === false}
                  onChange={() => setCheckRCD(false)}
                  value={false}
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
                  checked={checkLTPS === true}
                  onChange={() => setCheckLTPS(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'I' }}
                />
                Não
                <Radio
                  checked={checkLTPS === false}
                  onChange={() => setCheckLTPS(false)}
                  value={false}
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
                  checked={checkEFA === true}
                  onChange={() => setCheckEFA(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'L' }}
                />
                Não
                <Radio
                  checked={checkEFA === false}
                  onChange={() => setCheckEFA(false)}
                  value={false}
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
                  checked={checkDOO === true}
                  onChange={() => setCheckDOO(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'N' }}
                />
                Não
                <Radio
                  checked={checkDOO === false}
                  onChange={() => setCheckDOO(false)}
                  value={false}
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'O' }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                Está agregado?: Sim
                <Radio
                  checked={checkAgregado === true}
                  onChange={() => setCheckAgregado(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'P' }}
                />
                Não
                <Radio
                  color="primary"
                  checked={checkAgregado === false}
                  onChange={() => setCheckAgregado(false)}
                  value={false}
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'Q' }}
                />
                | Se sim, qual o motivo: <textarea type="text" />
              </Paper>
            </Grid>
          </Grid>
        </Teste>
      </div>
    </Container>
  );
}