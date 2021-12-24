import Form from './components/Form.js';
import Header from './components/header.js';
import List from './components/List.js';

function init() {
  Header.render();
  List.render();
  List.listenEvent();
  Form.listenEvent();
}

init();
