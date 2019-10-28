import React, { Component } from 'react';
import MotItemThua from './MotItemThua';

class ItemThua extends Component {
      render() {
            let  items  = this.props.itemsThua;
            
            // console.log(items);
            
            
            if (items !== undefined) {
                  items = items.map((item, key) => <MotItemThua
                        key={key}
                        id={item.id}
                        idClient={item.idClient}
                        amount={item.amount}
                        phoneCase={item.phoneCase}
                        idDesign={item.idDesign}
                        anyMore={item.anyMore}
                        {...this.props} />)
            }
            
            
            return (
                  <div style={{textAlign:'center'}}>
                        {(items!==undefined &&items.length===0)?"":<h1> item thừa:(sửa tên đầu tiên này !!)</h1>}
                        
                         {items}
                  </div>
            );

      }
}

export default ItemThua;