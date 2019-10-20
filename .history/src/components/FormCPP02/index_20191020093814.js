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
import Fab from '@material-ui/core/Fab';

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
  const [open, setOpen] = useState(false);

  const check = {
    checkedE: false,
    checkedMB: false,
    checkedB: false,
    checkedR: false,
    checkedI: false,
    checkedNO: false
  };

  const [lav, setLav] = useState(check);
  const [valueLav, setValueLav] = useState({ peso: 0, click: 0 });

  const [nr, setNr] = useState(check);
  const [valueNr, setValueNr] = useState({ peso: 0, click: 0 });

  const [cfs, setCfs] = useState(check);
  const [valueCfs, setValueCfs] = useState({ peso: 0, click: 0 });

  const [ep, setEp] = useState(check);
  const [valueEp, setValueEp] = useState({ peso: 0, click: 0 });

  const [crd, setCrd] = useState(check);
  const [valueCrd, setValueCrd] = useState({ peso: 0, click: 0 });

  const [fe, setFe] = useState(check);
  const [valueFe, setValueFe] = useState({ peso: 0, click: 0 });

  const [cd, setCd] = useState(check);
  const [valueCd, setValueCd] = useState({ peso: 0, click: 0 });

  const [ed, setEd] = useState(check);
  const [valueEd, setValueEd] = useState({ peso: 0, click: 0 });

  const [ca, setCa] = useState(check);
  const [valueCa, setValueCa] = useState({ peso: 0, click: 0 });

  const [ap, setAp] = useState(check);
  const [valueAp, setValueAp] = useState({ peso: 0, click: 0 });

  const [ecrh, setEcrh] = useState(check);
  const [valueEcrh, setValueEcrh] = useState({ peso: 0, click: 0 });

  const [cc, setCc] = useState(check);
  const [valueCc, setValueCc] = useState({ peso: 0, click: 0 });

  const [cl, setCl] = useState(check);
  const [valueCl, setValueCl] = useState({ peso: 0, click: 0 });

  const [cp, setCp] = useState(check);
  const [valueCp, setValueCp] = useState({ peso: 0, click: 0 });

  const [pz, setPz] = useState(check);
  const [valuePz, setValuePz] = useState({ peso: 0, click: 0 });

  const [coe, setCoe] = useState(check);
  const [valueCoe, setValueCoe] = useState({ peso: 0, click: 0 });

  const [rf, setRf] = useState(check);
  const [valueRf, setValueRf] = useState({ peso: 0, click: 0 });

  const [dt, setDt] = useState(check);
  const [valueDt, setValueDt] = useState({ peso: 0, click: 0 });

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
          onClick={() => setOpen(true)}
        >
          Clique para Instrução
        </Button>
      </div>
      <hr />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
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
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
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
              01 - Lealdade e Amor a Verdade - Peso: {valueLav.peso}
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
                        }) + setValueLav({ peso: 6, click: 1 })
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
                        }) + setValueLav({ peso: 5, click: 1 })
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
                        }) + setValueLav({ peso: 4, click: 1 })
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
                        }) + setValueLav({ peso: 3, click: 1 })
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
                        }) + setValueLav({ peso: 1, click: 1 })
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
                        }) + setValueLav({ peso: 0, click: 0 })
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
              02 - Noções de Responsabilidade - Peso: {valueNr.peso}
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
                        }) + setValueNr({ peso: 6, click: 1 })
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
                        }) + setValueNr({ peso: 5, click: 1 })
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
                        }) + setValueNr({ peso: 4, click: 1 })
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
                        }) + setValueNr({ peso: 3, click: 1 })
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
                        }) + setValueNr({ peso: 1, click: 1 })
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
                        }) + setValueNr({ peso: 0, click: 0 })
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
              03 - Comportamento em face de situação - Peso: {valueCfs.peso}
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
                        }) + setValueCfs({ peso: 6, click: 1 })
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
                        }) + setValueCfs({ peso: 5, click: 1 })
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
                        }) + setValueCfs({ peso: 4, click: 1 })
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
                        }) + setValueCfs({ peso: 3, click: 1 })
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
                        }) + setValueCfs({ peso: 1, click: 1 })
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
                        }) + setValueCfs({ peso: 0, click: 0 })
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
              04 - Energia e Perseverança - Peso: {valueEp.peso}
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
                        }) + setValueEp({ peso: 6, click: 1 })
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
                        }) + setValueEp({ peso: 5, click: 1 })
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
                        }) + setValueEp({ peso: 4, click: 1 })
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
                        }) + setValueEp({ peso: 3, click: 1 })
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
                        }) + setValueEp({ peso: 1, click: 1 })
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
                        }) + setValueEp({ peso: 0, click: 0 })
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
              05 - Capacidade de Raciocínio e Decisão - Peso: {valueCrd.peso}
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
                        }) + setValueCrd({ peso: 6, click: 1 })
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
                        }) + setValueCrd({ peso: 5, click: 1 })
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
                        }) + setValueCrd({ peso: 4, click: 1 })
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
                        }) + setValueCrd({ peso: 3, click: 1 })
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
                        }) + setValueCrd({ peso: 1, click: 1 })
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
                        }) + setValueCrd({ peso: 0, click: 0 })
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
              06 - Facilidade de Expressão (escrita/oral) - Peso: {valueFe.peso}
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
                        }) + setValueFe({ peso: 6, click: 1 })
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
                        }) + setValueFe({ peso: 5, click: 1 })
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
                        }) + setValueFe({ peso: 4, click: 1 })
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
                        }) + setValueFe({ peso: 3, click: 1 })
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
                        }) + setValueFe({ peso: 1, click: 1 })
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
                        }) + setValueFe({ peso: 0, click: 0 })
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
              07 - Cumprimento do Dever - Peso: {valueCd.peso}
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
                        }) + setValueCd({ peso: 6, click: 1 })
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
                        }) + setValueCd({ peso: 5, click: 1 })
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
                        }) + setValueCd({ peso: 4, click: 1 })
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
                        }) + setValueCd({ peso: 3, click: 1 })
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
                        }) + setValueCd({ peso: 1, click: 1 })
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
                        }) + setValueCd({ peso: 0, click: 0 })
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
              08 - Espirito de Disciplina - Peso: {valueEd.peso}
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
                        }) + setValueEd({ peso: 6, click: 1 })
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
                        }) + setValueEd({ peso: 5, click: 1 })
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
                        }) + setValueEd({ peso: 4, click: 1 })
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
                        }) + setValueEd({ peso: 3, click: 1 })
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
                        }) + setValueEd({ peso: 1, click: 1 })
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
                        }) + setValueEd({ peso: 0, click: 0 })
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
              09 - Correção de Atitude - Peso: {valueCa.peso}
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
                        }) + setValueCa({ peso: 6, click: 1 })
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
                        }) + setValueCa({ peso: 5, click: 1 })
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
                        }) + setValueCa({ peso: 4, click: 1 })
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
                        }) + setValueCa({ peso: 3, click: 1 })
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
                        }) + setValueCa({ peso: 1, click: 1 })
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
                        }) + setValueCa({ peso: 0, click: 0 })
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
              10 - Assiduidade e Pontualidade - Peso: {valueAp.peso}
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
                        }) + setValueAp({ peso: 6, click: 1 })
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
                        }) + setValueAp({ peso: 5, click: 1 })
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
                        }) + setValueAp({ peso: 4, click: 1 })
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
                        }) + setValueAp({ peso: 3, click: 1 })
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
                        }) + setValueAp({ peso: 1, click: 1 })
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
                        }) + setValueAp({ peso: 0, click: 0 })
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
              {valueEcrh.peso}
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
                        }) + setValueEcrh({ peso: 6, click: 1 })
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
                        }) + setValueEcrh({ peso: 5, click: 1 })
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
                        }) + setValueEcrh({ peso: 4, click: 1 })
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
                        }) + setValueEcrh({ peso: 3, click: 1 })
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
                        }) + setValueEcrh({ peso: 1, click: 1 })
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
                        }) + setValueEcrh({ peso: 0, click: 0 })
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
              12 - Conduta Civil - Peso: {valueCc.peso}
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
                        }) + setValueCc({ peso: 6, click: 1 })
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
                        }) + setValueCc({ peso: 5, click: 1 })
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
                        }) + setValueCc({ peso: 4, click: 1 })
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
                        }) + setValueCc({ peso: 3, click: 1 })
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
                        }) + setValueCc({ peso: 1, click: 1 })
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
                        }) + setValueCc({ peso: 0, click: 0 })
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
              13 - Capacidade de Liderança - Peso: {valueCl.peso}
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
                        }) + setValueCl({ peso: 6, click: 1 })
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
                        }) + setValueCl({ peso: 5, click: 1 })
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
                        }) + setValueCl({ peso: 4, click: 1 })
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
                        }) + setValueCl({ peso: 3, click: 1 })
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
                        }) + setValueCl({ peso: 1, click: 1 })
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
                        }) + setValueCl({ peso: 0, click: 0 })
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
              14 - Capacidade de Planejamento - Peso: {valueCp.peso}
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
                        }) + setValueCp({ peso: 6, click: 1 })
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
                        }) + setValueCp({ peso: 5, click: 1 })
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
                        }) + setValueCp({ peso: 4, click: 1 })
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
                        }) + setValueCp({ peso: 3, click: 1 })
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
                        }) + setValueCp({ peso: 1, click: 1 })
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
                        }) + setValueCp({ peso: 0, click: 0 })
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
              15 – Probidade e Zelo - Peso: {valuePz.peso}
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
                        }) + setValuePz({ peso: 6, click: 1 })
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
                        }) + setValuePz({ peso: 5, click: 1 })
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
                        }) + setValuePz({ peso: 4, click: 1 })
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
                        }) + setValuePz({ peso: 3, click: 1 })
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
                        }) + setValuePz({ peso: 1, click: 1 })
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
                        }) + setValuePz({ peso: 0, click: 0 })
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
              16 – Capacidade de Organização e Eficiência - Peso:{' '}
              {valueCoe.peso}
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
                        }) + setValueCoe({ peso: 6, click: 1 })
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
                        }) + setValueCoe({ peso: 5, click: 1 })
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
                        }) + setValueCoe({ peso: 4, click: 1 })
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
                        }) + setValueCoe({ peso: 3, click: 1 })
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
                        }) + setValueCoe({ peso: 1, click: 1 })
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
                        }) + setValueCoe({ peso: 0, click: 0 })
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
              17 – Resistência à Fadiga - Peso: {valueRf.peso}
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
                        }) + setValueRf({ peso: 6, click: 1 })
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
                        }) + setValueRf({ peso: 5, click: 1 })
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
                        }) + setValueRf({ peso: 4, click: 1 })
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
                        }) + setValueRf({ peso: 3, click: 1 })
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
                        }) + setValueRf({ peso: 1, click: 1 })
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
                        }) + setValueRf({ peso: 0, click: 0 })
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
              18 - Disposição para o Trabalho - Peso: {valueDt.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedE}
                      onChange={() =>
                        setDt({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueDt({ peso: 6, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="E"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedMB}
                      onChange={() =>
                        setDt({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueDt({ peso: 5, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedB}
                      onChange={() =>
                        setDt({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueDt({ peso: 4, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedR}
                      onChange={() =>
                        setDt({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueDt({ peso: 3, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="R"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedI}
                      onChange={() =>
                        setDt({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: true,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueDt({ peso: 1, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="I"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedNO}
                      onChange={() =>
                        setDt({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: true
                        }) + setValueDt({ peso: 0, click: 0 })
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
        <h3 style={{ textAlign: 'center' }}>CONCEITO FINAL</h3>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              TOTAL DE CONCEITOS MARCADOS:{' '}
              {valueLav.click +
                valueNr.click +
                valueCfs.click +
                valueEp.click +
                valueCrd.click +
                valueFe.click +
                valueCd.click +
                valueEd.click +
                valueCa.click +
                valueAp.click +
                valueEcrh.click +
                valueCc.click +
                valueCl.click +
                valueCp.click +
                valuePz.click +
                valueCoe.click +
                valueRf.click +
                valueDt.click}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              VALOR PARCIAL:{' '}
              {valueLav.peso +
                valueNr.peso +
                valueCfs.peso +
                valueEp.peso +
                valueCrd.peso +
                valueFe.peso +
                valueCd.peso +
                valueEd.peso +
                valueCa.peso +
                valueAp.peso +
                valueEcrh.peso +
                valueCc.peso +
                valueCl.peso +
                valueCp.peso +
                valuePz.peso +
                valueCoe.peso +
                valueRf.peso +
                valueDt.peso}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              RESULTADO FINAL:{' '}
              {parseFloat(
                (
                  (valueLav.peso +
                    valueNr.peso +
                    valueCfs.peso +
                    valueEp.peso +
                    valueCrd.peso +
                    valueFe.peso +
                    valueCd.peso +
                    valueEd.peso +
                    valueCa.peso +
                    valueAp.peso +
                    valueEcrh.peso +
                    valueCc.peso +
                    valueCl.peso +
                    valueCp.peso +
                    valuePz.peso +
                    valueCoe.peso +
                    valueRf.peso +
                    valueDt.peso) /
                  (valueLav.click +
                    valueNr.click +
                    valueCfs.click +
                    valueEp.click +
                    valueCrd.click +
                    valueFe.click +
                    valueCd.click +
                    valueEd.click +
                    valueCa.click +
                    valueAp.click +
                    valueEcrh.click +
                    valueCc.click +
                    valueCl.click +
                    valueCp.click +
                    valuePz.click +
                    valueCoe.click +
                    valueRf.click +
                    valueDt.click)
                ).toFixed(2)
              )}
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              VALOR/CONCEITO: E= 6 | MB= 5 | B= 4 | R= 3 | I= 1 | NO= 0
              <div style={{ textAlign: 'right', marginTop: -45 }}>
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="add"
                  className={classes.margin}
                >
                  Salvar
                </Fab>

                <Fab
                  variant="extended"
                  color="secondary"
                  aria-label="add"
                  className={classes.margin}
                >
                  Voltar
                </Fab>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
}
