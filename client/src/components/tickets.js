import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { getUsers } from "../api/users";
import MaterialTable from "material-table";

export default function TicketsTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((result) => setUsers(result.data));
  }, []);

  return (
    <Container className="mt-5">
      <div className="mt-5">
        <MaterialTable
          title="Tickets Table"
          columns={[
            { title: "Id", field: "id" },
            { title: "Title", field: "firstName" },
            { title: "Description", field: "lastName" },
            { title: "Owner", field: "role" },
            { title: "CreatedAT", field: "createdDate" },
          ]}
          data={users}
          actions={[
            (users) => ({
              icon: "delete",
              tooltip: "Delete User",
              onClick: (event, users) =>
                alert(
                  `Are you sure you want to delete ( ${users.firstName} ${users.lastName} ) ?`
                ),
            }),
          ]}
        />
      </div>
    </Container>
  );
}
