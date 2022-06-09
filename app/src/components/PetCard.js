import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './PetCard.css';

const PetCard = (props) => {
    return (
        <div className="col-4 pb-2">
            <div className="card">
                <div className="card-body">
                    <div className="pet-image" style={{ backgroundImage: `url(${props.petPictureUrl})` }}></div>
                    <h5 className="pt-3">{props.petName}</h5>
                    <h6 className="mb-2 text-muted">{props.petType}</h6>

                    <Link to={`/pets/${props.id}`}><Button type="button" className="btn btn-primary mx-1">Details</Button></Link>
                    <Link to={`/pets/edit/${props.id}`}><Button type="button" className="btn btn-danger mx-1">Edit</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default PetCard;
