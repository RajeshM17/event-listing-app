import {Tabs,Tab} from 'react-bootstrap'
import {useState} from 'react'
import ProductList from './ProductList';

function ControlledTabs(props) {
    const [key, setKey] = useState('');
  
    return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey={props.data} title={props.category}>
        </Tab>
      </Tabs>
      {key?
      <ProductList url={key}/>:<></>
}
      </>
    );
  }
  
export default ControlledTabs;