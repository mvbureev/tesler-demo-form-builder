import React from 'react';
import Form from '@rjsf/core';
import './App.css';

// const Form = JSONSchemaForm.default;
const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: {type: 'string', title: 'Title', default: 'A new task'},
    done: {type: 'boolean', title: 'Done?', default: false}
  }
};

const uiSchema =  {
  done: {
    'ui:widget': 'select' // could also be "select"
  }
};

const log = (type) => console.log.bind(console, type);

function App() {
  return (
    <div className="App">
      <main>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </main>
    </div>
  );
}

export default App;
