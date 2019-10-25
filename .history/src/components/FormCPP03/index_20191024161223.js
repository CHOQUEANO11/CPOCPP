import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

import Radio from '@material-ui/core/Radio';
import { toast } from 'react-toastify';

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

const useStyles1 = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export default function Potentials() {
  const classes = useStyles();
  const classes1 = useStyles1();

  const [tefpoiEs, setTefpoiEs] = useState('');
  const [tefpoiQtd, setTefpoiQtd] = useState(0);
  const [tefpoiResult, setTefpoiResult] = useState(0);

  const [tefpnpEs, setTefpnpEs] = useState('');
  const [tefpnpQtd, setTefpnpQtd] = useState(0);
  const [tefpnpResult, setTefpnpResult] = useState(0);

  const [olmpheacpadsEs, setOlmpheacpadsEs] = useState('');
  const [olmpheacpadsQtd, setOlmpheacpadsQtd] = useState(0);
  const [olmpheacpadsResult, setOlmpheacpadsResult] = useState(0);

  const [hedpmEs, setHedpmEs] = useState('');
  const [hedpmQtd, setHedpmQtd] = useState(0);
  const [hedpmResult, setHedpmResult] = useState(0);

  const check = {
    mb: false,
    b: false,
    value: 0
  };
  const [cas, setCas] = useState(check);
  const [cfp, setCfp] = useState(check);

  const [pdoutoradoEs, setPdoutoradoEs] = useState('');
  const [pdoutoradoQtd, setPdoutoradoQtd] = useState(0);
  const [pdoutoradoResult, setPdoutoradoResult] = useState(0);

  const [doutoradoEs, setDoutoradoEs] = useState('');
  const [doutoradoQtd, setDoutoradoQtd] = useState(0);
  const [doutoradoResult, setDoutoradoResult] = useState(0);

  const [mestradoEs, setMestradoEs] = useState('');
  const [mestradoQtd, setMestradoQtd] = useState(0);
  const [mestradoResult, setMestradoResult] = useState(0);

  const [selectedValue, setSelectedValue] = React.useState({
    checkMedalGrao: false,
    checkMedalBarros: false,
    checkMedalFontoura: [0.2],
    checkMedalTiradentes: [0.15],
    checkMedalSotero: [0.25],
    ckeckMedalFCoelho1Rosa: [0.15],
    checkeMedalFCoelho2Rosas: [0.25],
    checkMedalFCoelho3Rosas: [0.35],
    checkTServico10: [0.1],
    checkTServico20: [0.15],
    checkMeritoPessoal: [0.05]
  });

  const [values, setValues] = React.useState({
    name: '',
    name1: [0, 40],
    name2: '',
    name3: '',
    name4: '',
    name5: [0, 35],
    name6: '',
    name7: '',
    name8: '',
    name9: [0, 25],
    name10: '',
    name11: '',
    name12: [1, 5],
    name13: '',
    name14: [1, 5],
    name15: '',
    name16: '',
    name17: [1, 5],
    name18: '',
    name19: [2, 0],
    name20: '',
    name22: [6, 5],
    name23: '',
    name24: [1, 7],
    name25: '',
    name26: '',
    name27: [6, 5],
    name28: '',
    name29: [1, 5],
    name30: '',
    name31: '',
    name32: [6, 5],
    name33: '',
    name34: [1, 3],
    name35: '',
    name36: '',
    name37: [6, 5]
  });

  function handleResultTefpoi(e) {
    const result = parseFloat((0.4 * e.target.value).toFixed(2));
    setTefpoiQtd(e.target.value);

    if (result > 5) {
      toast.error('O Militar não pode obter mais de 5 nesse quesito!');
      setTefpoiResult(5);
    } else {
      setTefpoiResult(result);
    }
  }

  function handleResultTefpnp(e) {
    const result = parseFloat((0.2 * e.target.value).toFixed(2));
    setTefpnpQtd(e.target.value);

    if (result > 5) {
      toast.error('O Militar não pode obter mais de 5 nesse quesito!');
      setTefpnpResult(5);
    } else {
      setTefpnpResult(result);
    }
  }

  function handleResultOlmpheacpads(e) {
    const result = parseFloat((0.25 * e.target.value).toFixed(2));
    setOlmpheacpadsQtd(e.target.value);

    if (result > 1) {
      toast.error('O Militar não pode obter mais de 1 nesse quesito!');
      setOlmpheacpadsResult(1);
    } else {
      setOlmpheacpadsResult(result);
    }
  }

  function handleResultHedpm(e) {
    const result = parseFloat((0.25 * e.target.value).toFixed(2));
    setHedpmQtd(e.target.value);

    if (result > 1) {
      toast.error('O Militar não pode obter mais de 1 nesse quesito!');
      setHedpmResult(1);
    } else {
      setHedpmResult(result);
    }
  }

  function handleResultPdoutorado(e) {
    const result = parseFloat((2 * e.target.value).toFixed(2));
    setPdoutoradoQtd(e.target.value);

    if (result > 5.2) {
      toast.error('O Militar não pode obter mais de 1 nesse quesito!');
      setPdoutoradoResult(5.2);
    } else {
      setPdoutoradoResult(result);
    }
  }

  function handleResultDoutorado(e) {
    const result = parseFloat((1.7 * e.target.value).toFixed(2));
    setDoutoradoQtd(e.target.value);

    if (result > 5.2) {
      toast.error('O Militar não pode obter mais de 1 nesse quesito!');
      setDoutoradoResult(5.2);
    } else {
      setDoutoradoResult(result);
    }
  }

  function handleResultMestrado(e) {
    const result = parseFloat((1 * e.target.value).toFixed(2));
    setMestradoQtd(e.target.value);

    if (result > 5.2) {
      toast.error('O Militar não pode obter mais de 1 nesse quesito!');
      setMestradoResult(5.2);
    } else {
      setMestradoResult(result);
    }
  }

  return (
    <Container>
      <h3 style={{ textAlign: 'center' }}>
        FORMULÁRIO DE AVALIAÇÃO DE POTENCIAL E EXPERIÊNCIA PROFISSIONAL
      </h3>
      <hr />
      <Form>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                NOME: JOSÉ NILSON SILVA DOS SANTOS
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>RG: 35290</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>GRADUAÇÃO: CB PM</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>QUALIFICAÇÃO: QPMP-0</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                PERIODO NA GRADUAÇÃO: 6 ANOS
              </Paper>
            </Grid>
          </Grid>
        </div>
        <hr />
        <h3 style={{ textAlign: 'center' }}>Pontuações Positivas</h3>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ textAlign: 'center' }}>
              1. EXPERIÊNCIA PROFISSINAL NA GRADUAÇÃO ATUAL
            </Paper>
          </Grid>
        </Grid>
        <h4>
          1.1 - Tempo exercendo função prevista em orgão integrante da PMPA (por
          ano)
        </h4>

        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            label="Especificidades"
            style={{ width: 420 }}
            className={classes1.textField}
            value={tefpoiEs}
            onChange={e => setTefpoiEs(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            label="Valores"
            className={classes1.textField}
            value="0,40"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Quantidade"
            type="number"
            className={classes1.textField}
            value={tefpoiQtd}
            onChange={e => handleResultTefpoi(e)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="TOTAL"
            className={classes1.textField}
            value={tefpoiResult}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h4>
          1.2 - Tempo exercendo função fora da PMPA, mas de natureza PM (por
          ano)
        </h4>

        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            label="Especificidades"
            style={{ width: 420 }}
            className={classes1.textField}
            value={tefpnpEs}
            onChange={e => setTefpnpEs(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            label="Valores"
            className={classes1.textField}
            value="0,2"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Quantidade"
            className={classes1.textField}
            type="number"
            value={tefpnpQtd}
            onChange={e => handleResultTefpnp(e)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="TOTAL"
            className={classes1.textField}
            value={tefpnpResult}
            margin="normal"
            variant="outlined"
          />
        </form>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ textAlign: 'center' }}>
              2. ATIVIDADES ACADÊMICAS E DE PESQUISAS INSTITUCIONAIS NA
              GRADUAÇÃO ATUAL
            </Paper>
          </Grid>
        </Grid>
        <h4>
          2.1 - Obras literárias e manuais profissionais homologados e editados
          ou artigos cientificos publicados, afetos à Defesa Social
        </h4>

        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            label="Especificidades"
            style={{ width: 420 }}
            className={classes1.textField}
            value={olmpheacpadsEs}
            onChange={e => setOlmpheacpadsEs(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            label="Valores"
            className={classes1.textField}
            value="0,25"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Quantidade"
            type="number"
            className={classes1.textField}
            value={olmpheacpadsQtd}
            onChange={e => handleResultOlmpheacpads(e)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="TOTAL"
            className={classes1.textField}
            value={olmpheacpadsResult}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h4>
          2.2 - Habilitação para o exercício da docência e/ou policial-militar -
          30h/a
        </h4>
        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            label="Especificidades"
            style={{ width: 420 }}
            className={classes1.textField}
            value={hedpmEs}
            onChange={e => setHedpmEs(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            label="Valores"
            className={classes1.textField}
            value="0,25"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Quantidade"
            type="number"
            className={classes1.textField}
            value={hedpmQtd}
            onChange={e => handleResultHedpm(e)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="TOTAL"
            className={classes1.textField}
            value={hedpmResult}
            margin="normal"
            variant="outlined"
          />
        </form>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ textAlign: 'center' }}>
              3. QUALIFICAÇÕES PROFISSIONAIS AO LONGO DA CARREIRA
            </Paper>
          </Grid>
        </Grid>
        <h4>3.1 - Curso de carreira (requisito para a promoção)</h4>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              CAS - Total: {cas.value}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cas.mb}
                      onChange={() => setCas({ mb: true, b: false, value: 2 })}
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cas.b}
                      onChange={() =>
                        setCas({ mb: false, b: true, value: 1.5 })
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              CFP - Total: {cfp.value}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfp.mb}
                      onChange={() => setCfp({ mb: true, b: false, value: 2 })}
                      value={false}
                    />
                  }
                  label="MB"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfp.b}
                      onChange={() =>
                        setCfp({ mb: false, b: true, value: 1.5 })
                      }
                      value={false}
                    />
                  }
                  label="B"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <h4>3.2 - Titulações acadêmicas (não obrigatórias à carreira)</h4>
        <h5>Pós-Doutorado</h5>
        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            label="Especificidades"
            style={{ width: 420 }}
            className={classes1.textField}
            value={pdoutoradoEs}
            onChange={e => setPdoutoradoEs(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            label="Valores"
            className={classes1.textField}
            value="2,0"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Quantidade"
            type="number"
            className={classes1.textField}
            value={pdoutoradoQtd}
            onChange={e => handleResultPdoutorado(e)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="TOTAL"
            className={classes1.textField}
            value={pdoutoradoResult}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h5>Doutorado</h5>
        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            label="Especificidades"
            style={{ width: 420 }}
            className={classes1.textField}
            value={doutoradoEs}
            onChange={e => setDoutoradoEs(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            label="Valores"
            className={classes1.textField}
            value="1,7"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Quantidade"
            type="number"
            className={classes1.textField}
            value={doutoradoQtd}
            onChange={e => handleResultDoutorado(e)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="TOTAL"
            className={classes1.textField}
            value={doutoradoResult}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h5>Mestrado</h5>
        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            label="Especificidades"
            style={{ width: 420 }}
            className={classes1.textField}
            value={mestradoEs}
            onChange={e => setMestradoEs(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            label="Valores"
            className={classes1.textField}
            value="1,0"
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Quantidade"
            type="number"
            className={classes1.textField}
            value={mestradoQtd}
            onChange={e => handleResultMestrado(e)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="TOTAL"
            className={classes1.textField}
            value={mestradoResult}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h5>Pós-Graduação</h5>
        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            id="id35"
            InputLabelProps={{
              shrink: true
            }}
            label="Especificidades"
            className={classes1.textField}
            value={values.name33}
            onChange={() => setValues('name33')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="id36"
            label="Valores"
            className={classes1.textField}
            value={[1, 3]}
            onChange={() => setValues('name34')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id37"
            InputLabelProps={{
              shrink: true
            }}
            label="Quantidade"
            className={classes1.textField}
            value={values.name35}
            onChange={() => setValues('name35')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id38"
            InputLabelProps={{
              shrink: true
            }}
            label="TOTAL"
            className={classes1.textField}
            value={values.name36}
            onChange={() => setValues('name36')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            error
            id="id39"
            label="PONTUAÇÃO MÁXIMA"
            className={classes1.textField}
            value={[6, 5]}
            onChange={() => setValues('name37')}
            margin="normal"
            variant="outlined"
          />
        </form>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ textAlign: 'center' }}>
              4. MEDALHAS E CONDECORAÇÕES
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Ordem do Mérito Grão Pará: NÃO:{' '}
              <Radio
                color="primary"
                checked={selectedValue === false}
                onChange={false}
                value={selectedValue.checkMedalGrao}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'G' }}
              />{' '}
              SIM{' '}
              <Radio
                checked={selectedValue === true}
                onChange={() => setSelectedValue(true)}
                value={0.25}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'H' }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
}
