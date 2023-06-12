import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import { NotesActions } from '../Action/NotesActions';

export const Notes = (props) => {
  useEffect(() => {
    props.getNotes()
  }, [])
  console.log(props.note_list, "Its for testing perpose");
  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <Accordion defaultActiveKey="0">
        {props.note_list.map((item, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>
                {item.description}
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
    note_list: state.NoteReducer.note_list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotes: () => {
      return (
        dispatch(NotesActions.getNotes())
      )
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
