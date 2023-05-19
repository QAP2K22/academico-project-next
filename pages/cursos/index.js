import Pagina from "@/components/Pagina";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { CgFolderRemove } from 'react-icons/cg'

export default function Home() {
  const [cursos, setCursos] = useState([])
  useEffect(() => {
    setCursos(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem("Cursos")) ?? []
  }

  function removeItem(iditem) {
    const storage = getAll()
    storage.slice(iditem,1)
    /* window.localStorage.setItem("Cursos",storage) */


  }


  return (
    <>
      <Pagina titulo="Cursos" title="QaSchool">
        <Link className="btn btn-primary mb-3" href="/cursos/form">Cadastrar curso</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <CgFolderRemove />
              </th>
              <th>Nome</th>
              <th>Duracao</th>
              <th>Modalidade</th>
            </tr>
          </thead>
          <tbody>
            {
              cursos.map((item, index) => (
                <tr key={index}>
                  <td>
                    <CgFolderRemove onClick={() => removeItem(index)} />
                  </td>
                  <td>{item.Nome}</td>
                  <td>{item.Duracao}</td>
                  <td>{item.Modalidade}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  )
}
