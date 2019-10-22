import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Fab from '@material-ui/core/Fab';
import { toast } from 'react-toastify';
import Modal from '@material-ui/core/Modal';
import CreateIcon from '@material-ui/icons/Create';
import Backdrop from '@material-ui/core/Backdrop';

import { Container, Form, Loading } from './styles';
import { apiInternal } from '../../services/api';

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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function Information({ person, elogio, punicao, showForm }) {
  const [checkPCPI, setCheckPCPI] = useState(false);
  const [checkARorDFAC, setCheckARorDFAC] = useState(false);
  const [checkPPorFD, setCheckPPorFD] = useState(false);
  const [checkRCD, setCheckRCD] = useState(false);
  const [checkLTPS, setCheckLTPS] = useState(false);
  const [checkEFA, setCheckEFA] = useState(false);
  const [checkDOO, setCheckDOO] = useState(false);
  const [checkAgregado, setCheckAgregado] = useState(false);
  const [idpessoa, setIdpessoa] = useState(0);
  const [motivo, setMotivo] = useState('');
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function personInformation() {
      const info = await JSON.parse(localStorage.getItem('data'));
      await setIdpessoa(info.idpessoa);
    }

    async function handleGetForm() {
      const response = await apiInternal.get(`formcpp01/${person.idpessoa}`);

      if (response.data !== null) {
        setCheckPCPI(response.data.checkpcpi);
        setCheckARorDFAC(response.data.checkarorfac);
        setCheckPPorFD(response.data.checkpporfd);
        setCheckRCD(response.data.checkrcd);
        setCheckLTPS(response.data.checkltps);
        setCheckEFA(response.data.checkefa);
        setCheckDOO(response.data.checkdoo);
        setCheckAgregado(response.data.checkagregado);
        setStatus(response.data.status);
        setMotivo(response.data.motivo);
        setLoading(false);
      }
      setLoading(false);
    }

    handleGetForm();
    personInformation();
  }, [person.idpessoa]);

  async function handleSave() {
    const response = await apiInternal
      .post('formcpp01', {
        checkpcpi: checkPCPI,
        checkarorfac: checkARorDFAC,
        checkpporfd: checkPPorFD,
        checkrcd: checkRCD,
        checkltps: checkLTPS,
        checkefa: checkEFA,
        checkdoo: checkDOO,
        checkagregado: checkAgregado,
        idpreechedor: idpessoa,
        idpessoa: person.idpessoa,
        status: true,
        motivo
      })
      .catch(err => {
        console.log(err);
        toast.error('O Militar já possui um formulário cadastrado');
      });

    if (response) {
      setStatus(true);
      toast.success(`Formulário de informação funcional inserido com sucesso!`);
    }
  }

  const classes = useStyles();
  return (
    <Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loading}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Loading color="#274293" size={60} />
      </Modal>
      <h3>
        FORMULÁRIO DE INFORMAÇÃO FUNCIONAL{' '}
        {status && <strong> Finalizado</strong>}{' '}
      </h3>
      <hr />
      <div className={classes.root}>
        <Form>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                Nome: {person.Graduacao.graduacao} {person.rg} {person.nome}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Inclusão: 04/06/2008</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                Medalhas e Condecorações: {person.Condecoracoes.length}
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Elogios: {elogio}</Paper>
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
              <Paper className={classes.paper}>Prisão: {punicao}</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Detenção: {punicao}</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>Repreensão: {punicao}</Paper>
            </Grid>
          </Grid>
          <br />
          <hr />
          <br />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                Foi condenado em processo criminal em primeira instância ou
                condenado a pena restritiva de liberdade?: Sim
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
                  checked={checkARorDFAC === true}
                  onChange={() => setCheckARorDFAC(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
                />
                Não
                <Radio
                  color="primary"
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
                  checked={checkPPorFD === true}
                  onChange={() => setCheckPPorFD(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'E' }}
                />
                Não
                <Radio
                  color="primary"
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
                  checked={checkRCD === true}
                  onChange={() => setCheckRCD(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'G' }}
                />
                Não
                <Radio
                  color="primary"
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
                  checked={checkLTPS === true}
                  onChange={() => setCheckLTPS(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'I' }}
                />
                Não
                <Radio
                  color="primary"
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
                  checked={checkEFA === true}
                  onChange={() => setCheckEFA(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'L' }}
                />
                Não
                <Radio
                  color="primary"
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
                  checked={checkDOO === true}
                  onChange={() => setCheckDOO(true)}
                  value
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'N' }}
                />
                Não
                <Radio
                  color="primary"
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
                | Se sim, qual o motivo:{' '}
                <textarea
                  type="text"
                  value={motivo}
                  onChange={e => setMotivo(e.target.value)}
                />
                <div style={{ textAlign: 'right', marginTop: -45 }}>
                  {!status && (
                    <Fab
                      variant="extended"
                      color="primary"
                      aria-label="add"
                      className={classes.margin}
                      onClick={() => handleSave()}
                    >
                      <CreateIcon color="primary" size={20} />
                      Salvar
                    </Fab>
                  )}
                  <Fab
                    variant="extended"
                    color="secondary"
                    aria-label="add"
                    className={classes.margin}
                    onClick={showForm}
                  >
                    Voltar
                  </Fab>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Form>
      </div>
    </Container>
  );
}
