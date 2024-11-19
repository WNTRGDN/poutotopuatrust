import React, { FC } from 'react'
import { IBlock } from 'WNTR/interfaces'
import { Container, Row, Col } from 'react-bootstrap'

const Embed: FC<IEmbed> = (block) => {
    return (
        <article className={block.alias}>
            <Container>
                <Row>
                    <Col className={`${block.alias}__col`}>
                        <iframe className={`${block.alias}__iframe`} src={block.src} height={block.height} width={block.width}></iframe>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

interface IEmbed extends IBlock {
    src: string,
    height: number, 
    width: number,
    constrain: boolean
}

export default Embed