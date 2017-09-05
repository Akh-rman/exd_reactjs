var styleButton = {
    fontSize: "100%",
    margin: 0,
    verticalAlign: "baseline",
    fontFamily: "sans-serif",
    color: "#222",
    background: "#eae7e7",
    border: "1px solid #d2c9c9",
    borderRadius: "3px",
    boxShadow: "inset 0 1px 0 0 #fff",
    fontWeight: "bold",
    padding: "7px 18px",
    textShadow: "0 1px 0 #fcfbfb",
};

var styleUl = {
    paddingLeft: "1em",
    listStyle: "disc outside none",
    textAlign: "left"
}

var styleTableHeader = {
    margin: "20px 0",
    padding: "10px",
    border: "1px solid #c8c8c8",
    fontSize: "14px",
    background: "#eee",
    fontWeight: "bold"
};

var styleTableData = {
    margin: "20px 0",
    padding: "10px",
    border: "1px solid #c8c8c8",
    fontSize: "14px"
};

var styleTable = {
    width: "100%",
    margin: "20px 0",
    borderCollapse: "collapse",
    fontSize: "16px"
};

var styleH2 = {
    color: "#646464",
    letterSpacing: "1px",
    marginBottom: "15px",
    fontWeight: "400"
};
var tableHeader = ["Year", "Model", "Price", "Buy"];

var tableData = {
    cars: {
        car_1: ["2013", "A", "$3200", <Button item = "Buy Now"/>],
        car_2: ["2011", "B", "$4400", <Button item = "Buy Now"/>],
        car_3: ["2016", "B", "$15500", <Button item = "Buy Now"/>]
    },
    trucks: {
        truck_1: ["2014", "D", "$18000", <Button item = "Buy Now"/>],
        truck_2: ["2013", "E", "$5200", <Button item = "Buy Now"/>]
    },
    convertibles: {
        convertible_1: ["2009", "F", "$2000", <Button item = "Buy Now"/>],
        convertible_2: ["2010", "G", "$6000", <Button item = "Buy Now"/>],
        convertible_3: ["2012", "H", "$12500", <Button item = "Buy Now"/>],
        convertible_4: ["2017", "M", "$50000", <Button item = "Buy Now"/>]
    }
};

function Input (props) {
    return (
        <div>
            New Only 
            <input id = {props.id} name = {props.name} value = {props.value} checked = {props.checked} type = {props.type}/>
        </div>
    );
}

function OptionItem (props) {
    return (
        <option value = {props.value} selected = {props.selescted}>{props.value}</option>
    );
}

function SelectTypeInput (props) {
    return (
        <select>
            <OptionItem value = {props.value[0]}/>
            <OptionItem value = {props.value[1]}/> 
            <OptionItem value = {props.value[2]}/> 
            <OptionItem value = {props.value[3]}/>   
        </select>  
    );
}

function SelectType () {
    return (
        <div>
            <p>
                Select Type
                <SelectTypeInput value = {["All", "Cars", "Trucks", "Convertibles"]}/>
            </p>
        </div>
    );
}

function ChooseOptions (props) {
    return (
        <div>
            <h2 style = {styleH2}>{props.title}</h2>
            <Input id = "coding" name = "interest" value = "coding" checked = "checked" type = "checkbox"/>
            <SelectType/>
        </div> 
    );
}

function TransportationTitle (props) {
    return (
        <div>
            <h2 style = {styleH2}>{props.title}</h2>
            The best place to buy vehicles online
        </div> 
    );
}

function TransportTitle (props) {
    return (
        <h2>{props.title}</h2>  
    );
}

function Button (props) {
    return (
        <button style = {styleButton}>{props.item}</button>
    );
}

function TableCell (props) {
    if (props.tag == "th") {
            var tag = <th style = {styleTableHeader}>{props.item}</th>;
        } else {
            var tag = <td style = {styleTableData}>{props.item}</td>;
        }
    return (
        tag
    );
}

function TableHeader (props) {
    return (
        <tr>
            <TableCell tag = "th" item = {props.item [0]}/>
            <TableCell tag = "th" item = {props.item [1]}/>
            <TableCell tag = "th" item = {props.item [2]}/>
            <TableCell tag = "th" item = {props.item [3]}/>  
        </tr>
    );
}

function TableData (props) {
    return (
        <tr>
            <TableCell tag = "td" item = {props.item [0]}/>
            <TableCell tag = "td" item = {props.item [1]}/>
            <TableCell tag = "td" item = {props.item [2]}/>
            <TableCell tag = "td" item = {props.item [3]}/>
        </tr>
    );
}

function TransportTable (props) {
    return (
        <ul style = {styleUl}>
            <table style = {styleTable}>
                <tbody>
                    <TableHeader item = {tableHeader}/>
                    <TableData item = {props.item}/>
                </tbody> 
            </table>
        </ul>
    );
}

function Transport (props) {
    return (
        <div>
            <h2>Cars</h2>
            <TransportTable item = {tableData.cars.car_1}/>
            <TransportTable item = {tableData.cars.car_2}/>
            <TransportTable item = {tableData.cars.car_3}/>
            <h2>Trucks</h2>
            <TransportTable item = {tableData.trucks.truck_1}/>
            <TransportTable item = {tableData.trucks.truck_2}/>
            <h2>Convertibles</h2>
            <TransportTable item = {tableData.convertibles.convertible_1}/>
            <TransportTable item = {tableData.convertibles.convertible_2}/>
            <TransportTable item = {tableData.convertibles.convertible_3}/>
            <TransportTable item = {tableData.convertibles.convertible_4}/>
        </div>
    );
}

function TransportationApp(props) {
    return (
        <div>
            <TransportationTitle title = "Welcome to React Transportation"/>
            <ChooseOptions title = "Choose Options"/>
            <Transport/>
        </div>
    );
}

ReactDOM.render (
    <TransportationApp />,
    document.getElementById("root") 
);