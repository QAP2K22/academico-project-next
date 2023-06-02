import Pagina from '@/components/Pagina'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Col, Container, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const form = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (query.id) {
            axios.get(`/api/professores/${query.id}`).then(result => {
                const professores = result.data

                for (let atributo in professores) {
                    setValue(atributo, professores[atributo])
                }
            })
        }
    }, [query.id])


    function Enviar(dados) {
        axios.put(`/api/professores/${query.id}`, dados)

        push("/professores")
    }
    return (
        <>
             <Pagina titulo="Professores" title="QaSchool" navBarLink="/professores">
                <Form onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control placeholder="Nome do professor" {...register('Nome', { required: true })} />

                                {errors.Nome && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Cpf">
                                <Form.Label>Cpf</Form.Label>
                                <Form.Control placeholder="CPF do professor" {...register('CPF', { required: true })} />

                                {errors.Cpf && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Matricula">
                                <Form.Label>Matricula</Form.Label>
                                <Form.Control placeholder="Matricula do professor" {...register('Matricula', { required: true })} />

                                {errors.Matricula && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Salario">
                                <Form.Label>Salario</Form.Label>
                                <Form.Control placeholder="Salario do professor" {...register('Salario', { required: true })} />

                                {errors.Salario && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email do professor" {...register('Email', { required: true })} />

                                {errors.Email && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control placeholder="Telefone do professor" {...register('Telefone', { required: true })} />

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
                                <Form.Control placeholder="Cep do professor" {...register('Cep', { required: true })} />

                                {errors.Cep && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Logradouro">
                                <Form.Label>Logradouro</Form.Label>
                                <Form.Control placeholder="Logradouro do professor" {...register('Logradouro', { required: true })} />

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
                                <Form.Control placeholder="Complemento do professor" {...register('Complemento', { required: true })} />

                                {errors.Complemento && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Numero">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control placeholder="Numero do professor" {...register('Numero', { required: true })} />

                                {errors.Numero && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Bairro">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control placeholder="Bairro do professor" {...register('Bairro', { required: true })} />

                                {errors.Bairro && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-success" onClick={handleSubmit(Enviar)}>Salvar</Button>
                    <Link href="/professores" className='btn btn-outline-danger mx-2'> voltar</Link>
                </Form>
            </Pagina>
        </>
    )
}

export default form