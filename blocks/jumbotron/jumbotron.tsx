import React, { FC, useContext } from 'react'
import { IBlock, IImageProps } from 'WNTR/interfaces'
import { Container, Row, Col } from 'react-bootstrap'
import Context from 'WNTR/utils/context'
import Image from 'next/image'

const Jumbotron: FC<IJumbotron> = (block) => {

    const context = useContext(Context)

    return (
        <article className={block.alias} style={{ backgroundImage: `url(${block.image}?v=${block.imageProperties.cache})`}}>
            <Container className={`${block.alias}__container`}>
                <Row className={`${block.alias}__row`}>
                    <Col className={`${block.alias}__col`}>
                        <div dangerouslySetInnerHTML={{ __html: block.richText }}></div>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

interface IJumbotron extends IBlock {
    color: string, 
    image: string, 
    imageProperties: IImageProps,
    richText: string
}

export default Jumbotron