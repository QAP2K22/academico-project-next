import Pagina from '@/components/Pagina'
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { Col, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();

    function Enviar(dados) {
        axios.post("/api/disciplinas/", dados)

        const cursos = JSON.parse(window.localStorage.getItem("Disciplinas")) ?? []
        cursos.push(dados)
        window.localStorage.setItem("Disciplinas", JSON.stringify(cursos))
        push("/disciplinas")
    }

    return (
        <>
            <Pagina titulo="Disciplinas" title="QaSchool" navBarLink="/disciplinas">
                <Form onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome do curso"  {...register('Nome')} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Duracao">
                                <Form.Label>Curso</Form.Label>
                                <Form.Control placeholder="Duração do curso" {...register('Curso')} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button className="btn btn-primary" onClick={handleSubmit(Enviar)}>Enviar</Button>
                </Form>
            </Pagina>
        </>
    )
}

export default form