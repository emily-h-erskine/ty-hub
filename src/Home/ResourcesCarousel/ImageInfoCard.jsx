import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ImageInfoCard({ imageUrl, title, description, buttonText, buttonHref }) {
  const cardStyle = {
    width: '18rem',
    border: '5px solid #FACD1F',
    margin: '1%',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={buttonHref}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
