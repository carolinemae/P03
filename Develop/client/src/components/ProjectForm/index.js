import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT } from '../../utils/mutations';
import { QUERY_PROJECTS } from '../../utils/queries';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProjectForm = () => {
    const [formState, setFormState] = useState({
        projectName: '',
        location: '',
        description: '',
    });

    const [createProject, { error }] = useMutation(CREATE_PROJECT, {
        update(cache, { data: { createProject } }) {
            try {
                const { projects } = cache.readQuery({ query: QUERY_PROJECTS });
                cache.writeQuery({
                    query: QUERY_PROJECTS,
                    data: { projects: [createProject, ...projects] },
                });
            } catch (err) {
                console.error(err);
            }
        }
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await createProject({ variables: { ...formState }, });
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value, });
    };

    return (
        <Form className='project-form'>
            <Form.Group>
                <Form.Control type="text" name='projectName' placeholder="New Project Name" value={formState.projectName} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" name='location' placeholder="Location" value={formState.location} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" name='description' placeholder="Description" value={formState.description} onChange={handleChange} />
            </Form.Group>
            <Button variant="dark" type="submit">
                Add
            </Button>
        </Form>
    );
};

export default ProjectForm;