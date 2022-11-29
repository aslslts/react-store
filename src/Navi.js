// import React from "react";

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";

// export default class Navi extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   }
//   render() {
//     return (
//       <>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">Northwind App</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />

//             <Collapse isOpen={this.state.isOpen} navbar style={{flexGrow: 0}}>
//               <Nav className="ml-auto" navbar>
//                 <NavItem>
//                   <NavLink href="/components">Components</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink href="https://github.com/reactstrap/reactstrap">
//                     GitHub
//                   </NavLink>
//                 </NavItem>
//                 <UncontrolledDropdown nav inNavbar>
//                   <DropdownToggle nav caret>
//                     Options - {this.props.cart.length}
//                   </DropdownToggle>
//                   <DropdownMenu right>
//                     <DropdownItem>Option 1</DropdownItem>
//                     <DropdownItem>Option 2</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem>Reset</DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//               </Nav>
//             </Collapse>

//         </Navbar>
//       </>
//     );
//   }
// }

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Navi(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="me-auto" href="/">
          Northwind App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={{ flexGrow: 0 }}>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options - {props.cart.length}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
