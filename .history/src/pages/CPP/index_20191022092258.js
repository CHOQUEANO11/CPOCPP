import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/PersonAdd';
import TrashIcon from '@material-ui/icons/Clear';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CreateIcon from '@material-ui/icons/Create';

import {
  Container,
  List,
  Loading,
  Form,
  Moldura,
  ContainerInfo
} from './styles';
import cpp01 from '../../assets/cpp01.png';
import cpp02 from '../../assets/cpp02.png';
import cpp03 from '../../assets/cpp03.png';
import { apiInternal, api } from '../../services/api';
import FormCPP01 from '../../components/FormCPP01';
import FormCPP02 from '../../components/FormCPP02';

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
  extendedIcon: {
    marginLeft: 10
  },
  card: {
    maxWidth: 345,
    maxHeight: 345,
    width: 345,
    height: 284,
    marginTop: 16
  },
  media: {
    height: 140
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

export default function Cpo() {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);
  const [elogios, setElogios] = useState([]);
  const [punicaos, setPunicaos] = useState([]);
  const [tempos, setTempos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(true);
  const [person, setPerson] = useState({});
  const [Img, setImg] = useState('');
  const [infoCard, setInfoCard] = useState([]);
  const [formCPP01, setFormCPP01] = useState(false);
  const [formCPP02, setFormCPP02] = useState(false);
  const [body, setBody] = useState(true);
  const [compete, setCompete] = useState({});

  useEffect(() => {
    setLoading(true);
    async function handleAllPeople() {
      const response = await apiInternal.get('compete');
      await setPeople(response.data);
      await setLoading(false);
    }
    handleAllPeople();
  }, []);

  async function handleSearch(e) {
    if (await (e.length > 8)) {
      const response = await apiInternal.get(`compete/${e}`);
      await setPeople(response.data);
    }
  }

  async function handleSerachId(e) {
    await setImg(e.idpessoa.toString());
    await setLoading(true);
    await setCompete(e);

    const searchPerson = await api.get(
      `api/v1/pessoa/condecoracao/find/${e.nome}`
    );
    await setPerson(searchPerson.data.payload[0]);

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
    setInfoCard('');
  }

  function information(a, e) {
    if (e.length <= 0) {
      toast.error('O Militar não possui informações no item escolhido!');
    }

    if (a === 0) {
      const array = e.map(item => `${item.punicao}`);
      setInfoCard(array);
    }

    if (a === 1) {
      const array = e.map(
        item =>
          `
          Publicado em: ${format(
            new Date(item.data_condecoracao),
            "d 'de' MMMM 'de' yyyy",
            { locale: pt }
          )}
          ${item.doc_pub}`
      );
      setInfoCard(array);
    }

    if (a === 2) {
      const array = e.map(
        item => `Publicado em: ${format(
          new Date(item.data_elogio),
          "d 'de' MMMM 'de' yyyy",
          { locale: pt }
        )}
       ${String(item.doc_pub)}`
      );
      setInfoCard(array);
    }
  }

  const classes = useStyles();
  let foto = Img.split('');
  foto = foto.join('/');
  const url = `https://sigpol.pm.pa.gov.br/upload/pessoa/${foto}/foto.jpg`;

  return (
    <>
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
      {formCPP01 && (
        <FormCPP01
          person={person}
          compete={compete}
          elogio={elogios.length}
          tempo={tempos}
          punicao={punicaos.length}
          showForm={() => setFormCPP01(!formCPP01) + setBody(!body)}
        />
      )}
      {formCPP02 && (
        <FormCPP02
          person={person}
          compete={compete}
          showForm={() => setFormCPP02(!formCPP02) + setBody(!body)}
        />
      )}
      {body && (
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
              placeholder="Pesquisar militar no limite de vaga CPP (Nome)"
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
          <Container>
            {card &&
              people.map(item => (
                <List key={item.idpessoa} onClick={() => handleSerachId(item)}>
                  {item.hierarquia > 6 && (
                    <div>
                      {item.graduacao} {item.nome} - {item.sigla_unidade}{' '}
                      {item.formcpp02_id !== null && (
                        <strong>| Formulário 01 preenchido,</strong>
                      )}{' '}
                      {item.formcpp01_id !== null && (
                        <strong>Formulário 02 preenchido,</strong>
                      )}
                    </div>
                  )}
                </List>
              ))}
            {!card && (
              <>
                <Form>
                  <div>
                    <Moldura>
                      <img align="center" src={url} alt={person.nome_guerra} />
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
                      onClick={() => information(0, punicaos)}
                    />
                    <TextField
                      id="outlined-name"
                      label="Qtd Condecoração"
                      className={classes.textField}
                      style={{ width: 140 }}
                      value={person.Condecoracoes.length}
                      margin="normal"
                      variant="outlined"
                      onClick={() => information(1, person.Condecoracoes)}
                    />
                    <TextField
                      id="outlined-name"
                      label="Qtd Elogio"
                      className={classes.textField}
                      style={{ width: 100 }}
                      value={elogios.length}
                      margin="normal"
                      variant="outlined"
                      onClick={() => information(2, elogios)}
                    />
                  </div>
                </Form>
                <ContainerInfo>
                  <TextField
                    id="outlined-full-width"
                    label="Informações"
                    className={classes.textField}
                    multiline
                    rows="13"
                    style={{
                      width: 400,
                      flex: 1
                    }}
                    placeholder="ex: Elogio ..."
                    helperText="Clique onde houver QTD para verificar o conteúdo!"
                    margin="normal"
                    variant="outlined"
                    value={infoCard}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <Card
                    className={classes.card}
                    onClick={() => setBody(false) + setFormCPP02(true)}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={cpp01}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          style={{ fontSize: 16 }}
                          component="p"
                        >
                          FICHA DE AVALIAÇÃO DE DESEMPENHO PROFISSIONAL DO PRAÇA
                        </Typography>
                        <br />

                        <Typography
                          variant="body2"
                          style={{ color: '#EB144C' }}
                          component="p"
                        >
                          {compete.formcpp02_id !== null ? (
                            <strong>OK, já foi preenchido</strong>
                          ) : (
                            <strong>*clique para preencher</strong>
                          )}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  &nbsp;&nbsp;
                  <Card
                    className={classes.card}
                    onClick={() => setBody(false) + setFormCPP01(true)}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={cpp02}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          style={{ fontSize: 16 }}
                          component="p"
                        >
                          FICHA DE INFORMAÇÃO FUNCIONAL{' '}
                          {compete.formcpp01_id !== null && (
                            <strong style={{ color: '#EB144C' }}>
                              {' '}
                              | Preenchido
                            </strong>
                          )}
                        </Typography>
                        <br />
                        <br />
                        <br />
                        {compete.formcpp01_id === null && <br />}
                        <Typography
                          variant="body2"
                          style={{ color: '#EB144C' }}
                          component="p"
                        >
                          *clique para preencher
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  &nbsp;&nbsp;
                  {person.Graduacao.hierarquia > 6 &&
                    person.Graduacao.hierarquia < 17 && (
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={cpp03}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              style={{ fontSize: 16 }}
                              component="p"
                            >
                              FICHA DE AVALIAÇÃO DE POTENCIAL E EXPERIÊNCIA
                              PROFISSIONAL
                            </Typography>
                            <br />
                            <br />
                            <Typography
                              variant="body2"
                              style={{
                                color: '#EB144C'
                              }}
                              component="p"
                            >
                              *clique para preencher
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    )}
                </ContainerInfo>
                <div
                  style={{
                    textAlign: 'right',
                    marginRight: 45,
                    marginTop: -10
                  }}
                >
                  <Fab
                    variant="extended"
                    color="secondary"
                    aria-label="add"
                    className={classes.margin}
                  >
                    Assinar{' '}
                    <CreateIcon className={classes.extendedIcon} size={15} />
                  </Fab>
                </div>
              </>
            )}
          </Container>
        </>
      )}
    </>
  );
}
