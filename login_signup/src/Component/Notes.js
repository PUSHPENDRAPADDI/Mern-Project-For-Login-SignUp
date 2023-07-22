import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { NotesActions } from '../Action/NotesActions';
import { NavLink, useNavigate } from "react-router-dom";

export const Notes = (props) => {
  useEffect(() => {
    props.getNotes()
  }, [])

  const forEdit = (item) => {
    props.forEdit(item)
  }

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {props.note_list.map((item, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{item.title} 
              <NavLink onClick={()=> forEdit(item)} style={{'right': '69px', 'position': 'absolute'}} to="/createNote" className="navbar__login" >Edit</NavLink>
              </Accordion.Header>
              <Accordion.Body>
                {item.description}
              </Accordion.Body>
              <Accordion.Body>
                <img style={{width: "200px"}} src={`http://localhost:3001/${item.image}`}/>
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    note_list: state.NoteReducer.note_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotes: () => {
      return (
        dispatch(NotesActions.getNotes())
      )
    },
    forEdit:(item)=>{
      return(
        dispatch(NotesActions.forEdit(item))
      )
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
