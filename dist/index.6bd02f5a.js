const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "h1"
        }, "h1 from child1"),
        React.createElement("h2", {
            id: "h2"
        }, "h2 from child1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "h1"
        }, "h1 from child2"),
        React.createElement("h2", {
            id: "h2"
        }, "h2 from child2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
