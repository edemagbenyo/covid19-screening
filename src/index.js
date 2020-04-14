import "bootstrap";

import "./styles/main.scss";
import "./ui/countries";
import "./ui/graph";
import React from "react";
import { render } from "react-dom";

const div = React.createElement('div',null,'The number are here')
render(div,document.getElementById('numbers'))