import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Home.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Home = () => {
  function createData(nome, telefone, cpf) {
    return { nome, telefone, cpf };
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setRows((arr) => [...arr, createData(nome, telefone, cpf)]);
    setNome("")
    setTelefone("")
    setCpf("")
  };

  const [rows, setRows] = useState([]);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <>
      <div className="view-home">
        <form onSubmit={handleSubmit}>
          <TextField
            className="inputs"
            id="nome"
            value={nome}
            name="nome"
            label="Nome"
            variant="standard"
            fullWidth={true}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <TextField
            className="inputs"
            id="nome"
            name="telefone"
            value={telefone}
            label="Telefone"
            variant="standard"
            fullWidth={true}
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />
          <TextField
            className="inputs"
            id="nome"
            label="Cpf"
            name="cpf"
            value={cpf}
            variant="standard"
            fullWidth={true}
            onChange={(e) => {
              setCpf(e.target.value);
            }}
          />
          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
        </form>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Telefone</TableCell>
                <TableCell align="right">CPF</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.nome}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nome}
                  </TableCell>
                  <TableCell align="right">{row.telefone}</TableCell>
                  <TableCell align="right">{row.cpf}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Home;
