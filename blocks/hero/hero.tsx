/* eslint-disable @next/next/no-img-element */
import React, { FC, useContext } from 'react'
import { IBlock, IImageProps } from 'WNTR/interfaces'
import { Container, Row, Col } from 'react-bootstrap'
import Context from 'WNTR/utils/context'

const Hero: FC<IHero> = (block) => {

    const context = useContext(Context)

    return (
        <article className={block.alias}>

            <img
            className={`${block.alias}__background`}
            src={`${block.background}?v=${block.image.cache}`}
            style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }}
            alt={`${context.website.name} Hero`} />

            <Container className={`${block.alias}__container`}>
                <Row className={`${block.alias}__row`}>
                    <Col xs={12} className={`${block.alias}__col`}>
                        <div className={`${block.alias}__body`}>
                            <div className={`${block.alias}__content`}>
                                <div dangerouslySetInnerHTML={{ __html: block.content }}></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

interface IHero extends IBlock {
    logo: string,
    background: string,
    content: string,
    image: IImageProps
}

export default Hero