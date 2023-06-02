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
            axios.get(`/api/disciplinas/${query.id}`).then(result => {
                const disciplinas = result.data


                console.log(disciplinas)
                for (let atributo in disciplinas) {
                    setValue(atributo,disciplinas[atributo])
                }
            })
        }
    }, [query.id])


    function Enviar(dados) {
        axios.put(`/api/disciplinas/${query.id}`,dados)

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