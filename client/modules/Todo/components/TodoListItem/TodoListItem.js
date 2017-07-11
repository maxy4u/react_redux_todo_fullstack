import React, { PropTypes,Component } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './TodoListItem.css';

class TodoListItem extends Component {
  constructor(props,context){
    super(props,context);
    this.state={readOnly:true,tempText:undefined};
  }
  handleKeyDown=(event,todo)=>{
    switch (event.key){
      case 'Enter':
      console.log('Enter');
      let editedTodo = Object.assign({},todo,{text:event.target.value});
      this.props.onEdit(editedTodo);
      this.setState({tempText:undefined});
      break;
      case 'Escape':
      console.log('Escape');
      this.setState({readOnly:true,tempText:undefined});
      break;
      default:
      return true;


    }
     
  }
  handleChange=(event,todo)=>{
    let tempText = event.target.value || " ";; 
    this.setState({tempText});

  }
  render(){
    let noteditable = true;
    return (
      <li draggable="true" className={styles.li_style} 
        onDoubleClick={()=>{
          debugger; 
          this.setState({readOnly:false});
        }} 
        >
        <div className={this.props.todo.completed ? styles.done_true : ''}>
          <button className="btn btn-link btn-xs" onClick={this.props.onComplete}>
            <FormattedMessage id="todoToggleStatus" />
          </button>
          <input type="text" value={this.state.tempText||this.props.todo.text} readOnly={this.state.readOnly} 
            onKeyDown={(event)=>this.handleKeyDown(event,this.props.todo)}
            onChange={(event)=>this.handleChange(event,this.props.todo)} 
          />
        </div>
      </li>
    );  
  }
  
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TodoListItem;
