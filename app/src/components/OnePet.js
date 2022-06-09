import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './OnePet.css';

const OnePet = () => {

    // const [onePet, setOnePet] = useState([]);
    const [allPets, setAllPets] = useState([]);
    const { id } = useParams();
    const [pet, setPet] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((response) => {
                console.log(response.data);
                setPet(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const adoptPetHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pets/${id}/delete`)
            .then((response) => {
                console.log(response.data);
                setAllPets(allPets.filter((pet) => pet._id !== id));
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <Container>
            <Row className="my-3 py-2">
                <Col className="text-start col-8">
                    <div className="text-center">
                        <img src={pet.petPictureUrl} className="rounded pet-image-2" alt="..." />
                    </div>
                </Col>
                
                <Col className="text-start col-4">
                    <h3 className="my-2">{pet.petName}</h3>
                    <p>Type: { pet.petType }</p>
                    <p>Description:{ pet.petDescription }</p>
                    <p>Skill 1: { pet.petSkillOne }</p>
                    <p>Skill 2: { pet.petSkillTwo }</p>
                    <p>Skill 3: { pet.petSkillThree }</p>
                    <Button type="button" className="btn btn-danger my-2" onClick={(e) => adoptPetHandler(id)}>Adopt</Button>
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default OnePet;