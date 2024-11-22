import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import { IBlock, ICrops } from 'WNTR/interfaces'

const Teasers: FC<ITeasers> = (teasers) => {
    console.log(teasers)
    return (
        <article className={teasers.alias}>
            <Container className="py-5">
                <Row>
                    {teasers.heading ?
                        <Col xs={12}>
                            <h2 className={`${teasers.alias}__heading mb-4`}>{teasers.heading}</h2>
                        </Col>
                    : null }
                    {teasers.pages.map((item, index) =>
                        <Col xs={6} xl={3} key={index}>
                            {item.link ?
                                <Link className={`${teasers.alias}__card`} href={item.link} data-content={item.text}>
                                   <Teaser {...item} />
                                </Link> :
                                <div className={`${teasers.alias}__card`} data-content={item.text}>
                                    <Teaser {...item} />
                                </div>
                            }
                        </Col>
                    )}
                </Row>
            </Container>
        </article>
    )
}

const Teaser: FC<ITeaser> = (teaser) => {
    return (
        <div className="rounded bg-white overflow-hidden d-block mb-4 position-relative">
            <Image src={teaser.crops.Portrait} height={900} width={600} alt="" className="w-100 h-auto" />
            <div className="wntrTeasersBlock__content position-absolute top-0 left-0 w-100 h-100 p-4 d-flex flex-column">
                <h3 className="wntrTeasersBlock__title text-white text-uppercase">{teaser.title}</h3>
                <div dangerouslySetInnerHTML={{__html: teaser.text}} className="text-white text-uppercase"></div>
                <span className="text-white text-uppercase mt-auto text-end">See more</span>
            </div>
        </div>
    )
}

interface ITeasers extends IBlock {
    heading: string,
    pages: ITeaser[]
}

interface ITeaser {
    crops: ICrops,
    image: string,
    link: string,
    text: string,
    title: string
}

export default Teasers