import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { CgFolderRemove, CgPen } from 'react-icons/cg'

export default function Home() {
  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get("/api/disciplinas/disciplinas").then(result => (
      setDisciplinas(result.data)
    ))
  }

  function removeItem(itemId) {
    axios.delete(`/api/disciplinas/${itemId}`)
    getAll()
  }

  return (
    <>
      <Pagina titulo="Disciplinas" title="QaSchool">
        <Link className="btn btn-primary mb-3" href="/disciplinas/form">Cadastrar curso</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <CgFolderRemove />
              </th>
              <th>Nome</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {
              disciplinas.map((item, index) => (
                <tr key={item.id}>
                  <td className="d-flex">
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Remover curso</Tooltip>}>
                      <span className="d-inline-block" style={{ marginRight: "10px" }}>
                        <CgFolderRemove onClick={() => removeItem(item.id)} />
                      </span>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar curso</Tooltip>}>
                      <span className="d-inline-block">
                        <Link href={`/disciplinas/${item.id}`}>
                          <CgPen size={16} />
                        </Link>
                      </span>
                    </OverlayTrigger>
                  </td>
                  <td>{item.Nome}</td>
                  <td>{item.Curso}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  )
}
