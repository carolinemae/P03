import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import LoadingScreen from '../components/LoadingScreen';
import { QUERY_EMPLOYEE } from '../utils/queries';
import Auth from '../utils/auth';
import Login from '../pages/Login';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { UPDATE_EMPLOYEE } from '../utils/mutations';
import ProfileForm from '../components/ProfileForm';

const Profile = () => {
    // const employeeId = Auth.getProfile().data._id;
    // const { loading, data } = useQuery(QUERY_EMPLOYEE, { variables: { employeeId: employeeId }, })
    // const employee = data?.employee || [];
    // const employeeAddress = data?.employee.address || [];

    // const defaultValues = {
    //     phone: employee.phone,
    //     street: employeeAddress.street,
    //     city: employeeAddress.city,
    //     postcode: employeeAddress.postcode,
    // };

    // const [formState, setFormState] = useState(defaultValues);

    // const [updateEmployee] = useMutation(UPDATE_EMPLOYEE);

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const { data } = await updateEmployee({ variables: { employeeId: employeeId, ...formState }, })
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({ ...formState, [name]: value });
    // };

    return (
        <div>
            <ProfileForm />

            {/* {Auth.loggedIn() ? (
            <>
                {loading ? (
                <>
                    <LoadingScreen />
                </>
                ) : (
                <>
                <Form className='edit-form' onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Text className='profile-name'>{employee.firstName} {employee.lastName}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" name='phone' placeholder='0409 974 491' defaultValue={defaultValues.phone} value={formState.phone} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name='street' placeholder='112 Adelaide Road' defaultValue={defaultValues.street} value={formState.street} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3 center">
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" name='city' placeholder='Mannum' defaultValue={defaultValues.city} value={formState.city} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control type="number" placeholder='5238' name='postcode' defaultValue={defaultValues.postcode} value={formState.postcode} onChange={handleChange} />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="mb-3 center">
                        <Button variant="dark" type="submit">
                            Update
                        </Button>
                        <Link to='/'>
                            <Button variant="dark">
                                Close
                            </Button>
                        </Link>
                    </Form.Group>
                </Form>
                </>
                )}
            </>
            ) : (
            <>
                <div className='greeting'>You must be logged in.</div>
                <Login />
            </>
            )} */}
        </div>
    );
};

export default Profile;