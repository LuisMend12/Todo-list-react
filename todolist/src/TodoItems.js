import React, {component} from "react";

class TodoItems extends component {
    constructor(props){
        super(props);
        this.createTask = this.createTasks.bind(this);
    }
    createTask(item){
        return <li onClick={() => this.delete(item.key)} key ={item.key}>{item.key}</li>

    }
    delete(key){
        this.props.delete(key);
    }
    render(){
        var TodoEntries = this.props.entries;
        var listItems = TodoEntries.map(this.createTasks);


        return (
            <ul className = "theList">
                {listItems}    
            </ul>
        )
    }
}


export default TodoItems;