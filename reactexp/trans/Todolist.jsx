React.createClass('div', {className: "list"}, [

        this.props.data.map( (item,index) => {
            return (
                React.createClass('p', {key: index}, [item])
            )
        })

])