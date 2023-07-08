import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { deleteNote, fetchNotes } from '../actions';

// For datatable code reference
// https://react-data-table-component.netlify.app/?path=/docs/getting-started-intro--page

// for table dropdown
function ExpandedComponent({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

function DisplayNotes(props) {
  const [selectedRows, setSelectedRows] = React.useState(false);
  const [toggledClearRows, setToggleClearRows] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  // detect selected rows in table
  const handleChange = (e) => {
    setSelectedRows(e);
  };

  // get notes
  const notes = useSelector((store) => store.notes);

  // table setup
  const columns = [
    {
      name: 'Note',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row.title === 'test',
      style: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  ];

  // set up delete bar
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      /* eslint-disable-next-line */
      if (window.confirm('Are you sure you want to delete:')) {
        selectedRows.selectedRows.forEach((element) => {
          deleteNote(element.id, navigate, notes)(dispatch);
        });
        setToggleClearRows(!toggledClearRows);
      }
    };
    return (
      <button type="button" key="delete" onClick={handleDelete} style={{ backgroundColor: 'red' }}>
        Delete
      </button>
    );
  }, [notes, selectedRows, toggledClearRows]);

  return (
    <div>
      <p>Disclaimer: This site is not moderated. Anyone can post anything they want on this site. Please be considerate.</p>
      <div className="border">
        <DataTable
          title="Notes"
          columns={columns}
          data={notes}
          selectableRows
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          conditionalRowStyles={conditionalRowStyles}
          onSelectedRowsChange={handleChange}
          clearSelectedRows={toggledClearRows}
          contextActions={contextActions}
          pagination
          dense
          highlightOnHover
          expandOnRowClicked
        />
      </div>
    </div>
  );
}

export default DisplayNotes;
