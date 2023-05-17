import { Component } from "react";
import Department from "./Department";

class DepartmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/departments"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ departments: data.departments }));
  }

  render() {
    return (
      <section>
        <h1>Department List</h1>
        {this.state.departments.map((department) => (
          <Department displayName={department.displayName} />
        ))}
      </section>
    );
  }
}

export default DepartmentList