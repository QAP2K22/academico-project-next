import Pagina from '@/components/Pagina'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();

    function Enviar(dados) {
        axios.post("/api/alunos/alunos", dados)
        push("/alunos")
    }

    return (
        <>
            <Pagina titulo="Alunos" title="QaSchool" navBarLink="/alunos">
                <Form onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control placeholder="Nome do aluno" {...register('Nome', { required: true })} />

                                {errors.Nome && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Cpf">
                                <Form.Label>Cpf</Form.Label>
                                <Form.Control placeholder="CPF do aluno" {...register('CPF', { required: true })} />

                                {errors.Cpf && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Matricula">
                                <Form.Label>Matricula</Form.Label>
                                <Form.Control placeholder="Matricula do aluno" {...register('Matricula', { required: true })} />

                                {errors.Matricula && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email do aluno" {...register('Email', { required: true })} />

                                {errors.Email && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control placeholder="Telefone do aluno" {...register('Telefone', { required: true })} />

                                {errors.Telefone && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Cep">
                                <Form.Label>Cep</Form.Label>
                                <Form.Control placeholder="Cep do aluno" {...register('Cep', { required: true })} />

                                {errors.Cep && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Logradouro">
                                <Form.Label>Logradouro</Form.Label>
                                <Form.Control placeholder="Logradouro do aluno" {...register('Logradouro', { required: true })} />

                                {errors.Logradouro && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Complemento">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control placeholder="Complemento do aluno" {...register('Complemento', { required: true })} />

                                {errors.Complemento && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Numero">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control placeholder="Numero do aluno" {...register('Numero', { required: true })} />

                                {errors.Numero && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Bairro">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control placeholder="Bairro do aluno" {...register('Bairro', { required: true })} />

                                {errors.Bairro && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-success" onClick={handleSubmit(Enviar)}>Salvar</Button>
                    <Link href="/alunos" className='btn btn-outline-danger mx-2'> voltar</Link>
                </Form>
            </Pagina>
        </>
    )
}

export default form
