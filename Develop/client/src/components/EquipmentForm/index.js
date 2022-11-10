import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EQUIPMENT } from '../../utils/mutations';
import { QUERY_EQUIPMENT } from '../../utils/queries';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EquipmentForm = () => {
    const [formState, setFormState] = useState({
        equipId: '',
        equipName: '',
    });

    const [addEquipment, { error }] = useMutation(ADD_EQUIPMENT, {
        update(cache, { data: { addEquipment } }) {
            try {
                const { equipment } = cache.readQuery({ query: QUERY_EQUIPMENT });
                cache.writeQuery({
                    query: QUERY_EQUIPMENT,
                    data: { equipment: [addEquipment, ...equipment] },
                });
            } catch (err) {
                console.error(err);
            }
        }
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addEquipment({
                variables: { ...formState },
            });
            handleChange();
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value, });
    };

    return (
        <Form className='equip-form'>
            <Form.Group>
                <Form.Control type="text" name='equipId' placeholder='ID' value={formState.equipId} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" name='equipName' placeholder='Make & Model' value={formState.equipName} onChange={handleChange} />
            </Form.Group>
            <Button variant="dark" type="submit">
                Add
            </Button>
        </Form>
    );
};

export default EquipmentForm;