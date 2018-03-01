import React, { Component } from 'react';
import { Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

  const Cards =(props) => {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card-img" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
 

export default Cards;