import React, { FC } from 'react'
import { Hero, Heading, Breadcrumbs, Cards, Image, Text, Split, Form, Embed, Jumbotron, Figures, Members, Teasers } from 'WNTR/blocks'
import { IBlock } from 'WNTR/interfaces';

var controls: { [key: string]: any } = {
    Hero: Hero,
    Heading: Heading,
    Breadcrumbs: Breadcrumbs,
    Cards: Cards,
    Image: Image,
    Text: Text,
    Split: Split,
    Form: Form,
    Embed: Embed,
    Jumbotron: Jumbotron,
    Figures: Figures,
    Members: Members,
    Teasers: Teasers
};

const Block: FC<IBlock> = (block) => {
    if (controls[block.type] !== undefined){
        const Block = controls[block.type]
        return (
            <Block {...block} />
        )
    }
    return null
}

export default Block