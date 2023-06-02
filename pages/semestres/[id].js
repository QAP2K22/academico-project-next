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
            axios.get(`/api/semestres/${query.id}`).then(result => {
                const semestres = result.data

                for (let atributo in semestres) {
                    setValue(atributo, semestres[atributo])
                }
            })
        }
    }, [query.id])


    function Enviar(dados) {
        axios.put(`/api/semestres/${query.id}`, dados)

        push("/semestres")
    }
    return (
        <>
            <Pagina titulo="Semestres" title="QaSchool" navBarLink="/semestres">
                <Form onSubmit={handleSubmit(Enviar)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="NomeSemestre">
                                <Form.Label>Tipo de sala</Form.Label>
                                <Form.Select aria-label="Não definido" {...register('NomeSemestre')}>
                                    <option value="1º Semestre">1º Semestre</option>
                                    <option value="2° Semestre">2° Semestre</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="DataInicio">
                                <Form.Label>Data de início</Form.Label>
                                <Form.Control placeholder="Início do semestre" type="date" {...register('DataInicio', { required: true })} />
                                {errors.DataInicio && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="DataFim">
                                <Form.Label>Fim de início</Form.Label>
                                <Form.Control placeholder="Fim do semestre" type="date" {...register('DataFim', { required: true })} />
                                {errors.DataFim && <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-success" onClick={handleSubmit(Enviar)}>Salvar</Button>
                    <Link href="/semestres" className='btn btn-outline-danger mx-2'> voltar</Link>
                </Form>
            </Pagina>
        </>
    )
}

export default form