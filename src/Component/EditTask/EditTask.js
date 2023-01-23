import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Actions/listTask';

const EditTask = ({task}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState(task.text);

  const handleEdit = () => {
      dispatch(editTask(task.id ,newTask ));
      handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
       Edit 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Form.Control
          type="text"
          placeholder="Edit task"
          onChange={(e) => setNewTask(e.target.value)}
          vlaue={newTask}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  )
}

export default EditTask