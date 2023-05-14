import React, { Component } from "react";
import TodoForm from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ContainerApp } from "../components/ContainerApp";
import { Message, WelcomeMessage } from "../components/Message";
import {
  getTodoPlaceholderAsync,
  getTodoPlaceholderFetch,
  getTodoPlaceholderAxios,
} from "../API";

export default class TodoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    let response = await getTodoPlaceholderAsync();
    // let response = await getTodoPlaceholderAxios();
    // let response = await getTodoPlaceholderFetch();
    this.setState({ items: response });
  }

  pushToItems = (todo) => {
    const { items } = this.state;
    this.setState({
      items: [...items, todo],
    });
  };

  removeFromItems = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    return (
      <ContainerApp>
        <div className="col-xs-12 col-md-12">
          {/* <Message title={"Bem vindo"}></Message> */}
          <WelcomeMessage />
        </div>
        <div className="col-xs-12 col-md-12">
          <TodoForm pushToItems={this.pushToItems}></TodoForm>
        </div>
        <hr />
        <div className="col-xs-12 col-md-12">
          <TodoList
            items={items}
            removeFromItems={this.removeFromItems}
          ></TodoList>
        </div>
      </ContainerApp>
    );
  }
}
