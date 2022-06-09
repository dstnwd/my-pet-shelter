import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Table from 'react-bootstrap/Table';
import PetCard from './PetCard'

const AllPets = () => {
    
    const [allPets, setAllPets] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then((response) => {
                console.log(response.data);
                setAllPets(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <Container>
            <Row className="mt-4 mb-2 text-start">
                <h3 className='text-center'>These pets are looking for a good home</h3>
            </Row>

            <Row>
                {allPets.map((pet) => (
                    <PetCard
                        key={pet._id}
                        id={pet._id}
                        petName={pet.petName}
                        petType={pet.petType}
                        petPictureUrl={pet.petPictureUrl}
                    />
                ))}
            </Row>
            
            {/* <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPets.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType}</td>
                            <td>
                                <Link to={`/pets/${pet._id}`}><Button type="button" className="btn btn-primary mx-1">Details</Button></Link>
                                <Link to={`/pets/edit/${pet._id}`}><Button type="button" className="btn btn-danger mx-1">Edit</Button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table> */}

        </Container>
    )

}

export default AllPets;