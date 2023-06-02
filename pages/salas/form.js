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
  
    function Enviar(dados) {
        axios.post("/api/salas/salas", dados)
        push("/salas")
    }

    return (
        <>
            <Pagina titulo="Salas" title="QaSchool" navBarLink="/salas">
                <Form onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="NomeSala">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome da sala"  {...register('Nome', { required: true })} />
                                {errors.NomeSala && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Capacidade">
                                <Form.Label>Capacidade de alunos</Form.Label>
                                <Form.Control placeholder="Capacidade de alunos" {...register('CapacidadeSala', { required: true })} />
                                {errors.Capacidade && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="TipoSala">
                                <Form.Label>Tipo de sala</Form.Label>
                                <Form.Select aria-label="Não definida" {...register('TipoSala')}>
                                    <option value="Sala teórica">Sala teórica</option>
                                    <option value="Sala de pintura">Sala de pintura</option>
                                    <option value="Sala de redes">Sala de redes</option>
                                    <option value="Sala do Júri">Sala do Júri</option>
                                    <option value="Laboratório de computadores">Laboratório de computadores</option>
                                    <option value="Laboratório científico">Laboratório científico</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-success" onClick={handleSubmit(Enviar)}>Salvar</Button>
                    <Link href="/salas" className='btn btn-outline-danger mx-2'> voltar</Link>
                </Form>
            </Pagina>
        </>
    )
}

export default form
