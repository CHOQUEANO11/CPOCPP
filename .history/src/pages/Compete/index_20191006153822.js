import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TrashIcon from '@material-ui/icons/Clear';
import DirectionsIcon from '@material-ui/icons/PersonAdd';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import { CardMedia } from '@material-ui/core';

import api from '../../services/api';

import { Container, List, Loading, Form, Moldura } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    flexFlow: 'wrap',
    justifyContent: 'center'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    flex: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: 800
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function Compete() {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);
  const [elogios, setElogios] = useState([]);
  const [punicaos, setPunicaos] = useState([]);
  const [tempos, setTempos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(true);
  const [person, setPerson] = useState({});
  const [Img, setImg] = useState('');

  const classes = useStyles();

  async function handleSearch(e) {
    if (await (e.length > 8)) {
      const response = await api.get(`api/v1/pessoa/condecoracao/find/${e}`);

      await setPeople(response.data.payload);
    }
  }

  async function handleSerachId(e) {
    await setImg(e.idpessoa.toString());
    await setPerson(e);
    await setLoading(true);
    const elogio = await api.get(`api/v1/pessoa/elogio/id/${e.idpessoa}`);
    if (elogio.data.payload.elogios.length >= 0) {
      setLoading(false);
    }
    await setElogios(elogio.data.payload.elogios);

    const punicao = await api.get(`api/v1/pessoa/punicao/id/${e.idpessoa}`);
    await setPunicaos(punicao.data.payload.punicoes);

    const tempo = await api.get(`api/v1/pessoa/tempo/id/${e.idpessoa}`);
    await setTempos(tempo.data.payload);
    await setCard(false);
  }

  function openInfo() {
    setCard(true);
    setSearch('');
  }

  let foto = Img.split('');
  foto = foto.join('/');
  const url = `https://sigpol.pm.pa.gov.br/upload/pessoa/${foto}/foto.jpg`;

  return (
    <>
      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          onChange={e =>
            handleSearch(e.target.value) + setSearch(e.target.value)
          }
          className={classes.input}
          value={search}
          placeholder="Pesquisar militar"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          {card ? <DirectionsIcon /> : <TrashIcon onClick={openInfo} />}
        </IconButton>
      </Paper>

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

      <Container>
        {card &&
          people.map(item => (
            <List key={item.idpessoa} onClick={() => handleSerachId(item)}>
              {item.Graduacao.graduacao} {item.rg} {item.nome} -{' '}
              {item.SiglaUnidade}
            </List>
          ))}
        {!card && (
          <>
            <Form>
              <div>
                <Moldura>
                  <img align="center" src={url} alt="oi" />
                </Moldura>
                <TextField
                  id="outlined-name"
                  label="Nome completo"
                  className={classes.textField}
                  value={person.nome}
                  style={{ width: 400 }}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="P/G | Nome de Guerra"
                  className={classes.textField}
                  value={`${person.Graduacao.graduacao} ${person.nome_guerra}`}
                  style={{ width: 200 }}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="RG"
                  className={classes.textField}
                  style={{ width: 75 }}
                  value={person.rg}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="CPF"
                  className={classes.textField}
                  style={{ width: 130 }}
                  value={person.cpf}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Unidade"
                  className={classes.textField}
                  style={{ width: 80 }}
                  value={person.SiglaUnidade}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Tempo de serviço"
                  className={classes.textField}
                  style={{ width: 220 }}
                  value={tempos.tempoServicoEfetivo}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Comportamento"
                  className={classes.textField}
                  style={{ width: 100 }}
                  value="Excelente"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Inclusão"
                  className={classes.textField}
                  style={{ width: 120 }}
                  value="16/11/2009"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Ultima Promoção"
                  className={classes.textField}
                  style={{ width: 230 }}
                  value="25/09/2017 | BG 123"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Escolaridade"
                  className={classes.textField}
                  style={{ width: 300 }}
                  value="Superior Completo"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Qtd Punição"
                  className={classes.textField}
                  style={{ width: 100 }}
                  value={punicaos.length}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Qtd Condecoração"
                  className={classes.textField}
                  style={{ width: 140 }}
                  value={person.Condecoracoes.length}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Qtd Elogio"
                  className={classes.textField}
                  style={{ width: 100 }}
                  value={elogios.length}
                  margin="normal"
                  variant="outlined"
                />
              </div>
            </Form>
            <TextField
              id="outlined-full-width"
              label="Informações"
              style={{ margin: 8 }}
              placeholder="ex: Elogio ..."
              helperText="Clique onde houver QTD para verificar o conteúdo!"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
            />
          </>
        )}
      </Container>
    </>
  );
}
