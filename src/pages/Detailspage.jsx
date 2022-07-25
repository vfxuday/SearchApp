import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, Navigate } from "react-router-dom";
import { Pubdata } from "../Pubdata";
import TitleSearch from "../component/TitleSearch";
function Detailspage() {
  let params = useParams();
  const filtered = Pubdata.filter((item) => {
    return item.id == params.id;
  });

  if (filtered?.length > 0) {
    return (
      <>
        <TitleSearch />
        <div className="d-flex flex-wrap">
          <div className="row">
            {filtered.map((item) => (
              <div className="col-12" key={item.id}>
                <Card className="m-3">
                  <Card.Body>
                    <Card.Title>Congress Name : {item.congressName}</Card.Title>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      {item.pubtitle}
                      <br />
                      {item.pubauthors}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to="/" replace />;
  }
}

export default Detailspage;
