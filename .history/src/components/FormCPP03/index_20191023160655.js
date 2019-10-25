import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';

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

  const [casstate, setCasState] = useState({
    checkedA: [2, 0],
    checkedB: [1, 5]
  });

  const [cfpstate, setCfpState] = useState({
    checkedA: [2, 0],
    checkedB: [1, 5]
  });

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

  const handleChange3 = name3 => event => {
    setValues({ ...values, [name3]: event.target.value });
  };
  const handleChange4 = name4 => event => {
    setValues({ ...values, [name4]: event.target.value });
  };
  const handleChange5 = name5 => event => {
    setValues({ ...values, [name5]: event.target.value });
  };
  const handleChange6 = name6 => event => {
    setValues({ ...values, [name6]: event.target.value });
  };
  const handleChange7 = name7 => event => {
    setValues({ ...values, [name7]: event.target.value });
  };
  const handleChange8 = name8 => event => {
    setValues({ ...values, [name8]: event.target.value });
  };
  const handleChange9 = name9 => event => {
    setValues({ ...values, [name9]: event.target.value });
  };
  const handleChange10 = name10 => event => {
    setValues({ ...values, [name10]: event.target.value });
  };
  const handleChange11 = name11 => event => {
    setValues({ ...values, [name11]: event.target.value });
  };
  const handleChange12 = name12 => event => {
    setValues({ ...values, [name12]: event.target.value });
  };
  const handleChange13 = name13 => event => {
    setValues({ ...values, [name13]: event.target.value });
  };
  const handleChange14 = name14 => event => {
    setValues({ ...values, [name14]: event.target.value });
  };
  const handleChange15 = name15 => event => {
    setValues({ ...values, [name15]: event.target.value });
  };
  const handleChange16 = name16 => event => {
    setValues({ ...values, [name16]: event.target.value });
  };
  const handleChange17 = name17 => event => {
    setValues({ ...values, [name17]: event.target.value });
  };

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
        <h4 style={{ textAlign: 'center' }}>
          1.1 - Tempo exercendo função prevista em orgão integrante da PMPA (por
          ano)
        </h4>

        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            label="Especificidades"
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
            onChange={e => setTefpoiQtd(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="TOTAL"
            className={classes1.textField}
            value={parseFloat((0.4 * tefpoiQtd).toFixed(2))}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error
            id="id5"
            label="PONTUAÇÃO MÁXIMA"
            className={classes1.textField}
            value={[5, 0]}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h4 style={{ textAlign: 'center' }}>
          1.1 - Tempo exercendo função fora da PMPA, mas de natureza PM (por
          ano)
        </h4>

        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            id="id5"
            label="Especificidades"
            className={classes1.textField}
            value={values.name4}
            onChange={handleChange4('name4')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="id6"
            label="Valores"
            className={classes1.textField}
            value={values.name5}
            onChange={handleChange5('name5')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id7"
            label="Quantidade"
            className={classes1.textField}
            value={values.name6}
            onChange={handleChange6('name6')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id8"
            label="TOTAL"
            className={classes1.textField}
            value={values.name7}
            onChange={handleChange7('name7')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error
            id="id9"
            label="PONTUAÇÃO MÁXIMA"
            className={classes1.textField}
            value={[5, 0]}
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
        <h4 style={{ textAlign: 'center' }}>
          2.1 - Obras literárias e manuais profissionais homologados e editados
          ou artigos cientificos publicados, afetos à Defesa Social
        </h4>

        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            id="id10"
            label="Especificidades"
            className={classes1.textField}
            value={values.name8}
            onChange={handleChange8('name8')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="id11"
            label="Valores"
            className={classes1.textField}
            value={values.name9}
            onChange={handleChange9('name9')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id12"
            label="Quantidade"
            className={classes1.textField}
            value={values.name10}
            onChange={handleChange10('name10')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id13"
            label="TOTAL"
            className={classes1.textField}
            value={values.name11}
            onChange={handleChange11('name11')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error
            id="id14"
            label="PONTUAÇÃO MÁXIMA"
            className={classes1.textField}
            value={[1, 0]}
            onChange={handleChange12('name12')}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h4 style={{ textAlign: 'center' }}>
          2.1 - Habilitação para o exercício da docência e/ou policial-militar -
          30h/a
        </h4>
        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            id="id15"
            label="Especificidades"
            className={classes1.textField}
            value={values.name13}
            onChange={handleChange13('name13')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="id16"
            label="Valores"
            className={classes1.textField}
            value={values.name14}
            onChange={handleChange14('name14')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id17"
            label="Quantidade"
            className={classes1.textField}
            value={values.name15}
            onChange={handleChange15('name15')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id18"
            label="TOTAL"
            className={classes1.textField}
            value={values.name16}
            onChange={handleChange16('name16')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            error
            id="id19"
            label="PONTUAÇÃO MÁXIMA"
            className={classes1.textField}
            value={[1, 5]}
            onChange={handleChange17('name17')}
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
        <h4 style={{ textAlign: 'center' }}>
          3.1 - Curso de carreira (requisito para a promoção)
        </h4>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              CURSO DE APERFEIÇOAMENTO DE SARGENTO(CAS): MB:{' '}
              <Switch
                checked={casstate === false}
                onChange={() => setCasState(false)}
                value={casstate.checkedA}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />{' '}
              || B:{' '}
              <Switch
                checked={casstate === true}
                onChange={() => setCasState(true)}
                value={casstate.checkedB}
                color="secondary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              CURSO DE FORMAÇÃO DE PRAÇAS: MB:{' '}
              <Switch
                checked={cfpstate === false}
                onChange={() => setCfpState(false)}
                value={cfpstate.checkedA}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />{' '}
              || B:{' '}
              <Switch
                checked={cfpstate === true}
                onChange={() => setCfpState(true)}
                value={cfpstate.checkedB}
                color="secondary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </Paper>
          </Grid>
        </Grid>
        <h4 style={{ textAlign: 'center' }}>
          3.2 - Titulações acadêmicas (não obrigatórias à carreira)
        </h4>
        <h5 style={{ textAlign: 'center' }}>Pós-Doutorado</h5>
        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            id="id20"
            label="Especificidades"
            className={classes1.textField}
            value={values.name18}
            onChange={() => setValues('name18')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="id21"
            label="Valores"
            className={classes1.textField}
            value={[2, 0]}
            onChange={() => setValues('name19')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id22"
            label="Quantidade"
            className={classes1.textField}
            value={values.name20}
            onChange={() => setValues('name20')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id23"
            label="TOTAL"
            className={classes1.textField}
            value={values.name21}
            onChange={() => setValues('name21')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            error
            id="id24"
            label="PONTUAÇÃO MÁXIMA"
            className={classes1.textField}
            value={[6, 5]}
            onChange={() => setValues('name22')}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h5 style={{ textAlign: 'center' }}>Doutorado</h5>
        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            id="id25"
            label="Especificidades"
            className={classes1.textField}
            value={values.name23}
            onChange={() => setValues('name23')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="id26"
            label="Valores"
            className={classes1.textField}
            value={[1, 7]}
            onChange={() => setValues('name24')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id27"
            label="Quantidade"
            className={classes1.textField}
            value={values.name25}
            onChange={() => setValues('name25')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id28"
            label="TOTAL"
            className={classes1.textField}
            value={values.name26}
            onChange={() => setValues('name26')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            error
            id="id29"
            label="PONTUAÇÃO MÁXIMA"
            className={classes1.textField}
            value={[6, 5]}
            onChange={() => setValues('name27')}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h5 style={{ textAlign: 'center' }}>Mestrado</h5>
        <form className={classes1.container} noValidate autoComplete="off">
          <TextField
            id="id30"
            label="Especificidades"
            className={classes1.textField}
            value={values.name28}
            onChange={() => setValues('name28')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="id31"
            label="Valores"
            className={classes1.textField}
            value={[1, 5]}
            onChange={() => setValues('name29')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id32"
            label="Quantidade"
            className={classes1.textField}
            value={values.name30}
            onChange={() => setValues('name30')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="id33"
            label="TOTAL"
            className={classes1.textField}
            value={values.name31}
            onChange={() => setValues('name31')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            error
            id="id34"
            label="PONTUAÇÃO MÁXIMA"
            className={classes1.textField}
            value={[6, 5]}
            onChange={() => setValues('name32')}
            margin="normal"
            variant="outlined"
          />
        </form>
        <h5 style={{ textAlign: 'center' }}>Pós-Graduação</h5>
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
