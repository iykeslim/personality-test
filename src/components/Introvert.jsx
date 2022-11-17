import React from 'react'
import { Card } from 'react-bootstrap'

export const Introvert = () => {
    return (
        <div className=''>
            <Card className='d-flex text-center w-50 mx-auto border-0 rounded-3 shadow-sm'>
                <Card.Body>
                    <div>
                        <Card.Header className='rounded-2 justify-content-center align-items-center mb-2'><h2 className='justify-content-center align-items-center pt-2' >You tend to be an INTROVERT</h2></Card.Header>
                        <Card.Text className='text-center'>
                      
                            You recharge when you are all by yourself: you take pleasure in lone-activities such as reading, writing, meditating; you feel unproductive if you spend your time in a gathering or interact with people who do not enlighten you - the best activity for you is a mentally stimulating interactivity, whether with your matrials or with peopple.
                            
                        </Card.Text>
                    </div >
                </Card.Body>
            </Card>
        </div>
    )
}