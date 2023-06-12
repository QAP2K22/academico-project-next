import Pagina from '@/components/Pagina'
import axios from 'axios';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import errosData from '@/functions/validator';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
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
                <Form noValidate onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control isInvalid={errors.Nome} placeholder="Nome do aluno" {...register('Nome', errosData["Professores"]["Nome"])} />

                                {errors.Nome && <Form.Control.Feedback type="invalid">
                                    {errors.Nome?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Cpf">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control isInvalid={errors.CPF} placeholder="CPF do aluno" {...register('CPF', errosData["Professores"]["CPF"])} />

                                {errors.CPF && <Form.Control.Feedback type="invalid">
                                    {errors.CPF?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Matricula">
                                <Form.Label>Matrícula</Form.Label>
                                <Form.Control isInvalid={errors.Matricula} placeholder="Matrícula do aluno" {...register('Matricula', errosData["Professores"]["Matricula"])} />

                                {errors.Matricula && <Form.Control.Feedback type="invalid">
                                    {errors.Matricula?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control isInvalid={errors.Email} placeholder="Email do aluno" {...register('Email', errosData["Professores"]["Email"])} />

                                {errors.Email && <Form.Control.Feedback type="invalid">
                                    {errors.Email?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control isInvalid={errors.Telefone} placeholder="Telefone do aluno" {...register('Telefone', errosData["Professores"]["Telefone"])} />

                                {errors.Telefone && <Form.Control.Feedback type="invalid">
                                    {errors.Telefone?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Cep">
                                <Form.Label>Cep</Form.Label>
                                <Form.Control isInvalid={errors.Cep} placeholder="Cep do aluno" {...register('Cep', errosData["Professores"]["Cep"])} />

                                {errors.Cep && <Form.Control.Feedback type="invalid">
                                    {errors.Cep?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Logradouro">
                                <Form.Label>Logradouro</Form.Label>
                                <Form.Control isInvalid={errors.Logradouro} placeholder="Logradouro do aluno" {...register('Logradouro', errosData["Professores"]["Logradouro"])} />

                                {errors.Logradouro && <Form.Control.Feedback type="invalid">
                                    {errors.Logradouro?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Complemento">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control isInvalid={errors.Complemento} placeholder="Complemento" {...register('Complemento', errosData["Professores"]["Complemento"])} />

                                {errors.Complemento && <Form.Control.Feedback type="invalid">
                                    {errors.Complemento?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Numero">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control isInvalid={errors.Numero} placeholder="Número" {...register('Numero', errosData["Professores"]["Numero"])} />

                                {errors.Numero && <Form.Control.Feedback type="invalid">
                                    {errors.Numero?.message}
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Bairro">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control isInvalid={errors.Bairro} placeholder="Bairro" {...register('Bairro', errosData["Professores"]["Bairro"])} />

                                {errors.Bairro && <Form.Control.Feedback type="invalid">
                                    {errors.Bairro?.message}
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
