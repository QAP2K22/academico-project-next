import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { dateFormatter } from '../pages/functions/functions'
import Link from 'next/link'

const ItemGaleria = (props) => {
  return (
    <>

      {props.titleText && <h2 className='mt-3'>{props.titleText}</h2>}

      <Row key={Math.random() + Math.random()} md={props.rowMd || 3}>
        {props.arrayName.map(item => (
          <Col key={Math.random() + Math.random()} className='mt-3'>
            <Card style={{ width: '18rem', marginBottom: '12px' }}>
              <Card.Img variant="top" src={item[props.photoName] ? `https://image.tmdb.org/t/p/w500${item[props.photoName]}` : "http://cdn4.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"} title={item[props.titleName]} />
              <Card.Body>
                <Card.Title>
                  {item[props.titleName] ?? "Titulo não informado"}
                </Card.Title>
                <Card.Text>
                  {`${props.primaryText ?? ""} ${props.primaryTextFormatter ? dateFormatter(item[props.primaryTextName]) : props.primaryTextName?? ""} `}
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Text>
                  {`${props.secondaryText ?? ""} ${item[props.secondaryTextName]  ?? ""} `}
                </Card.Text>
              </Card.Body>

              <Link className='btn btn-outline-warning text-dark m-2' href={item[props.linkId] ? `/${props.linkName}/${item[props.linkId]}` : `/${props.linkName}`}>{props.linkPlaceHolder ?? "Clique aqui"}</Link>
            </Card>

          </Col>
        ))}
      </Row>
    </>
  )
}

export default ItemGaleria


