import React from 'react'
import { Card } from 'react-bootstrap'

export const Introvert = () => {
    return (
        <div>
            <Card className='shadow d-flex text-center'>
                <Card.Body>
                    <div className=''>
                        <Card.Header><h1>You tend to be an INTROVERT</h1></Card.Header>
                    </div >
                </Card.Body>
            </Card>
        </div>
    )
}