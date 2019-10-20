import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Container, Form } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 5
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
  }
}));

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const check = {
    checkedE: false,
    checkedMB: false,
    checkedB: false,
    checkedR: false,
    checkedI: false,
    checkedNO: false
  };

  const [lav, setLav] = useState(check);
  const [valueLav, setValueLav] = useState(0);

  const [nr, setNr] = useState(check);
  const [valueNr, setValueNr] = useState(0);

  const [cfs, setCfs] = useState(check);
  const [valueCfs, setValueCfs] = useState(0);

  const [ep, setEp] = useState(check);
  const [valueEp, setValueEp] = useState(0);

  const [crd, setCrd] = useState(check);
  const [valueCrd, setValueCrd] = useState(0);

  const [fe, setFe] = useState(check);
  const [valueFe, setValueFe] = useState(0);

  const [cd, setCd] = useState(check);
  const [valueCd, setValueCd] = useState(0);

  const [ed, setEd] = useState(check);
  const [valueEd, setValueEd] = useState(0);

  const [ca, setCa] = useState(check);
  const [valueCa, setValueCa] = useState(0);

  const [ap, setAp] = useState(check);
  const [valueAp, setValueAp] = useState(0);

  const [ecrh, setEcrh] = useState(check);
  const [valueEcrh, setValueEcrh] = useState(0);

  const [cc, setCc] = useState(check);
  const [valueCc, setValueCc] = useState(0);

  const [cl, setCl] = useState(check);
  const [valueCl, setValueCl] = useState(0);

  const [cp, setCp] = useState(check);
  const [valueCp, setValueCp] = useState(0);

  const [pz, setPz] = useState(check);
  const [valuePz, setValuePz] = useState(0);

  const [coe, setCoe] = useState(check);
  const [valueCoe, setValueCoe] = useState(0);

  const [rf, setRf] = useState(check);
  const [valueRf, setValueRf] = useState(check);

  const [state18, setState18] = React.useState({
    check97: false,
    check98: false,
    check99: false,
    check100: false,
    check101: false,
    check102: false
  });

  const classes = useStyles();

  return (
    <Container>
      <h3 style={{ textAlign: 'center' }}>
        FORMULÁRIO AVALIÁTIVO DE DESEMPENHO DE PRAÇAS
      </h3>
      <div
        style={{
          textAlign: 'right',
          marginRight: 140,
          marginBottom: 8
        }}
      >
        <Button
          style={{ flexWrap: 'wrap' }}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Clique para Instrução
        </Button>
      </div>
      <hr />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          ATENÇÃO! Siga as instruções
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
              1 - O avaliador deverá marcar SIM ou NÃO o conceito ao qual
              atribui ao avaliado, seguindo o referencial abaico, á habilidade,
              competência ou valores analisados.
            </p>
            <b />
            <p>
              2 - Quando o resultado final da avaliação for menor que 3 (três),
              o avaliador deverá emitir um parecer analítico sobre quais motivos
              o levaram a esta conceituação.
            </p>
            <b />
            <h4>REFERENCIAL:</h4>
            <p>
              E - Peso (6) = EXCELENTE: Demonstra capacidade em executar as
              atividades relacionadas à habilidade, competências e valores
              avaliados, praticando-as sempre.
            </p>
            <p>
              MB - Peso (5) = MUITO BOM: Demonstra capacidade em as atividades
              relacionadas à habilidade, competência e valores avaliados, no
              entanto excepcionalmente, não as pratica.
            </p>
            <p>
              B - Peso (4) = BOM: Demonstra capacidade em executar as atividades
              relacionadas à habilidade, competências e valores avaliados,
              praticando-as com certa frequência
            </p>
            <p>
              R - Peso (3) = REGULAR: Demonstra capacidade em executar as
              atividades relacionadas à habilidade, competências e valores
              avaliados, porém não as pratica com frequência
            </p>
            <p>
              I - Peso (1) = INSUFICIENTE: Não demonstra(ou raramente demonstra)
              possuir capacidade em executar as atividades relacionadas à
              habilidade, competência e valores avaliados e raramente as
              pratica.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Form>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                Nome: JOSÉ NILSON SILVA DOS SANTOS
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>GRAD: CB PM</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>QUADRO: QPPM</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                I – CARGOS DESEMPENHADOS (No período): DESENVOLVEDOR
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                PERIODO: 21/12/2018 À 10/06/2019
              </Paper>
            </Grid>
          </Grid>
          <hr />
          <h4>II - QUALIDADES PESSOAIS E FUNCIONAIS</h4>
        </div>
        <p>A - CARÁTER</p>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              01 - Lealdade e Amor a Verdade - Peso: {valueLav}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedE}
                      onChange={() =>
                        setLav({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueLav(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedMB}
                      onChange={() =>
                        setLav({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueLav(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedB}
                      onChange={() =>
                        setLav({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueLav(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedR}
                      onChange={() =>
                        setLav({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueLav(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedI}
                      onChange={() =>
                        setLav({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueLav(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedNO}
                      onChange={() =>
                        setLav({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueLav(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              02 - Noções de Responsabilidade - Peso: {valueNr}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedE}
                      onChange={() =>
                        setNr({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueNr(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedMB}
                      onChange={() =>
                        setNr({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueNr(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedB}
                      onChange={() =>
                        setNr({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueNr(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedR}
                      onChange={() =>
                        setNr({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueNr(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedI}
                      onChange={() =>
                        setNr({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueNr(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedNO}
                      onChange={() =>
                        setNr({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueNr(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              03 - Comportamento em face de situação - Peso: {valueCfs}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedE}
                      onChange={() =>
                        setCfs({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCfs(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedMB}
                      onChange={() =>
                        setCfs({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCfs(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedB}
                      onChange={() =>
                        setCfs({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCfs(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedR}
                      onChange={() =>
                        setCfs({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCfs(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedI}
                      onChange={() =>
                        setCfs({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCfs(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedNO}
                      onChange={() =>
                        setCfs({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueCfs(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              04 - Energia e Perseverança - Peso: {valueEp}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedE}
                      onChange={() =>
                        setEp({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEp(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedMB}
                      onChange={() =>
                        setEp({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEp(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedB}
                      onChange={() =>
                        setEp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEp(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedR}
                      onChange={() =>
                        setEp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueEp(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedI}
                      onChange={() =>
                        setEp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEp(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedNO}
                      onChange={() =>
                        setEp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueEp(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <hr />
        <p>B - INTELIGÊNCIA</p>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              05 - Capacidade de Raciocínio e Decisão - Peso: {valueCrd}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedE}
                      onChange={() =>
                        setCrd({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCrd(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedMB}
                      onChange={() =>
                        setCrd({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCrd(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedB}
                      onChange={() =>
                        setCrd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCrd(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedR}
                      onChange={() =>
                        setCrd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCrd(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedI}
                      onChange={() =>
                        setCrd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCrd(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedNO}
                      onChange={() =>
                        setCrd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueCrd(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              06 - Facilidade de Expressão (escrita/oral) - Peso: {valueFe}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedE}
                      onChange={() =>
                        setFe({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueFe(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedMB}
                      onChange={() =>
                        setFe({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueFe(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedB}
                      onChange={() =>
                        setFe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueFe(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedR}
                      onChange={() =>
                        setFe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueFe(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedI}
                      onChange={() =>
                        setFe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueFe(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedNO}
                      onChange={() =>
                        setFe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueFe(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <hr />
        <p>C - ESPÍRITO E CONDUTA MILITAR</p>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              07 - Cumprimento do Dever - Peso: {valueCd}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedE}
                      onChange={() =>
                        setCd({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCd(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedMB}
                      onChange={() =>
                        setCd({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCd(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedB}
                      onChange={() =>
                        setCd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCd(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedR}
                      onChange={() =>
                        setCd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCd(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedI}
                      onChange={() =>
                        setCd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCd(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedNO}
                      onChange={() =>
                        setCd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueCd(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              08 - Espirito de Disciplina - Peso: {valueEd}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedE}
                      onChange={() =>
                        setEd({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEd(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedMB}
                      onChange={() =>
                        setEd({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEd(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedB}
                      onChange={() =>
                        setEd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEd(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedR}
                      onChange={() =>
                        setEd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueEd(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedI}
                      onChange={() =>
                        setEd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEd(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedNO}
                      onChange={() =>
                        setEd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueEd(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              09 - Correção de Atitude - Peso: {valueCa}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedE}
                      onChange={() =>
                        setCa({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCa(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedMB}
                      onChange={() =>
                        setCa({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCa(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedB}
                      onChange={() =>
                        setCa({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCa(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedR}
                      onChange={() =>
                        setCa({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCa(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedI}
                      onChange={() =>
                        setCa({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCa(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedNO}
                      onChange={() =>
                        setCa({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueCa(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              10 - Assiduidade e Pontualidade - Peso: {valueAp}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedE}
                      onChange={() =>
                        setAp({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueAp(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedMB}
                      onChange={() =>
                        setAp({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueAp(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedB}
                      onChange={() =>
                        setAp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueAp(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedR}
                      onChange={() =>
                        setAp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueAp(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedI}
                      onChange={() =>
                        setAp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueAp(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedNO}
                      onChange={() =>
                        setAp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueAp(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              11 - Espírito de camaradagem e Relações Humanas - Peso:{' '}
              {valueEcrh}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedE}
                      onChange={() =>
                        setEcrh({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEcrh(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedMB}
                      onChange={() =>
                        setEcrh({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEcrh(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedB}
                      onChange={() =>
                        setEcrh({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEcrh(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedR}
                      onChange={() =>
                        setEcrh({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueEcrh(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedI}
                      onChange={() =>
                        setEcrh({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEcrh(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedNO}
                      onChange={() =>
                        setEcrh({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueEcrh(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              12 - Conduta Civil - Peso: {valueCc}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedE}
                      onChange={() =>
                        setCc({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCc(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedMB}
                      onChange={() =>
                        setCc({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCc(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedB}
                      onChange={() =>
                        setCc({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCc(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedR}
                      onChange={() =>
                        setCc({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCc(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedI}
                      onChange={() =>
                        setCc({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCc(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedNO}
                      onChange={() =>
                        setCc({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueCc(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              13 - Capacidade de Liderança - Peso: {valueCl}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedE}
                      onChange={() =>
                        setCl({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCl(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedMB}
                      onChange={() =>
                        setCl({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCl(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedB}
                      onChange={() =>
                        setCl({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCl(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedR}
                      onChange={() =>
                        setCl({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCl(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedI}
                      onChange={() =>
                        setCl({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCl(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedNO}
                      onChange={() =>
                        setCl({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueCl(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              14 - Capacidade de Planejamento - Peso: {valueCp}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedE}
                      onChange={() =>
                        setCp({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCp(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedMB}
                      onChange={() =>
                        setCp({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCp(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedB}
                      onChange={() =>
                        setCp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCp(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedR}
                      onChange={() =>
                        setCp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCp(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedI}
                      onChange={() =>
                        setCp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCp(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedNO}
                      onChange={() =>
                        setCp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueCp(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              15 – Probidade e Zelo - Peso: {valuePz}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedE}
                      onChange={() =>
                        setPz({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValuePz(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedMB}
                      onChange={() =>
                        setPz({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValuePz(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedB}
                      onChange={() =>
                        setPz({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValuePz(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedR}
                      onChange={() =>
                        setPz({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValuePz(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedI}
                      onChange={() =>
                        setPz({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValuePz(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedNO}
                      onChange={() =>
                        setPz({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValuePz(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              16 – Capacidade de Organização e Eficiência - Peso: {valueCoe}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedE}
                      onChange={() =>
                        setCoe({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCoe(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedMB}
                      onChange={() =>
                        setCoe({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCoe(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedB}
                      onChange={() =>
                        setCoe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCoe(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedR}
                      onChange={() =>
                        setCoe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCoe(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedI}
                      onChange={() =>
                        setCoe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCoe(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedNO}
                      onChange={() =>
                        setCoe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueCoe(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <p>D - CAPACIDADE FÍSICA</p>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              17 - Resistência à Fadiga - Peso: {valueRf}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedE}
                      onChange={() =>
                        setRf({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueRf(6)
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedMB}
                      onChange={() =>
                        setRf({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueRf(5)
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedB}
                      onChange={() =>
                        setRf({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueRf(4)
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedR}
                      onChange={() =>
                        setRf({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueRf(3)
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedI}
                      onChange={() =>
                        setRf({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueRf(1)
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedNO}
                      onChange={() =>
                        setRf({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueRf(0)
                      }
                      value={false}
                    />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Disposição para o Trabalho
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox checked={state18.check97} value="check97" />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={state18.check98} value="check98" />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={state18.check99} value="check99" />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={state18.check100} value="check100" />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={state18.check101} value="check101" />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={state18.check102} value="check102" />
                  }
                  label="NO"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <hr />
        <h3 style={{ textAlign: 'center' }}>CONCEITO FINAL</h3>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              VALOR/CONCEITO: E= 6 | MB= 5 | B= 4 | R= 3 | I= 1 | NO= 0
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              TOTAL DE CONCEITOS MARCADOS: 18
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>VALOR PARCIAL: 108</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>RESULTADO FINAL: 6</Paper>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
}
