import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// caixa de diálogo
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// controle dos Grids
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

// caixa de seleção
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    checkedE: false,
    checkedMB: false,
    checkedB: false,
    checkedR: false,
    checkedI: false,
    checkedNO: false
  });

  const [state2, setState2] = React.useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false
  });

  const [state3, setState3] = React.useState({
    check7: false,
    check8: false,
    check9: false,
    check10: false,
    check11: false,
    check12: false
  });

  const [state4, setState4] = React.useState({
    check13: false,
    check14: false,
    check15: false,
    check16: false,
    check17: false,
    check18: false
  });

  const [state5, setState5] = React.useState({
    check19: false,
    check20: false,
    check21: false,
    check22: false,
    check23: false,
    check24: false
  });

  const [state6, setState6] = React.useState({
    check25: false,
    check26: false,
    check27: false,
    check28: false,
    check29: false,
    check30: false
  });

  const [state7, setState7] = React.useState({
    check31: false,
    check32: false,
    check33: false,
    check34: false,
    check35: false,
    check36: false
  });

  const [state8, setState8] = React.useState({
    check37: false,
    check38: false,
    check39: false,
    check40: false,
    check41: false,
    check42: false
  });

  const [state9, setState9] = React.useState({
    check43: false,
    check44: false,
    check45: false,
    check46: false,
    check47: false,
    check48: false
  });

  const [state10, setState10] = React.useState({
    check49: false,
    check50: false,
    check51: false,
    check52: false,
    check53: false,
    check54: false
  });

  const [state11, setState11] = React.useState({
    check55: false,
    check56: false,
    check57: false,
    check58: false,
    check59: false,
    check60: false
  });

  const [state12, setState12] = React.useState({
    check61: false,
    check62: false,
    check63: false,
    check64: false,
    check65: false,
    check66: false
  });

  const [state13, setState13] = React.useState({
    check67: false,
    check68: false,
    check69: false,
    check70: false,
    check71: false,
    check72: false
  });

  const [state14, setState14] = React.useState({
    check73: false,
    check74: false,
    check75: false,
    check76: false,
    check77: false,
    check78: false
  });

  const [state15, setState15] = React.useState({
    check79: false,
    check80: false,
    check81: false,
    check82: false,
    check83: false,
    check84: false
  });

  const [state16, setState16] = React.useState({
    check85: false,
    check86: false,
    check87: false,
    check88: false,
    check89: false,
    check90: false
  });

  const [state17, setState17] = React.useState({
    check91: false,
    check92: false,
    check93: false,
    check94: false,
    check95: false,
    check96: false
  });

  const [state18, setState18] = React.useState({
    check97: false,
    check98: false,
    check99: false,
    check100: false,
    check101: false,
    check102: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    setState2({ ...state2, [name]: event.target.checked });
    setState3({ ...state3, [name]: event.target.checked });
    setState4({ ...state4, [name]: event.target.checked });
    setState5({ ...state5, [name]: event.target.checked });
    setState6({ ...state6, [name]: event.target.checked });
    setState7({ ...state7, [name]: event.target.checked });
    setState8({ ...state8, [name]: event.target.checked });
    setState9({ ...state9, [name]: event.target.checked });
    setState10({ ...state10, [name]: event.target.checked });
    setState11({ ...state11, [name]: event.target.checked });
    setState12({ ...state12, [name]: event.target.checked });
    setState13({ ...state13, [name]: event.target.checked });
    setState14({ ...state14, [name]: event.target.checked });
    setState15({ ...state15, [name]: event.target.checked });
    setState16({ ...state16, [name]: event.target.checked });
    setState17({ ...state17, [name]: event.target.checked });
    setState18({ ...state18, [name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>
        FORMULÁRIO AVALIÁTIVO DE DESEMPENHO DE PRAÇAS
      </h3>
      <Button
        style={{ flexWrap: 'wrap' }}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Clique para Instrução
      </Button>
      <hr />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ATENÇÃO! Siga as instruções{' '}
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
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              NOME: JOSÉ NILSON SILVA DOS SANTOS
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>GRAD: CB PM</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>QUADRO: QPPM</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              PERIODO: 21/12/2018 À 10/06/2019
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>FUNÇÃO: DESENVOLVEDOR</Paper>
          </Grid>
        </Grid>
        <hr />
        <h4 style={{ textAlign: 'center' }}>
          QUALIDADES PESSOAIS E FUNCIONAIS
        </h4>
      </div>
      <div style={{ textAlign: 'center', color: 'blue' }}>A - CARÁTER</div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Lealdade e Amor a Verdade
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedE}
                    onChange={handleChange('checkedE')}
                    value="checkedE"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedMB}
                    onChange={handleChange('checkedMB')}
                    value="checkedMB"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange('checkedB')}
                    value="checkedB"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedR}
                    onChange={handleChange('checkedR')}
                    value="checkedR"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedI}
                    onChange={handleChange('checkedI')}
                    value="checkedI"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedNO}
                    onChange={handleChange('checkedNO')}
                    value="checkedNO"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Noções de Responsabilidade
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state2.check1}
                    onChange={handleChange('check1')}
                    value="check1"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state2.checke2}
                    onChange={handleChange('checke2')}
                    value="checke2"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state2.check3}
                    onChange={handleChange('check3')}
                    value="check3"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state2.check4}
                    onChange={handleChange('check4')}
                    value="check4"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state2.check5}
                    onChange={handleChange('check5')}
                    value="check5"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state2.checke6}
                    onChange={handleChange('checke6')}
                    value="check6"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            comportamento em face de situação
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state3.check7}
                    onChange={handleChange('check7')}
                    value="check7"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state3.check8}
                    onChange={handleChange('check8')}
                    value="check8"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state3.check9}
                    onChange={handleChange('check9')}
                    value="check9"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state3.check10}
                    onChange={handleChange('check10')}
                    value="check10"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state3.check11}
                    onChange={handleChange('check11')}
                    value="check11"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state3.check12}
                    onChange={handleChange('check12')}
                    value="check12"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Energia e Perseverança
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state4.check13}
                    onChange={handleChange('check13')}
                    value="check13"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state4.check14}
                    onChange={handleChange('check14')}
                    value="check14"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state4.check15}
                    onChange={handleChange('check15')}
                    value="check15"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state4.check16}
                    onChange={handleChange('check16')}
                    value="check16"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state4.check17}
                    onChange={handleChange('check17')}
                    value="check17"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state4.check18}
                    onChange={handleChange('check18')}
                    value="check18"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
      </Grid>
      <hr />
      <div style={{ textAlign: 'center', color: 'blue' }}>B - INTELIGÊNCIA</div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Capacidade de Raciocínio e Decisão
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state5.check19}
                    onChange={handleChange('check19')}
                    value="check19"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state5.checke20}
                    onChange={handleChange('checke20')}
                    value="checke20"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state5.check21}
                    onChange={handleChange('check21')}
                    value="check21"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state5.check22}
                    onChange={handleChange('check22')}
                    value="check22"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state5.check23}
                    onChange={handleChange('check23')}
                    value="check23"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state5.check24}
                    onChange={handleChange('check24')}
                    value="check24"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Facilidade de Expressão (escrita/oral)
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state6.check25}
                    onChange={handleChange('check25')}
                    value="check25"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state6.check26}
                    onChange={handleChange('check26')}
                    value="check26"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state6.check27}
                    onChange={handleChange('check27')}
                    value="check27"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state6.check28}
                    onChange={handleChange('check28')}
                    value="check28"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state6.check29}
                    onChange={handleChange('check29')}
                    value="check29"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state6.check30}
                    onChange={handleChange('check30')}
                    value="check30"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
      </Grid>
      <hr />
      <div style={{ textAlign: 'center', color: 'blue' }}>
        C - ESPÍRITO E CONDUTA MILITAR
      </div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Cumprimento do Dever
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state7.check31}
                    onChange={handleChange('check31')}
                    value="check31"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state7.checke32}
                    onChange={handleChange('checke32')}
                    value="checke32"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state7.check33}
                    onChange={handleChange('check33')}
                    value="check33"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state7.check34}
                    onChange={handleChange('check34')}
                    value="check34"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state7.check35}
                    onChange={handleChange('check35')}
                    value="check35"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state7.check36}
                    onChange={handleChange('check36')}
                    value="check36"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Espirito de Disciplina
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state8.check37}
                    onChange={handleChange('check37')}
                    value="check37"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state8.check38}
                    onChange={handleChange('check38')}
                    value="check38"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state8.check39}
                    onChange={handleChange('check39')}
                    value="check39"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state8.check40}
                    onChange={handleChange('check40')}
                    value="check40"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state8.check41}
                    onChange={handleChange('check41')}
                    value="check41"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state8.check42}
                    onChange={handleChange('check42')}
                    value="check42"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Correção de Atitude
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state9.check43}
                    onChange={handleChange('check43')}
                    value="check43"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state9.check44}
                    onChange={handleChange('check44')}
                    value="check44"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state9.check45}
                    onChange={handleChange('check45')}
                    value="check45"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state9.check46}
                    onChange={handleChange('check46')}
                    value="check46"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state9.check47}
                    onChange={handleChange('check47')}
                    value="check47"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state9.check48}
                    onChange={handleChange('check48')}
                    value="check48"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Assiduidade e Pontualidade
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state10.check49}
                    onChange={handleChange('check49')}
                    value="check49"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state10.check50}
                    onChange={handleChange('check50')}
                    value="check50"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state10.check51}
                    onChange={handleChange('check51')}
                    value="check51"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state10.check52}
                    onChange={handleChange('check52')}
                    value="check52"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state10.check53}
                    onChange={handleChange('check53')}
                    value="check53"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state10.check54}
                    onChange={handleChange('check54')}
                    value="check54"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Espirito de camaradagem e Relações Humanas
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state11.check55}
                    onChange={handleChange('check55')}
                    value="check55"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state11.check56}
                    onChange={handleChange('check56')}
                    value="check56"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state11.check57}
                    onChange={handleChange('check57')}
                    value="check57"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state11.check58}
                    onChange={handleChange('check58')}
                    value="check58"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state11.check59}
                    onChange={handleChange('check59')}
                    value="check59"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state11.check60}
                    onChange={handleChange('check60')}
                    value="check60"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Conduta Civil
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state12.check61}
                    onChange={handleChange('check61')}
                    value="check61"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state12.check62}
                    onChange={handleChange('check62')}
                    value="check62"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state12.check63}
                    onChange={handleChange('check63')}
                    value="check63"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state12.check64}
                    onChange={handleChange('check64')}
                    value="check64"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state12.check65}
                    onChange={handleChange('check65')}
                    value="check65"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state12.check66}
                    onChange={handleChange('check66')}
                    value="check66"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Capacidade de Liderança
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state13.check67}
                    onChange={handleChange('check67')}
                    value="check67"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state13.check68}
                    onChange={handleChange('check68')}
                    value="check68"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state13.check69}
                    onChange={handleChange('check69')}
                    value="check69"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state13.check70}
                    onChange={handleChange('check70')}
                    value="check70"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state13.check71}
                    onChange={handleChange('check71')}
                    value="check71"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state13.check72}
                    onChange={handleChange('check72')}
                    value="check72"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Capacidade de Planejamento
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state14.check73}
                    onChange={handleChange('check73')}
                    value="check73"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state14.check74}
                    onChange={handleChange('check74')}
                    value="check74"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state14.check75}
                    onChange={handleChange('check75')}
                    value="check75"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state14.check76}
                    onChange={handleChange('check76')}
                    value="check76"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state14.check77}
                    onChange={handleChange('check77')}
                    value="check77"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state14.check78}
                    onChange={handleChange('check78')}
                    value="check78"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Facilidade de Expressão (escrita/oral)
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state15.check79}
                    onChange={handleChange('check79')}
                    value="check79"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state15.check80}
                    onChange={handleChange('check80')}
                    value="check80"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state15.check81}
                    onChange={handleChange('check81')}
                    value="check81"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state15.check82}
                    onChange={handleChange('check82')}
                    value="check82"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state15.check83}
                    onChange={handleChange('check83')}
                    value="check83"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state15.check84}
                    onChange={handleChange('check84')}
                    value="check84"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Facilidade de Expressão (escrita/oral)
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state16.check85}
                    onChange={handleChange('check85')}
                    value="check85"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state16.check86}
                    onChange={handleChange('check86')}
                    value="check86"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state16.check87}
                    onChange={handleChange('check87')}
                    value="check87"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state16.check88}
                    onChange={handleChange('check88')}
                    value="check88"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state16.check89}
                    onChange={handleChange('check89')}
                    value="check89"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state16.check90}
                    onChange={handleChange('check90')}
                    value="check90"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
      </Grid>
      <div style={{ textAlign: 'center', color: 'blue' }}>
        D - CAPACIDADE FÍSICA
      </div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Resistência à Fadiga
            <FormGroup row style={{ justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state17.check91}
                    onChange={handleChange('check91')}
                    value="check91"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state17.check92}
                    onChange={handleChange('check92')}
                    value="check92"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state17.check93}
                    onChange={handleChange('check93')}
                    value="check93"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state17.check94}
                    onChange={handleChange('check94')}
                    value="check94"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state17.check95}
                    onChange={handleChange('check95')}
                    value="check95"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state17.check96}
                    onChange={handleChange('check96')}
                    value="check96"
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
                  <Checkbox
                    checked={state18.check97}
                    onChange={handleChange('check97')}
                    value="check97"
                  />
                }
                label="E"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state18.check98}
                    onChange={handleChange('check98')}
                    value="check98"
                  />
                }
                label="MB"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state18.check99}
                    onChange={handleChange('check99')}
                    value="check99"
                  />
                }
                label="B"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state18.check100}
                    onChange={handleChange('check100')}
                    value="check100"
                  />
                }
                label="R"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state18.check101}
                    onChange={handleChange('check101')}
                    value="check101"
                  />
                }
                label="I"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state18.check102}
                    onChange={handleChange('check102')}
                    value="check102"
                  />
                }
                label="NO"
              />
            </FormGroup>
          </Paper>
        </Grid>
      </Grid>
      <hr />
      <div style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>
        CONCEITO FINAL
      </div>
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
    </>
  );
}

export default App;
