import Pagina from '@/components/Pagina'
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
            const id = query.id
            const cursos = JSON.parse(window.localStorage.getItem("Cursos")) ?? [] 
            const curso = cursos[id]

            for (let atributo in curso) {
                setValue(atributo,curso[atributo])
            }
        }
    }, [query.id])
    

    function Enviar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem("Cursos")) ?? []
        cursos.splice(query.id,1,dados)
        window.localStorage.setItem("Cursos", JSON.stringify(cursos))
        push("/cursos")
    }
    return (
        <>
            <Pagina titulo="Cursos" title="QaSchool" navBarLink="/cursos">
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
                                <Form.Label>Duração</Form.Label>
                                <Form.Control placeholder="Duração do curso" {...register('Duracao')} />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="modalidade">
                                <Form.Label>Modalidade</Form.Label>
                                <Form.Select aria-label="Default select example" {...register('Modalidade')}>
                                    <option value="Presencial">Presencial</option>
                                    <option value="Remoto">Remoto</option>
                                    <option value="EAD">EAD</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3 mt-2" controlId="formGridAddress1">
                        <Form.Label>Endereço de e-mail</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="text" placeholder="qaschool@qaschool.com" required {...register('Email', {
                                validate: (value) => value.length > 2
                            })}
                            />

                            {errors.Email && <Form.Control.Feedback type="invalid">
                                Você precisa inserir um e-mail válido!
                            </Form.Control.Feedback>}
                        </InputGroup>


                    </Form.Group>
                    <Button className="btn btn-primary" onClick={handleSubmit(Enviar)}>Enviar</Button>
                </Form>
            </Pagina>
        </>
    )
}

export default form