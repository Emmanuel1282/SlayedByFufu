import React,{useState,useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SlayedByFufuCRUD = () =>
{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[name,setFirstName] = useState('')
  const[surname,setLastName] = useState('')
  const[email,setEmail] = useState('')
  const[phone,setPhone] = useState('')
  const[role,setRole] = useState('')

  const[editID,setEditID] = useState('')
  const[editName,setEditFirstName] = useState('')
  const[editSurname,setEditLastName] = useState('')
  const[editEmail,setEditEmail] = useState('')
  const[editPhone,setEditPhone] = useState('')

  const customerData = [
    {
      id : 1,
      Name :"Emmza",
      Surname:"Mndebele",
      Email:"emmza@gmail.com",
      Role:"Customer",
      Phone : "0649323809"
     
    },
    {
      id : 1,
      Name :"Siya",
      Surname:"Mnde",
      Email:"mnde@gmail.com",
      Role:"Customer",
      Phone : "0649754809"
     
    }
   
  ]
  const[data,setData] = useState([]);
  useEffect(() =>
  {
   getCustomerData();
  },[])

  //get API response
  const getCustomerData = () =>
  {
    axios.get('https://localhost:7113/api/Customer/GetCustomers')
    .then((result) =>{setData(result.data)})
    .catch((error)=>{
      console.log((error))
    })
  }

  /*Event handlers*/ 
  const handleEdit = (ID)=>
  {
    //alert(ID);
    handleShow();
  }

  const handleDelete = (ID)=>
  {
    if(window.confirm("Are you sure that you want to delete this customer?")== true)
    {
      alert(ID);
    }
    
  }

  const handleSave = ()=>
  {
    const url = 'https://localhost:7113/api/Customer/AddCustomer'
    const data ={
      "firstName": name,
    "lastName": surname,
    "email": email,
    "phone": phone,
    "role": role,
    }

    axios.post(url,data).then((result)=>{
      getCustomerData()
      clear();  //if data is saved, then call the clear() function to clear the form
      toast.success("Customer added!!");
    })
  }

  //clear the form
  const clear = ()=>{
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setRole('');

    setEditID('');
    setEditFirstName('');
    setEditLastName('');
    setEditEmail('');
    setEditPhone('');
  }
  const handleUpdate = ()=>
  {
    
  }

  return(
    <Fragment>
      <ToastContainer/>
      <br/>
      <Container>
      <Row>
        <Col>
        <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=> setFirstName(e.target.value)}/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder="Enter Surname" value={surname} onChange={(e)=> setLastName(e.target.value)}/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder="Enter Phone number" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder="Choose role" value={role} onChange={(e)=> setRole(e.target.value)}/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder="Enter Password"/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder="Confirm password"/>
        </Col>
        <Col>
        <button className="btn btn-primary" onClick={()=>handleSave()}>Submit</button>
        </Col>
      </Row>
      </Container>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
    
        <tbody>
        {
          data && data.length > 0?
          data.map((items,index)=>
        {
          return( <tr key = {index}>
            <td>{index +1}</td>
            <td>{items.name}</td>
            <td>{items.surname}</td>
            <td>{items.email}</td>
            <td>{items.role}</td>
            <td>{items.phone}</td>
            <td colspan={2}>
              <button className="btn btn-primary" onClick={()=> handleEdit(items.ID)}>Edit</button> &nbsp;
              <button className="btn btn-danger" onClick={()=> handleDelete(items.ID)}>Delete</button>
            </td>
          </tr>)
        })
        :
        'Loading...'
        }
      
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit customer details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
            <input type="text" className="form-control" placeholder="Enter Name" value={editName} onChange={(e)=> setEditFirstName(e.target.value)}/>
            </Col>
            <Col>
            <input type="text" className="form-control" placeholder="Enter Surname" value={editSurname} onChange={(e)=> setEditLastName(e.target.value)}/>
            </Col>
            <Col>
            <input type="text" className="form-control" placeholder="Enter Email" value={editEmail} onChange={(e)=> setEditEmail(e.target.value)}/>
            </Col>
            <Col>
            <input type="text" className="form-control" placeholder="Enter Phone number" value={editPhone} onChange={(e)=> setEditPhone(e.target.value)}/>
            </Col>        
           
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default SlayedByFufuCRUD;