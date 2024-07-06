import React from "react";
import { Component } from "react";
import "./index.css";
import { Button } from "@adobe/react-spectrum";
import "@spectrum-web-components/action-bar/sp-action-bar.js";
import { MdModeEdit, MdDelete } from "react-icons/md";
import withRouter from "../withRouter";
import {
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
} from "@adobe/react-spectrum";



const airportsList = [
  {
    id: 1,
    airport: "Indra Gandhi International Airport",
    country: "India",
    code: "DEL",
    terminal: 1,
  },
  {
    id: 2,
    airport: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    terminal: 5,
  },
  {
    id: 3,
    airport: "Heathrow Airport",
    country: "England",
    code: "LHR",
    terminal: 6,
  },
  {
    id: 4,
    airport: "Istanbul Airport",
    country: "Turkey",
    code: "IST",
    terminal: 3,
  },
  {
    id: 5,
    airport: "Rajiv Gandhi International Airport",
    country: "Texas",
    code: "DFW",
    terminal: 14,
  },
];

class Airports extends Component {
  isChecked = (key) => {
    const { navigate } = this.props;
    navigate(`/airport/${key}`);
  };
  render() {
    return (
      <div className="side-content">
        <div className="top-section">
          <h1>Airports</h1>
          <Button variant="primary" style="fill">
            + Add new
          </Button>
        </div>
        <div>
          <TableView
            aria-label="Airports"
            selectionMode="single"
            onAction={(key) => this.isChecked(key)}
          >
            <TableHeader>
              <Column>All Airports</Column>
              <Column>Country</Column>
              <Column>Code</Column>
              <Column>Terminals</Column>
              <Column align="end"></Column>
            </TableHeader>
            <TableBody>
              {airportsList.map((each) => (
                <Row key={each.id}>
                  <Cell>{each.airport}</Cell>
                  <Cell>{each.country}</Cell>
                  <Cell>{each.code}</Cell>
                  <Cell>{each.terminal}</Cell>
                  <Cell>
                    <sp-action-button slot="buttons" label="Edit">
                      <MdModeEdit slot="icon" />
                    </sp-action-button>
                    <sp-action-button slot="buttons" label="Delete">
                      <MdDelete slot="icon" />
                    </sp-action-button>
                  </Cell>
                </Row>
              ))}
            </TableBody>
          </TableView>
        </div>
      </div>
    );
  }
}

export default withRouter(Airports);
