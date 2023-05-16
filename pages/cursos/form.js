import Pagina from '@/components/Pagina'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const form = () => {

    const { register, handleSubmit } = useForm()

    function Enviar(dados) {
        console.log(dados)
    }

    return (
        <>
            <Pagina titulo="Cursos" title="QaSchool" navBarLink="/cursos">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="Nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="First name"  {...register('Nome')} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="Duracao">
                                <Form.Label>Duração</Form.Label>
                                <Form.Control placeholder="Duração" {...register('Duracao')} />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="modalidade">
                                <Form.Label>Modalidade</Form.Label>
                                <Form.Control placeholder="Modalidade" {...register('Modalidade')} />
                            </Form.Group>
                        </Col>     
                    </Row>

                    <Form.Group className="mb-3 mt-2" controlId="formGridAddress1">
                        <Form.Label>Endereço de e-mail</Form.Label>
                        <Form.Control placeholder="1234 Main St" {...register('Email')} />
                    </Form.Group>

                    <Button onClick={handleSubmit(Enviar)}>Enviar</Button>
                </Form>

            </Pagina>
        </>

    )
}

export default form