import Pagina from '@/components/Pagina'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Col, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ disciplinas, setDisciplinas] = useState([])


    useEffect(() => {
        setDisciplinas(getDisciplinas())
    }, [])

    function getDisciplinas() {
        return JSON.parse(window.localStorage.getItem("Cursos")) ?? []
    }

    function Enviar(dados) {
        axios.post("/api/disciplinas/disciplinas", dados)
        push("/disciplinas")
    }

    return (
        <>
            <Pagina titulo="Disciplinas" title="QaSchool" navBarLink="/disciplinas">
                <Form onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Curso">
                                <Form.Label>Curso</Form.Label>
                                <Form.Select aria-label="Default select example" {...register('Nome')}>
                                    {Object.keys(disciplinas).length === 0 ?
                                        <option>Cursos não cadastrados.</option>
                                        :
                                        disciplinas.map(item => (
                                            <option value={item.Nome}>{item.Nome}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Disciplina">
                                <Form.Label>Disciplina</Form.Label>
                                <Form.Control placeholder="Nome da disciplina" {...register('Disciplina', { required: true })} />

                                {errors.Disciplina && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-success" onClick={handleSubmit(Enviar)}>Salvar</Button>
                    <Link href="/disciplinas" className='btn btn-outline-danger mx-2'> voltar</Link>
                </Form>
            </Pagina>
        </>
    )
}

export default form
